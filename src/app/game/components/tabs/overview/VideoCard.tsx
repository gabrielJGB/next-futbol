"use client"

import VideoPlayer from '@/components/VideoPlayer'
import { convertTimestamp } from '@/utils/dates'
import React, { useEffect, useState } from 'react'

type Props = {
    video: any,
    muted: boolean,
    autoPlay: boolean,
    hd: boolean
}

const VideoCard = ({ video, muted, autoPlay, hd }: Props) => {
    // video.links.mobile.source.href
    // video.links.source.HD.href

    const [url, setUrl] = useState(hd ? video.links.source.HD.href : video.links.mobile.source.href)
    const timestamp = convertTimestamp(video.originalPublishDate)
    const date = timestamp.DDMMYYYY
    const time = timestamp.time
    const published = `${date} ${time}`


    useEffect(() => {
        setUrl(hd ? video.links.source.HD.href : video.links.mobile.source.href)
    }, [hd])
    

    return (
        <div className='-z-12 shadow flex flex-col gap-1 shadow-gray-800  bg-[--tw-color-800] rounded-lg pt-2'>


            {
                "headline" in video &&
                <div className='text-[18px] font-bold px-2'>{video.headline}</div>
            }

            <div className='text-[11px] px-2 font-bold text-gray-300'>{published}</div>    

            {
                "description" in video &&
                <div className='text-gray-300 text-xs px-2 pb-1 leading-4'>{video.description}</div>
            }


            <VideoPlayer videoUrl={url} thumbnail={video.thumbnail} muted={muted} autoPlay={muted} />
        </div>
    )
}

export default VideoCard