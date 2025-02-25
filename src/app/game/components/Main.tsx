"use client"

import React, { useEffect, useState } from 'react'
import GameHeader from '@/app/game/components/GameHeader'
import TabContent from '@/app/game/components/TabContent'
import TabBar from '@/app/game/components/TabBar'
import { fetchGame } from '@/utils/fetch'
import { delay_sec } from '@/data/constants.json'

type Props = {
    gameData: any,
    tabs: any,
    id: string,
    sofaId: string
}

const Main = ({ gameData, tabs, id, sofaId }: Props) => {

    const [selectedTab, setSelectedTab] = useState(0)
    const [game, setGame] = useState(gameData)

    const gameDate = new Date(gameData.header.competitions[0].date)
    const todayDate = new Date()

    useEffect(() => {
        if (window != undefined)
            setSelectedTab(window.screen.width < 800 ? 0 : 1)
    }, [])

    
    
    
    useEffect(() => {
        
        fetchGame(id)
            .then(resp => setGame(resp))

        const recentGame = todayDate.getTime() < gameDate.getTime() + (3600 * 1000 * 3) && todayDate.getTime() > gameDate.getTime() - (3600 * 1000 * 1)

        if (recentGame) {
            let interval = setInterval(() => {
                console.log("Fetching game id ", id , new Date() );

                fetchGame(id)
                    .then(resp => setGame(resp))

            }, delay_sec * 1000);

            return () => clearInterval(interval)
        }


    }, [])




    return (
        <div className=' mx-0 md:mx-10 my-0 md:my-6 flex md:flex-row flex-col gap-0 md:gap-6 transition-all'>


            <div className='z-20 relative w-full md:w-[35%]'>
                <GameHeader
                    game={game.header.competitions[0]}
                    details={game.header.competitions[0].details}
                    leagueName={game.header.league.name}
                    stage={game.header.season.name}
                    leagueId={game.header.league.slug}
                    gameData={game}
                    sofaId={sofaId}
                />
            </div>

            <div className='z-20 relative top-0 w-full md:w-[65%]'>
                <TabBar tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                <TabContent game={game} selectedTab={selectedTab} sofaId={sofaId} />
            </div>

        </div>
    )
}

export default Main