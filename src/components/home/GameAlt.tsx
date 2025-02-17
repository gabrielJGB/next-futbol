import React from 'react'
import Team from './Team'
import Link from 'next/link'
import TeamAlt from './TeamAlt'

interface Game {
    id: string,
    status: string,
    statusColor: string,
    headline?: string,
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
        logo:string,

    },
    away: {
        id: string,
        name: string,
        score: string,
        logoURL: string,
        scorers?: [],
        redCards?: [],
        winner: boolean,
        logo:string
    }

}

const GameAlt = ({ gameState, selectedState, status, statusColor, home, away, id }: Game) => {



    return (
        <Link href={`/game/${id}`} className={`border-[1px] border-[--tw-color-600] hover:scale-[102%] transition-all shadow shadow-[--tw-color-800] rounded-lg text-white ${gameState === selectedState || selectedState === "" ? "flex" : "hidden"} flex-col gap-[1px]`}>

            <div className='grid grid-cols-8 gap-[1px] rounded-r-lg'>

                <TeamAlt
                    
                    name={home.name.replace("ROS","Central")}
                    redCards={home.redCards}
                    scorers={home.scorers}
                    logo={home.logo}
                    isHome={true}
                />
                

                <div className={`${home.winner ? "border-[--tw-color-300]":"border-black"}  border-l-[2px] bg-[--tw-color-950] col-span-1 flex flex-col justify-center items-center text-[21px] font-bold`}>
                    {home.score}
                </div>


                <TeamAlt
                    
                    name={away.name.replace("ROS","Central")}
                    redCards={away.redCards}
                    scorers={away.scorers}
                    logo={away.logo}
                    isHome={false}
                />

                <div className={`${away.winner ? "border-[--tw-color-300]":"border-black"} border-l-[2px] bg-[--tw-color-950] col-span-1 flex flex-col justify-center items-center text-[21px] font-bold`}>
                    {away.score}

                </div>


                <div
                    style={{ backgroundColor: statusColor }}
                    className={`${statusColor === "rgb(185, 28, 28)" ? "animate-pulse" : ""}  text-white row-span-2 row-start-1 col-start-8 col-span-1 flex justify-center items-center text-[10px] md:text-[11px] font-bold text-center rounded-r-lg px-[1px]`}>
                    {status}
                </div>


                {/* </div> */}



                {/* <Link href={`/game/${id}`} className='bg-[--tw-color-600]  text-white flex justify-center items-center col-span-1 text-2xl font-bold cursor-pointer active:bg-[--tw-color-700] md:active:bg-[--tw-color-500] md:hover:bg-[--tw-color-500] '>
                    +
                </Link> */}
            </div>
            {/* <div className='grid grid-cols-8 gap-[1px] ' >


                {
                    [home.scorers, away.scorers].map((scorer: any, j: number) => (

                        <div key={j} className={`col-span-4 ${j === 1 ? "col-start-7" : ""} flex flex-row  ${scorer.length ? "py-[2px]" : ""} px-[5px] flex-wrap justify-center text-white bg-slate-300`}>

                            {
                                scorer &&
                                scorer.map((goal: any, i: number) => (

                                    <div key={i} className='text-[11px] text-black text-center '>

                                        <span className='font-bold text-xs'>{goal.clock.displayValue}</span>
                                        {
                                            "athletesInvolved" in goal &&
                                            <span> {goal.athletesInvolved[0].shortName}</span>
                                        }
                                        {i != scorer.length - 1 && <span className='px-[3px]'>;</span>}
                                    </div>

                                ))
                            }

                        </div>
                    ))
                }

            </div> */}
        </Link>
    )
}

export default GameAlt