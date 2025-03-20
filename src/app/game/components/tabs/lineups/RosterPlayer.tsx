import React from 'react'
import { formatStat, getPlayerColor, getPlayImg } from '@/utils/game'
import ball from '@/assets/ball_64x64.png'
import arrowIn from '@/assets/arrow-in.png'
import arrowOut from '@/assets/arrow-out.png'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    player: any,
    showStats: any
}

const RosterPlayer = ({ player, showStats }: Props) => {

    const played = player.stats?.find(((s:any)=>s.shortDisplayName === "Ap")).value === 1


    return (
        <Link
            className='flex flex-col  md:hover:bg-[--tw-color-700] active:bg-[--tw-color-700] transition-all cursor-pointer  py-2 pl-1 '
            href={`/player/${player.athlete.id}`}
        >

            <div className='flex flex-row flex-wrap items-center gap-2 text-[13px] '>
                <div className='w-[24px] py-[1px] bg-[--tw-color-950] border-[1px] border-[--tw-color-700] rounded text-center font-semibold' >
                    {player.jersey || "-"}
                </div>

                <div
                    style={{ backgroundColor: getPlayerColor(player.position) }}
                    className='text-xs bg-green-500 text-black font-bold text-center rounded w-[35px]'>
                    {player.position?.abbreviation || "SUP"}
                </div>

                <div className={`text-[12px] text-white`}>{player.athlete.fullName}</div>


                {
                    "plays" in player &&
                    player.plays.map((play: any, i: number) => (
                        <div key={i} className='flex flex-row gap-[3px] items-center '>

                            <Image src={getPlayImg(play, player.subbedOut)} alt="play" width={13} height={13} />
                            <div className='text-gray-400 font-extrabold text-[11px]'>{play.clock.displayValue}</div>

                        </div>
                    ))

                }


            </div>

            {
                "subbedInFor" in player && showStats &&
                <div className='flex flex-row gap-1 items-center text-xs my-2'>
                    <Image src={arrowOut} alt="play" width={12} height={12} />
                    <div className='w-[24px] py-[1px] bg-[--tw-color-950] border-[1px] border-[--tw-color-700] rounded text-center font-semibold'>
                        {player.subbedInFor.jersey}
                    </div>
                    <div className='text-[11px]'>
                        {player.subbedInFor.athlete.displayName}
                    </div>
                </div>
            }

            {
                "subbedOutFor" in player && showStats &&
                <div className='flex flex-row gap-1 items-center text-xs my-2'>

                    <Image src={arrowIn} alt="play" width={12} height={12} />
                    <div className='w-[24px] py-[1px] bg-[--tw-color-950] border-[1px] border-[--tw-color-700] rounded text-center font-semibold'>
                        {player.subbedOutFor.jersey}
                    </div>
                    <div className='text-[11px]'>
                        {player.subbedOutFor.athlete.displayName}
                    </div>
                </div>
            }

            {
                "stats" in player &&

                <div className={`relative ${!showStats ? "h-0 hidden" : "h-auto"} transition-all flex flex-row justify-start flex-wrap gap-0  `}>
                    
                    {

                        player.stats.map((stat: any, i: number) => {
                            
                            
                            if(!played) return <></>

                            return (
                                // stat.value != 0 &&
                                stat.shortDisplayName != "Ap" &&
                                stat.shortDisplayName != "Sub" &&
                                (player.position?.abbreviation === "G" || stat.shortDisplayName != "GA") &&

                                <div key={i} className='w-[40%] flex flex-row  gap-2 items-center px-2'>

                                    <div className={`text-sm font-semibold ${stat.value === 0 && "text-gray-600"}`}>{stat.value}</div>
                                    <div className='text-[11px] text-gray-300 text-center'>{formatStat(stat)}</div>

                                </div>
                            )
                        })
                    }
                </div>
            }
        </Link>
    )
}

export default RosterPlayer