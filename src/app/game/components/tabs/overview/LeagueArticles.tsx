import { formatDate } from '@/utils/dates'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiNews, BiVideo } from 'react-icons/bi'

type Props = {
    news: any
}

const LeagueArticles = ({ news }: Props) => {



    const regex = /(\d+)/g;
    const articles = news.articles.map((x: any) => {
        return {
            headline: x.headline,
            image: x.images[0].url,
            published: x.published,
            type: x.type,
            id: x.links.api.self.href.match(regex)[1],
        }
    })




    const getIcon = (type: string) => {

        if (type === "dStory")
            return <BiNews size={14} />
        else
            return <BiVideo size={14} />

    }


    return (
        <div className='flex flex-col bg-[--tw-color-800] pb-2 rounded-lg divide-y-[1px] p-2 divide-[--tw-color-700]'>

            <div className='text-lg font-bold text-center pt-1 pb-2 '>{news.header}</div>

            {
                articles.map((article: any, i: number) => (

                    <Link key={i} href={`/${article.type === "dStory" ? "article" : "video"}/${article.id}`} className='flex flex-row gap-2 px-1 py-2 cursor-pointer md:hover:bg-[--tw-color-700] active:bg-[--tw-color-700] transition-all'>

                        <img
                            src={article.image}
                            className='bg-cover  rounded w-[60px] h-[50px]' alt='Imagen noticia' width={60} height={50}
                            style={{
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "space"
                            }}
                        />

                        <div className='flex flex-col gap-0'>
                            <div className='flex flex-row items-center gap-1'>
                                {getIcon(article.type)}
                                <div className='text-gray-400 text-[11px] font-bold'> {formatDate(article.published)}</div>
                            </div>
                            <div className='md:text-xs text-[11px]'>{article.headline}</div>
                        </div>

                    </Link>
                ))
            }

        </div>
    )
}

export default LeagueArticles