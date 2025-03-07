"use client"
import React from 'react'
import ArticleCard from './ArticleCard';

type Props = {
  data: any,
  selectedTab: number,
}

const TeamArticles = ({ data, selectedTab }: Props) => {




  return (
    <div className={`max-md:${selectedTab === 2 ? "flex " : "hidden "} rounded-lg text-sm flex flex-col gap-6`}>

      {
        data.length > 0 ?
          data.map((article: any, i: number) => (
            <ArticleCard key={i} article={article} />
          ))
          :
          <div className='text-center text-gray-300'>Sin datos</div>
      }

    </div>
  )
}

export default TeamArticles