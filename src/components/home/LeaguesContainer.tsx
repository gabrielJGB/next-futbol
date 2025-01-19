"use client"

import React, { Suspense, useEffect, useState } from 'react'
import League from './League'
import { log } from 'console'
import { getFlag, leagueHasState } from '@/utils/game'
import { fetchLaegues } from '@/utils/fetch'
import { useDateStore } from '@/stores/dateStore'
// import { fetchTasks } from '@/utils/fetch'

type Props = {
    leagues: any
}

const LeaguesContainer = ({ leagues }: Props) => {

    const [_leagues, setLeagues] = useState(leagues)
    const [selectedState, setSelectedState] = useState("")
    const { setStoredDate } = useDateStore()


    useEffect(() => {

        const date = _leagues.length > 0 ? _leagues[0].events[0].date.split("T")[0].replaceAll("-", "") : ""
        // setStoredDate(date)

        // let interval = setInterval(() => {


        //     // fetchLaegues(date)
        //     //     .then(resp => {
        //     //         setLeagues([])

        //     //     })



        // }, 30000);

        // return () => { clearInterval(interval) }
    }, [])

    if (_leagues.length === 0)
        return <div className='text-center mt-8 font-bold text-sm'>Sin partidos</div>


    return (

        <div className='flex flex-col md:gap-10 gap-7 mt-8 md:mx-0 mx-[2px]'>

            <div className='flex flex-row justify-center items-stretch gap-2 text-gray-400 text-xs font-bold transition-all'>
                <button
                    className={`flex-1 ${selectedState === "post" ? "bg-slate-800 text-white border-slate-700" : "bg-gray-950 border-transparent"} hover:bg-slate-800 hover:text-white border-[1px] p-2 rounded cursor-pointer`}
                    onClick={() => setSelectedState(prev => prev === "post" ? "" : "post")}
                >
                    Finalizados
                </button>

                <button
                    className={`flex-1 ${selectedState === "in" ? "bg-red-800 text-white border-red-700" : "bg-gray-950 border-transparent"} hover:bg-red-800 hover:text-white border-[1px] p-2 rounded  cursor-pointer`}
                    onClick={() => setSelectedState(prev => prev === "in" ? "" : "in")}
                >
                    Jugando
                </button>

                <button
                    className={`flex-1 ${selectedState === "pre" ? "bg-green-800 text-white border-green-700" : "bg-gray-950 border-transparent"} hover:bg-green-800 hover:text-white border-[1px] p-2 rounded  cursor-pointer`}
                    onClick={() => setSelectedState(prev => prev === "pre" ? "" : "pre")}
                >
                    Programados
                </button>

            </div>

            {
                _leagues?.map((data: any, i: number) => (
                    <League
                        key={i}
                        games={data.events}
                        flagUrl={getFlag(data.leagues[0].slug, 20)}
                        leagueName={data.leagues[0].name}
                        leagueHasState={leagueHasState(data, selectedState)}
                        selectedState={selectedState}

                    />
                ))
            }

        </div>

    )
}

export default LeaguesContainer