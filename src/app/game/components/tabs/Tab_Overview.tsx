"use client"
import React from 'react'
import GameInfo from './overview/GameInfo'
import VideoCard from './overview/VideoCard'
import LeagueArticles from './overview/LeagueArticles'
import AttackMomentum from './overview/AttackMomentum'
import GameArticle from './overview/GameArticle'



type Props = {
  game: any,
  sofaId: any
}

const getVideo = (game: any) => {

  const highlight = game.videos.find((video: any) => video.duration > 229)

  
  if (highlight != undefined) {
    return highlight

  } else {
    return game.videos[0]
  }
}

const Overview = ({ game, sofaId }: Props) => {



  return (
    <div className='flex flex-col gap-4 px-1'>

      {
        game.videos?.length > 0 &&
        <VideoCard hd={true} video={getVideo(game)} muted={false} autoPlay={false} />
      }

      {
        false &&
        <AttackMomentum sofaId={sofaId} />
      }

      
            {
                "article" in game &&
                <GameArticle article={game.article} />
      
              }
      

      <GameInfo game={game} />


      {
        "news" in game && game.news.articles.length > 0 ?
          <LeagueArticles news={game.news} />
          : <></>
      }


    </div>
  )
}

export default Overview