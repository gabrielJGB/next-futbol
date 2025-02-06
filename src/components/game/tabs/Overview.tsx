import React from 'react'
import GameInfo from './overview/GameInfo'
import VideoCard from './overview/VideoCard'
import LeagueArticles from './overview/LeagueArticles'



type Props = {
  game: any
}



const Overview = ({ game }: Props) => {
  return (
    <div className='flex flex-col gap-4'>

      {
        game.videos?.length > 0 &&
          <VideoCard hd={true} video={game.videos[0]} muted={false} autoPlay={false} />
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