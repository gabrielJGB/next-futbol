import { formatDate, formatDate2, formatDate3 } from '@/utils/dates'
import Link from 'next/link'
import React from 'react'

type Props = {
  article: any
}

const ArticleCard = ({ article }: Props) => {


  const handlePress = () => {


    let id = false
    let type = article.type


    if ("id" in article) {
      // team || player
      id = article.id

    } else {
      // league
      const url = article.links.api.self.href
      const match = url.match(/\/(\d+)/)
      id = match && match[1] ? match[1] : null

    }


    if (type === "Media") {

      return `/video/${id}`

    }
    else if (type === "dStory") {
      return `/article/${id}`

    }
    else
      return "";

  }

  return (
    <Link
      href={handlePress()}
      className='flex flex-col gap-1 bg-[--tw-color-800] rounded-lg border-[1px] border-[--tw-color-800] md:hover:border-[--tw-primary] active:border-[--tw-primary] cursor-pointer'

    >
      {
        "images" in article && article.images.length &&
        <img src={article.images[0].url} className='rounded-t-lg' alt="Imagen" />
      }

      {
        <div className='flex flex-col gap-2 p-2'>
          <div className='text-xs text-gray-400 font-bold'>{formatDate(article.published)}</div>
          <div className='text-[20px] leading-6 font-semibold'>
            {`${article.type === 'Media' ? "[Video]" : ""} ${article.headline}`}
          </div>
          <div className='text-[12px] text-gray-300'>{article.description}</div>
        </div>
      }

    </Link>
  )
}

export default ArticleCard