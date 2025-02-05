import React from 'react'
import VideoCard from './overview/VideoCard';

type Props = {
  game: any
}

const Videos = ({ game }: Props) => {

  console.log(game.videos);


  return (
    <div className='flex flex-col gap-6'>

      {
        game.videos.map((video: any, i: number) => (
          <div className=''>
            <VideoCard key={i} video={video} muted={false} autoPlay={false}/>
          </div>
        ))
      }

    </div>
  )
}

export default Videos