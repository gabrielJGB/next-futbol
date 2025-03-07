import React from 'react'

type Props = {
    player: any
}

const IMG_SIZE = 19

const getSlug = (flagString: string) => {

    const regex = /\/([a-z]+)\.png$/i;
    const slug = flagString.match(regex);

    if (slug === null)
        return ""

    return slug[1]

}

const getUri = (flagString: string) => {

    const slug = getSlug(flagString)
    const uri = `https://a1.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/${slug}.png?w=${IMG_SIZE + 15}&h=${IMG_SIZE + 15}`
    return uri

}


const Player = ({ player }: Props) => {


    const height = player.displayHeight != undefined ? player.displayHeight.replace(" m", "") : false
    const age = player.age

    
     

    return (
        <div className='flex flex-row items-center justify-between text-xs md:py-2 py-3 md:hover:bg-[--tw-color-700] active:bg-[--tw-color-700] transition-all cursor-pointer px-1'>
            <div className='flex flex-row items-center gap-2'>
                <div className='w-[23px] py-[1px] bg-[--tw-color-950] rounded text-center font-bold'>{"jersey" in player ? `${player.jersey}` : "-"}</div>
                {
                    "flag" in player &&
                    <img src={getUri(player.flag.href)} alt="Logo" width={IMG_SIZE} height={IMG_SIZE} />
                }
                <div >{player.fullName}</div>
            </div>

            <div className='flex flex-row divide-x-[1px] divide-[--tw-color-700] items-center justify-center gap-x-1'>
                {
                    height &&
                    <div >{height.length === 4 ? height : height + "0"} <span className='text-[10px] text-gray-400'>m</span></div>
                }
                {
                    age &&
                    <div className='pl-1'>{age} <span className='text-[10px] text-gray-400'>años</span></div>
                }
            </div>
        </div>
    )
}

export default Player