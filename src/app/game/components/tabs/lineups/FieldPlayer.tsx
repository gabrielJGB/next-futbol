import { getPlayImg } from '@/utils/game';
import arrowOut from '@/assets/arrow-out.png'
import arrowIn from '@/assets/arrow-in.png'
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';

type Props = {
    player: any,
    color: string,
    isThisBoca: boolean,
    plays: any,
    subbedOutFor: any
}

const IMG_SIZE = 8

const FieldPlayer = ({ player, color, isThisBoca, plays, subbedOutFor }: Props) => {

    const getColor = (plays: any, subbedOutFor: any) => {



        if (plays) {
            if (plays.find((play: any) => play.redCard))
                return "#ff1616"
            else if (plays.find((play: any) => play.yellowCard))
                return "yellow"
        }

        // if (subbedOutFor)
        //     return "#c5c5c5"

        return "white"
        // return subbedOutFor ? "#c1c1c1" : "white"
    }

    const getName = (name: any) => {
        const arr = name.split(" ")



        if (arr.length === 2 && arr[1] === "")
            return name

        if (arr.length === 2)
            return `${arr[1]}`

        if (arr.length === 3)
            return `${arr[1]} ${arr[2]}`

        return name
    }


    const playerName = "lastName" in player.athlete && player.athlete.lastName != "" ? player.athlete.lastName : player.athlete.displayName

    return (
        <Link href={`/player/${player.athlete.id}`} className='flex flex-col justify-center items-center gap-1 hover:scale-110 transition-all cursor-pointer'>

            <div className='flex flex-row flex-wrap items-center gap-1'>
                {
                    plays &&
                    plays.filter((x: any) => x.scoringPlay).map((play: any, i: number) => (

                        <div key={i} >
                            <Image src={getPlayImg(play, false)} style={{ width: 12, height: 12 }} alt="play" />
                        </div>
                    ))
                }
            </div>

            <div
                style={{ background: ` ${isThisBoca ? "rgb(30, 64, 175)" : `#${color}`} `, textShadow: "black 1px 1px 3px" }}
                className={`z-2 relative flex border-[2px] border-gray-900 justify-center items-center rounded-lg text-[16px] md:text-[18px] font-bold w-[36px] h-[36px] shadow shadow-gray-800`}
            >
                {
                    isThisBoca &&
                    <div style={{ position: "absolute", top: 0, left: 0 }}>
                        <div className='bg-blue-800 h-[10px] w-[32px] rounded-t-[6px]'></div>
                        <div className='bg-yellow-500 h-[12px] w-[32px] '></div>
                        <div className='bg-blue-800 h-[10px] w-[32px] rounded-b-[6px]'></div>

                    </div>
                }

                <div className='z-1 absolute'> {player.jersey}</div>
            </div>

            <div
                style={{ textShadow: "black 1px 1px 2px" }}
                className='flex flex-col gap-0 justify-center items-center text-xs md:text-sm text-center max-w-[100px] font-bold'
            >
                <div className='flex flex-row items-center gap-[2px] '>
                    {
                        subbedOutFor &&
                        <Image src={arrowOut} width={IMG_SIZE} height={IMG_SIZE} alt="arrow" />
                    }
                    <div style={{ color: getColor(plays, subbedOutFor) }}>{playerName}</div>
                </div>

                {
                    subbedOutFor &&
                    <div className='flex flex-row items-center gap-[1px]'>
                        <Image src={arrowIn} width={IMG_SIZE} height={IMG_SIZE} alt="arrow" />
                        <div className='flex flex-row items-center gap-1 text-[10px]'>

                            <div
                                style={{ background: ` ${isThisBoca ? "rgb(30 ,64, 175)" : `#${color}`} `, textShadow: "black 1px 1px 1px" }}
                                className={`z-2 relative flex border-[1px] border-gray-900 justify-center items-center rounded   w-[18px] h-[17px] shadow shadow-gray-800`}
                            >
                                {subbedOutFor.jersey}
                            </div>

                            <div className='md:text-[12px] text-[9px]'>{getName(subbedOutFor.athlete.displayName)}</div>
                        </div>
                    </div>
                }

            </div>
        </Link>
    )
}

export default FieldPlayer