"use client"
import React, { useEffect, useState } from 'react'
import VideoCard from './overview/VideoCard';

type Props = {
  game: any
}

const Videos = ({ game }: Props) => {

  // const [hd, setHd] = useState(true)



  return (
    <div className='flex flex-col gap-6'>
{/* 
      <button
        className={`${hd ? "bg-green-800" : "bg-black"} cursor-pointer w-[120px] py-1 text-xs text-white border-[1px] border-gray-500 rounded`}
        onClick={() => setHd(prev => !prev)}
      >{hd ? "Calidad HD" : "Calidad SD"}</button> */}

      {
        game.videos.map((video: any, i: number) => (
            <VideoCard key={i} hd={true} video={video} muted={false} autoPlay={false} />
        ))
      }

    </div>
  )
}

export default Videos