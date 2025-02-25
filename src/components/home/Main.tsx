"use client"

import React, { Suspense, useEffect, useState } from 'react'
import League from './League'
import GameCard from './Game'
import { getFlag, getStatus, getStatusColor, leagueHasState } from '@/utils/game'
import { fetchLaegues } from '@/utils/fetch'
import { useDateStore } from '@/stores/dateStore'
import Sorted from './Sorted'
import { useStates } from '@/stores/states'
import { formatDate3, isSameDay } from '@/utils/dates'
import { delay_sec } from '@/data/constants.json'
// import { fetchTasks } from '@/utils/fetch'

type Props = {
    leagues: any,
    leaguesData: any
}

const Main = ({ leagues, leaguesData }: Props) => {

    const [_leagues, setLeagues] = useState(leagues)
    const [selectedState, setSelectedState] = useState("")
    const { setStoredDate } = useDateStore()
    const { setSofaEvents } = useStates()



    useEffect(() => {

        const date = _leagues.length > 0 ? formatDate3(_leagues[0].events[0].date) : ""
        const dateObject = new Date(_leagues[0].events[0].date)

        setStoredDate(date)

        fetchLaegues(date)
            .then(resp => setLeagues(resp))
        

        if (isSameDay(dateObject, new Date()) ) {
            console.log("Fetching Leagues ", new Date() );
            
            let interval = setInterval(() => {
                fetchLaegues(date)
                    .then(resp => setLeagues(resp))

            }, delay_sec * 1000);

            return () => { clearInterval(interval) }
        }

    }, [])




    if (_leagues.length === 0)
        return <div className='text-center mt-8 font-bold text-sm'>Sin partidos</div>


    return (

        <div className='flex flex-col md:gap-10 gap-7 mt-8 mx-1 '>

            <div className='flex flex-row justify-center items-stretch gap-0 border-[1px] border-gray-800 text-gray-400 text-xs font-bold transition-all'>
                <button
                    className={`flex-1 ${selectedState === "post" ? "bg-slate-900 text-white border-slate-700" : "bg-gray-950 border-transparent"}  hover:text-white border-[1px] p-2  cursor-pointer`}
                    onClick={() => setSelectedState(prev => prev === "post" ? "" : "post")}
                >
                    Finalizados
                </button>

                <button
                    className={`flex-1 ${selectedState === "in" ? "bg-red-900 text-white border-red-700" : "bg-gray-950 border-transparent"}  hover:text-white border-[1px] p-2   cursor-pointer`}
                    onClick={() => setSelectedState(prev => prev === "in" ? "" : "in")}
                >
                    Jugando
                </button>

                <button
                    className={`flex-1 ${selectedState === "pre" ? "bg-green-900 text-white border-green-700" : "bg-gray-950 border-transparent"}  hover:text-white border-[1px] p-2   cursor-pointer`}
                    onClick={() => setSelectedState(prev => prev === "pre" ? "" : "pre")}
                >
                    Programados
                </button>

            </div>


            <div className='flex flex-col md:gap-12 gap-8'>

                {
                    selectedState === "sort" ?
                        <Sorted
                            sortedEvents={_leagues?.sorted}
                            selectedState={selectedState}
                        />
                        :
                        <>
                            {
                                _leagues.map((data: any, i: number) => (
                                    <League
                                        key={i}
                                        games={data.events}
                                        flagUrl={getFlag(data.leagues[0].slug, 20)}
                                        leagueName={data.leagues[0].name}
                                        leagueHasState={leagueHasState(data, selectedState)}
                                        selectedState={selectedState}
                                        leagueData={leaguesData.filter((league: any) => league.id === data.leagues[0].id)[0]}
                                    />
                                ))
                            }
                        </>
                }
            </div>
        </div>

    )
}

export default Main