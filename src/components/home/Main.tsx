"use client"

import React, { Suspense, useEffect, useState } from 'react'
import League from './League'
import GameCard from './Game'
import { countStates, getFlag, getStatus, getStatusColor, leagueHasState } from '@/utils/game'
import { fetchLaegues } from '@/utils/fetch'
import { useDateStore } from '@/stores/dateStore'
import Sorted from './Sorted'
import { useStates } from '@/stores/states'
import { formatDate3, isSameDay } from '@/utils/dates'
import constants  from '@/data/constants.json'
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
    const gamesStatesCount = countStates(leagues)


    useEffect(() => {

        const date: any = _leagues.length > 0 ? formatDate3(_leagues[0].events[0].date) : undefined
        const dateObject = date != undefined? new Date(_leagues[0]?.events[0].date) : undefined

        setStoredDate(date)

        fetchLaegues(date)
            .then(resp => setLeagues(resp))
            .catch(error => setLeagues([]))


        if (dateObject != undefined && isSameDay(dateObject, new Date())) {
            console.log("Fetching Leagues ", new Date());

            let interval = setInterval(() => {
                fetchLaegues(date)
                    .then(resp => setLeagues(resp))

            }, constants.delay_sec * 1000);

            return () => { clearInterval(interval) }
        }

    }, [])




    if (_leagues.length === 0)
        return <div className='text-center mt-8 font-bold text-sm'>Sin partidos</div>


    return (

        <div className='flex flex-col md:gap-10 gap-7 mt-8 mx-1 '>

            <div className='flex  flex-row justify-evenly  items-stretch gap-0  text-gray-300 text-xs  transition-all rounded '>
                <button
                    className={`${selectedState === "post" ? "bg-slate-900 text-white border-slate-700" : " border-transparent"} px-3 rounded hover:text-white border-[1px] p-2  cursor-pointer transition-all`}
                    onClick={() => setSelectedState(prev => prev === "post" ? "" : "post")}
                >
                    Finalizados ({gamesStatesCount.post})
                </button>

                <button
                    className={`${selectedState === "in" ? "bg-red-900 text-white border-red-700" : "border-transparent"} px-3 rounded hover:text-white border-[1px] p-2   cursor-pointer transition-all`}
                    onClick={() => setSelectedState(prev => prev === "in" ? "" : "in")}
                >
                    Jugando ({gamesStatesCount.in})
                </button>

                <button
                    className={`${selectedState === "pre" ? "bg-green-900 text-white border-green-700" : " border-transparent"} px-3 rounded hover:text-white border-[1px] p-2   cursor-pointer transition-all`}
                    onClick={() => setSelectedState(prev => prev === "pre" ? "" : "pre")}
                >
                    Programados ({gamesStatesCount.pre})
                </button>

            </div>


            <div className='flex flex-col md:gap-12 gap-12'>

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
                                        leagueData={leaguesData?.filter((league: any) => league.id === data.leagues[0].id)[0]}
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