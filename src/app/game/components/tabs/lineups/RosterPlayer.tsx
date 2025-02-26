import React from 'react'
import { getPlayerColor, getPlayImg } from '@/utils/game'
import ball from '@/assets/ball_64x64.png'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    player: any
}

const RosterPlayer = ({ player }: Props) => {


    return (
        <Link
            className='flex flex-row flex-wrap items-center gap-2 text-[13px] md:py-2 py-3 hover:bg-[--tw-color-700] transition-all cursor-pointer'
            href={`/player/${player.athlete.id}`}
        >


            <div className='bg-[--tw-color-900] border-[1px] border-[--tw-color-700] rounded w-[30px] text-center font-bold' >
                {player.jersey || "-"}
            </div>

            <div
                style={{ backgroundColor: getPlayerColor(player.position) }}
                className='text-xs bg-green-500 text-black font-bold text-center rounded w-[35px]'>
                {player.position?.abbreviation || "SUP"}
            </div>

            <div>{player.athlete.fullName}</div>


            {
                "plays" in player &&
                player.plays.map((play: any, i: number) => (
                    <div key={i} className='flex flex-row gap-[3px] items-center '>

                        <Image src={getPlayImg(play, player.subbedOut)} alt="play" width={13} height={13} />
                        <div className='text-gray-400 font-extrabold text-[11px]'>{play.clock.displayValue}</div>

                    </div>
                ))

            }




        </Link>
    )
}

export default RosterPlayer