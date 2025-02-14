import { getLogoURL } from '@/utils/game'
import Image from 'next/image'
import React from 'react'

const IMG_SIZE = 15

type Props = {
    logoURL: string,
    name: string,
    redCards?: []

}

const Team = ({ logoURL, name, redCards }: Props) => {



    return (
        <div className='bg-gray-200 text-black py-[3px] px-1 col-span-3  w-full flex flex-col justify-center items-center '>

            <img className='w-[23px] h-[23px]' src={getLogoURL(logoURL, 33)} alt="" width={IMG_SIZE} height={IMG_SIZE} />
            
            <div className='flex flex-row flex-wrap justify-center items-center gap-[3px] cursor-pointer hover:underline'>

                <div className='text-[11px] md:text-[12px] font-bold text-center'>{name}</div>
                {
                    redCards?.map((_, i) => (
                        <div key={i} className='bg-red-600  w-[4px] h-[8px]'></div>
                    ))
                }


            </div>
        </div>

    )
}

export default Team