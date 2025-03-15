import ArticleCard from '@/app/team/components/ArticleCard'
import Spinner from '@/components/Spinner'
import { fetchLeagueArticles } from '@/utils/fetch'
import React, { useEffect, useState } from 'react'

type Props = {
  id: string
}

const Tab_Articles = ({ id }: Props) => {


  const [articles, setArticles] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {



    fetchLeagueArticles(id)
      .then(res => {
        setArticles(res.articles)
        console.log(res.articles);

      })
      .catch(error => setError(true))
      .finally(() => setLoading(false))
  }, [])


  if (loading)
    return <Spinner />

  if (error)
    return <div className='text-center mt-4 text-xs text-gray-400'>Sin datos</div>

  return (
    <div className='flex flex-col gap-6 md:mt-8'>
      {
        articles.map((article: any, i: number) => (
          <ArticleCard key={i} article={article} />
        ))
      }
    </div>
  )
}

export default Tab_Articles