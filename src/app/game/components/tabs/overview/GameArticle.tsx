import Link from 'next/link';
import React from 'react'

type Props = {
    article: any
}

const GameArticle = ({ article }: Props) => {


    return (
        <Link href={`/article/${article.id}`} className='flex flex-col gap-1 transition-all hover:bg-[--tw-color-700] bg-[--tw-color-800] rounded-lg p-2'>
            <div className='hover:underline  text-lg font-bold'>[Artículo] {article.headline}</div>
            <div className='text-xs text-gray-300 '>{article.description} </div>
            {
                "images" in article &&
                <img className='rounded-lg' src={article.images[0].url} alt="Imagen" />
            }
        </Link>
    )
}

export default GameArticle