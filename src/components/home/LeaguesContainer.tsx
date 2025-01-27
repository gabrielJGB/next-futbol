"use client"

import React, { Suspense, useEffect, useState } from 'react'
import League from './League'
import GameCard from './Game'
import { getFlag, getStatus, getStatusColor, leagueHasState } from '@/utils/game'
import { fetchLaegues } from '@/utils/fetch'
import { useDateStore } from '@/stores/dateStore'
import Sorted from './Sorted'
// import { fetchTasks } from '@/utils/fetch'

type Props = {
    leagues: any
}

const LeaguesContainer = ({ leagues }: Props) => {

    const [_leagues, setLeagues] = useState(leagues)
    const [sortedEvents, setSortedEvents] = useState<any>(false)
    const [selectedState, setSelectedState] = useState("")
    const { setStoredDate } = useDateStore()


    useEffect(() => {

        const events = _leagues.flatMap((item: any) => item.events);
        const sortedEvents = events.sort((a: any, b: any) => new Date(a.date).valueOf() - new Date(b.date).valueOf());


        const groupedByDate = Object.entries(
            sortedEvents.reduce((acc: any, event: any) => {
                acc[event.date] = acc[event.date] || [];
                acc[event.date].push(event);
                return acc;
            }, {})
        )
            .map(([date, events]) => ({ date, events })) 
            .sort((a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf()); 

            
            
        setSortedEvents(groupedByDate)
        


    }, [])



    useEffect(() => {

        const date = _leagues.length > 0 ? _leagues[0].events[0].date.split("T")[0].replaceAll("-", "") : ""
        // setStoredDate(date)

        // let interval = setInterval(() => {

        //     fetchLaegues(date)
        //         .then(resp => {
        //             setLeagues(resp)
        //         })

        // }, 60 * 1000);

        // return () => { clearInterval(interval) }

    }, [])


    const getTeamObject = (game: any, i: number) => {
        return {
            id: game.competitors[i].id,
            name: game.competitors[i].team.shortDisplayName,
            logoURL: game.competitors[i].team.logo,
            score: game.status.type.state != "pre" ? game.competitors[i].score : "",
            scorers: game.details.filter((d: any) => d.team.id === game.competitors[i].id && d.scoringPlay && !d.shootout),
            redCards: game.details.filter((d: any) => d.team.id === game.competitors[i].id && d.redCard),
            winner: game.competitors[i].winner
        }
    }



    if (_leagues.length === 0)
        return <div className='text-center mt-8 font-bold text-sm'>Sin partidos</div>


    return (

        <div className='flex flex-col md:gap-10 gap-7 mt-8 md:mx-0 mx-[2px] '>

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

                <button
                    className={`w-[200px] ${selectedState === "sort" ? "bg-slate-900 text-white border-slate-700" : "bg-gray-950 border-transparent"} hover:text-white  p-2   cursor-pointer`}
                    onClick={() => { setSelectedState(prev => prev === "sort" ? "" : "sort") }}
                >
                    Ordenar por hora
                </button>
            </div>


            <div className='flex flex-col gap-4'>


                {
                    selectedState === "sort" ?
                      <Sorted
                            sortedEvents={sortedEvents}
                            selectedState={selectedState}
                       />

                        :


                        <>
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
                        </>
                }
            </div>






        </div>

    )
}

export default LeaguesContainer