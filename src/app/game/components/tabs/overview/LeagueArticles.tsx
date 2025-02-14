import { formatDate } from '@/utils/dates'
import Image from 'next/image'
import React from 'react'

type Props = {
    news: any
}

const LeagueArticles = ({ news }: Props) => {

    const articles = news.articles.map((x: any) => {
        return {
            headline: x.headline,
            image: x.images[0].url,
            published: x.published,
            type: x.type,
            href: x.links.api.self.href,
        }
    })
    
    


    return (
        <div className='flex flex-col bg-[--tw-color-800] pb-2 rounded-lg divide-y-[1px] divide-[--tw-color-700]'>

            <div className='text-lg font-bold text-center py-2  '>Noticias Torneo</div>

            {
                articles.map((article: any, i: number) => (
                    
                    <div key={i} className='flex flex-row gap-2 p-2 cursor-pointer hover:bg-[--tw-color-700] transition-all'>
                        <img src={article.image} className='rounded w-[60px] h-[50px]' alt='Imagen noticia' width={65} height={65}/>
                        <div className='flex flex-col gap-0'>
                            <div className='text-gray-400 text-[11px] font-bold'>{formatDate(article.published)}</div>
                            <div className='text-xs'>{article.headline}</div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default LeagueArticles