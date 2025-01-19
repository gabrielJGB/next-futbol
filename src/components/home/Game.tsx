import React from 'react'
import Team from './Team'

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
        winner: boolean

    },
    away: {
        id: string,
        name: string,
        score: string,
        logoURL: string,
        scorers?: [],
        redCards?: [],
        winner: boolean
    }

}

const GameCard = ({ gameState, selectedState, status, statusColor, home, away }: Game) => {



    return (
        <div className={`${gameState === selectedState || selectedState === "" ? "flex" : "hidden"} flex-col gap-[1px] shadow shadow-slate-900`}>
            <div className='grid grid-cols-10 gap-[1px]'>

                <div style={{ backgroundColor: statusColor }} className={`bg-red-700 text-white col-span-1 flex justify-center items-center text-[10px] md:text-[11px] font-bold text-center`}>{status}</div>


                <Team
                    logoURL={home.logoURL}
                    name={home.name}
                    redCards={home.redCards}
                />




                <div className={`${home.winner && "border-black"} border-b-[2px] bg-white col-span-1 flex flex-col justify-center items-center text-2xl font-bold`}>
                    {home.score}
                </div>

                <div className={`${away.winner && "border-black"} border-b-[2px] bg-white col-span-1 flex flex-col justify-center items-center text-2xl font-bold`}>
                    {away.score}

                </div>
                {/* </div> */}

                <Team
                    logoURL={away.logoURL}
                    name={away.name}
                    redCards={away.redCards}
                />

                <div className='bg-green-700  text-white flex justify-center items-center col-span-1 text-2xl font-bold cursor-pointer hover:bg-green-600  '> + </div>
            </div>
            <div className='grid grid-cols-2 gap-[1px] ' >


                {
                    [home.scorers, away.scorers].map((scorer: any, j: number) => (

                        <div key={j} className={`flex flex-row  ${scorer.length ? "py-[2px]" : ""} px-[5px] flex-wrap justify-center  bg-slate-300`}>

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

            </div>
        </div>
    )
}

export default GameCard