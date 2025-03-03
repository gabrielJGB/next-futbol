import VideoCard from '@/app/game/components/tabs/overview/VideoCard'
import Spinner from '@/components/Spinner'
import { formatDate, formatDate2 } from '@/utils/dates'
import { fetchArticle } from '@/utils/fetch'
import Link from 'next/link'
import React from 'react'

type Params = {
  params: Promise<{ id: string }>
}

const Page = async ({ params }: Params) => {

  const { id } = await params
  const data = await fetchArticle(id)
  const article = data.headlines[0]
  const published = formatDate(article.published)
  const regex = /https:\/\/twitter\.com\/[^\/]+\/status\/\d+/g;
  let tweets = article.story.match(regex);
  const story = article.story
    .replaceAll("<p>", "<p style=margin-top:19px>")
    .replaceAll("<h2>", "<h2 style=margin-top:20px;font-size:18px;font-weight:bold >")
    .replace("<hr>", "<hr style=margin-top:10px>")
    .replace("twitter.com", "xcancel.com")

  if (tweets)
    tweets = tweets.map((item: any, i: number) => (item.replace("twitter.com", "xcancel.com")))


  const getTagRoute = (category: any) => {
    console.log(category);
    

    if (category.type === "team") {
      return `/team/${category.team.id}`

    } else if (category.type === "athlete") {
      return `/player/${category.athlete.id}`

    } else if (category.type === "league") {
      return `/league/${category.leagueId}`
    } else
      return '/'

  }


  return (
    <div className='flex flex-col  justify-center items-center mx-auto'>
      <div className='flex flex-col gap-2 justify-center md:mt-6 md:pt-3 pt-2 md:px-6 px-2 md:w-[60%] w-[100%] bg-[--tw-color-800] pb-2 rounded'>
        <h1 className='md:text-3xl text-2xl  font-bold'>{article.headline}</h1>
        <div className='pt-2 text-sm text-gray-300 font-bold '>{published}hs</div>

        <p className='text-gray-300 text-[16px] '>{article.description}</p>

        {
          "images" in article &&

          article.images.filter(((x: any) => x.type === "inline" || x.type === "header")).map((image: any, i: number) => (
            <div key={i} className='flex flex-col gap-2'>
              <img className='rounded-lg' src={image.url} alt="Imagen" />
              <div className='text-xs text-gray-300'>{image.caption}</div>
            </div>
          ))

        }


        <p className='pt-1 px-2 md:text-[14px] text-[14px] md:leading-6 leading-6' dangerouslySetInnerHTML={{ __html: story }}></p>


        {
          tweets != undefined &&
          tweets.map((item: any, i: number) => (
            <a target='_blank' href={item} className='text-sm hover:underline'> {item}</a>
          ))
        }

        {

          "source" in article &&
          <div className='text-xs pt-2 text-gray-400 font-bold'>FUENTE: {article.source}</div>
        }

        <hr className='mt-2' />

        {
          "video" in article && article.video.length > 0 &&

          <div className='flex flex-col gap-4 divide-y-[1px] divide-[--tw-color-600]'>

            {
              article.video.map((video: any, i: number) => (

                <VideoCard key={i} hd={true} video={video} autoPlay={false} muted={false} />
              ))
            }

          </div>
        }

        <div className='text-sm mt-2'>En esta noticia:</div>
        <div className='flex flex-wrap flex-row gap-2 mb-2'>
          {
            "categories" in article &&
            article.categories.map((cat: any, i: number) => {

              return cat.description && (
                <Link key={i} href={getTagRoute(cat)} className=' bg-[--tw-color-700] border-[1px] border-[--tw-color-600] p-2 rounded curser-pointer text-xs hover:bg-[--tw-color-600]'>
                  {cat.description.split("-")[0]}
                </Link>
              )
            }
            )
          }
        </div>





        {

          "related" in article && article.related.length > 0 &&

          <div className='flex flex-col divide-y-[1px] divide-[--tw-color-600] my-2 mb-2'>

            <div className='bg-black text-sm px-2 py-1 text-white font-bold'>NOTICIAS RELACIONADAS:</div>
            {
              article.related.map((related: any, i: number) => (
                <Link href={`/article/${related.id}`} key={i}>
                  <div className='px-1 pb-2 pt-2 hover:bg-[--tw-color-700] text-sm transition-all'>{related.headline}</div>
                </Link>
              ))
            }

          </div>
        }

      </div>
    </div>
  )
}

export default Page