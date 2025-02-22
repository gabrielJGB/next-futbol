import React from 'react'
import Team from './Team'
import Link from 'next/link'
import TeamAlt from './TeamAlt'

interface Game {
    id: string,
    status: string,
    statusColor: string,
    headline: string | boolean,
    gameState: string,
    selectedState: string,
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

const GameAlt = ({ gameState, selectedState, status, statusColor, home, away, id, headline }: Game) => {



    return (
        <Link

            href={`/game/${id}`}
            className={`border-[1px] border-[--tw-color-600] active:border-[--tw-primary] md:hover:border-[--tw-primary] transition-all shadow shadow-[--tw-color-800] rounded-lg text-white ${gameState === selectedState || selectedState === "" ? "flex" : "hidden"} flex-col gap-[1px]`}

        >
            {/* <div className='rounded-t-lg text-xs font-bold text-gray-200 text-center px-2 p-1 bg-[--tw-color-900]'>
                Octavos de final
            </div> */}

            <div className='grid grid-cols-8 gap-[1px] rounded-r-lg'>

                {
                    [home, away].map((team: any, j: number) => (
                        <>
                            <TeamAlt

                                name={team.name.replace("ROS", "Central")}
                                redCards={team.redCards}
                                scorers={team.scorers}
                                logo={team.logo}
                                isHome={j === 0}
                            />

                            <div className={`flex flex-row ${team.winner ? "border-[--tw-color-300]" : "border-[--tw-color-800]"}  border-l-[1px] bg-[--tw-color-950] col-span-1 justify-between px-1 items-center text-[21px] font-bold`}>
                                <div></div>
                                <div className=''>{team.score}</div>
                                <div className='flex flex-col gap-1'>
                                    {
                                        team.redCards ?
                                            team.redCards.map((_:any, i:number) => (
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
                    className={`${gameState === "in" ? "animate-pulse md:text-[13px]" : ""}  text-white row-span-2 row-start-1 col-start-8 col-span-1 flex justify-center items-center text-[10px] md:text-[11px] font-bold text-center rounded-r-lg px-[1px]`}>
                    {status}
                </div>


                {/* </div> */}



                {/* <Link href={`/game/${id}`} className='bg-[--tw-color-600]  text-white flex justify-center items-center col-span-1 text-2xl font-bold cursor-pointer active:bg-[--tw-color-700] md:active:bg-[--tw-color-500] md:hover:bg-[--tw-color-500] '>
                    +
                </Link> */}
            </div>
            {/* {
                headline != undefined && false &&
                <div className='italic rounded-b-lg text-xs font-medium text-gray-200 px-2 py-2 bg-[--tw-color-900]'>
                    {headline}
                </div>

            } */}

        </Link>
    )
}

export default GameAlt