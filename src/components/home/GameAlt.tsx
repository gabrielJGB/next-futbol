import React from 'react'
import Team from './Team'
import Link from 'next/link'
import TeamAlt from './TeamAlt'
import { formatTitle } from '@/utils/game'

interface Game {
    id: string,
    status: string,
    statusColor: string,
    gameState: string,
    selectedState: string,
    gameData: any,
    home: {
        id: string,
        name: string,
        score: string,
        logoURL: string
        scorers?: [],
        redCards?: [],
        winner: boolean,
        logo: string,


    },
    away: {
        id: string,
        name: string,
        score: string,
        logoURL: string,
        scorers?: [],
        redCards?: [],
        winner: boolean,
        logo: string
    }

}

const GameAlt = ({ gameState, selectedState, status, statusColor, home, away, id, gameData }: Game) => {


    const stage = gameData != undefined && "stage" in gameData ? gameData.stage : false
    const headline = gameData != undefined && "headline" in gameData ? gameData.headline : false
    const leg = gameData != undefined && "leg" in gameData ? gameData.leg : false



    return (
        <Link

            href={`/game/${id}`}
            className={`border-[1px] border-[--tw-color-600] active:border-[--tw-primary] md:hover:border-[--tw-primary] transition-all shadow shadow-[--tw-color-800] rounded-lg text-white ${gameState === selectedState || selectedState === "" ? "flex" : "hidden"} flex-col gap-[1px]`}

        >

            {
                stage &&
                <div className='rounded-t-lg text-xs font-bold text-gray-200 text-center px-2 p-1 bg-[--tw-color-900]'>
                    {formatTitle(stage)} {leg && " - " + leg}
                </div>
            }

            <div className='grid grid-cols-8 gap-[1px] rounded-r-lg'>

                {
                    [home, away].map((team: any, j: number) => (
                        <>
                            <TeamAlt
                                key={j}
                                name={team.name}
                                redCards={team.redCards}
                                scorers={team.scorers}
                                logo={team.logo}
                                isHome={j === 0}
                                rounded={{
                                    top: j == 0 && stage,
                                    bottom: j == 1 && headline

                                }}


                            />

                            <div className={`flex flex-row ${team.winner ? "border-[--tw-color-300]" : "border-[--tw-color-800]"}  border-l-[1px] bg-[--tw-color-950] col-span-1 justify-between px-1 items-center text-[21px] font-bold`}>
                                <div></div>
                                <div className=''>{team.score}</div>
                                <div className='flex flex-col gap-1'>
                                    {
                                        team.redCards ?
                                            team.redCards.map((_: any, i: number) => (
                                                <div key={i} className='bg-red-600  w-[4px] h-[8px]'></div>
                                            ))
                                            :
                                            <div></div>
                                    }
                                </div>
                            </div>
                        </>
                    ))
                }

                <div
                    style={{ backgroundColor: statusColor }}
                    className={`${gameState === "in" ? "animate-pulse md:text-[13px]" : ""}  text-white row-span-2 row-start-1 col-start-8 col-span-1 flex justify-center items-center text-[10px] md:text-[11px] font-bold text-center px-[1px]  ${!stage ? "rounded-tr-lg" : ""} ${!headline ? "rounded-br-lg" : ""}`}>
                    {status}
                </div>


                {/* </div> */}



                {/* <Link href={`/game/${id}`} className='bg-[--tw-color-600]  text-white flex justify-center items-center col-span-1 text-2xl font-bold cursor-pointer active:bg-[--tw-color-700] md:active:bg-[--tw-color-500] md:hover:bg-[--tw-color-500] '>
                    +
                </Link> */}
            </div>
            {
                headline &&
                <div className=' rounded-b-lg md:text-xs text-[11px] font-medium text-gray-400 px-3 py-2 bg-[--tw-color-900]'>
                    {headline}
                </div>

            }

        </Link>
    )
}

export default GameAlt