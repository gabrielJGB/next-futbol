import VideoCard from '@/app/game/components/tabs/overview/VideoCard'
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
    .replaceAll("<p>", "<p style=margin-top:14px>")
    .replaceAll("<h2>", "<h2 style=margin-top:20px;font-size:17px;font-weight:bold >")
    .replace("twitter.com", "xcancel.com")

  if (tweets)
    tweets = tweets.map((item: any, i: number) => (item.replace("twitter.com", "xcancel.com")))

  console.log(article);
  

  return (
    <div className='flex flex-col  justify-center items-center mx-auto'>
      <div className='flex flex-col gap-2 justify-center md:mt-6 pt-2 md:px-6 px-2 md:w-[60%] w-[100%] bg-[--tw-color-800] pb-2 rounded'>
        <h1 className='text-2xl font-bold'>{article.headline}</h1>

        <div className='pt-2 text-sm text-gray-300 font-bold '>{published}hs</div>

        <p className='text-gray-300 text-[16px]'>{article.description}</p>

        {
          "images" in article &&
          <img className='rounded-lg' src={article.images[0].url} alt="Imagen" />
        }


        <p className='pt-1 text-[13px] leading-5' dangerouslySetInnerHTML={{ __html: story }}></p>


        {
          tweets != undefined &&
          tweets.map((item: any, i: number) => (
            <a target='_blank' href={item} className='text-sm hover:underline'> {item}</a>
          ))
        }

        <hr />

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

        {

          "source" in article &&
          <div className='text-xs pt-2 text-gray-400 font-bold'>FUENTE: {article.source}</div>
        }


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