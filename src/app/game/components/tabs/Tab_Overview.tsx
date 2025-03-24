"use client"
import React from 'react'
import GameInfo from './overview/GameInfo'
import VideoCard from './overview/VideoCard'
import LeagueArticles from './overview/LeagueArticles'
import AttackMomentum from './overview/AttackMomentum'
import GameArticle from './overview/GameArticle'
import PossessionCard from './overview/PossessionCard'



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

  const state = game.header.competitions[0].status.type.state
  const statsInGame = "statistics" in game.boxscore.teams[0] && game.boxscore.teams[0].statistics.length > 0


  

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
        statsInGame && (state === "in" || state === "post") &&
        <PossessionCard
          homeTeam={game.header.competitions[0].competitors[0].team}
          awayTeam={game.header.competitions[0].competitors[1].team}
          homeStats={game.boxscore.teams[0].statistics}
          awayStats={game.boxscore.teams[1].statistics}
        />
      }


      {
        "news" in game && game.news.articles.length > 0 ?
          <LeagueArticles news={game.news} />
          : <></>
      }


    </div>
  )
}

export default Overview