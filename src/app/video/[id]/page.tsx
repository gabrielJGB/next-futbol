import VideoCard from '@/app/game/components/tabs/overview/VideoCard'
import { fetchVideo } from '@/utils/fetch'
import React from 'react'


type Params = {
    params: Promise<{ id: string }>
}

const Page = async ({ params }: Params) => {
    const { id } = await params
    const video = await fetchVideo(id)

    
    

    return (
        <div className='mx-auto md:w-[65%] w-[100%] md:mt-6 mt-0 bg-[--tw-color-800] md:p-2 p-0 rounded'>

            <VideoCard  hd={true} video={video} autoPlay={false} muted={false} />

        </div>
    )
}

export default Page