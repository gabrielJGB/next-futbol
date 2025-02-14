"use client"

import React, { useEffect, useState } from 'react'
import GameHeader from '@/app/game/components/GameHeader'
import TabContent from '@/app/game/components/TabContent'
import TabBar from '@/app/game/components/TabBar'
import Info from './tabs/Tab_Overview'
import { fetchGame } from '@/utils/fetch'


type Props = {
    gameData: any,
    tabs: any,
    id: string
}

const Main = ({ gameData, tabs, id }: Props) => {

    const [selectedTab, setSelectedTab] = useState(0)
    const [game, setGame] = useState(gameData)

    useEffect(() => {
        if (window != undefined)
            setSelectedTab(window.screen.width < 800 ? 0 : 1)
    }, [])


    // useEffect(() => {
    //     fetchGame(id)
    //         .then(resp => setGame(resp))

    //     let interval = setInterval(() => {
    //         console.log("Fetching game id", id);

    //         fetchGame(id)
    //             .then(resp => setGame(resp))

    //     }, 180 * 1000);

    //     return () =>  clearInterval(interval) 

    // }, [])




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
                />
            </div>

            <div className='z-20 relative top-0 w-full md:w-[65%]'>
                <TabBar tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                <TabContent game={game} selectedTab={selectedTab} />
            </div>

        </div>
    )
}

export default Main