"use client"

import React, {  useEffect, useState  } from 'react'
import GameHeader from '@/components/game/GameHeader'
import TabContent from '@/components/game/TabContent'
import Tabs from '@/components/game/Tabs'
import Info from './tabs/Info'


type Props = {
    gameData: any,
    tabs: any
}

const GameContainer = ({ gameData, tabs }: Props) => {

    const [selectedTab, setSelectedTab] = useState(0)
    const [game, setGame] = useState(gameData)
    


    useEffect(() => {

        

        if (window != undefined) {

            setSelectedTab(window.screen.width < 800 ? 0 : 1)
        }

    }, [])




    return (
        <div className=' mx-0 md:mx-10 my-0 md:my-6 flex md:flex-row flex-col gap-0 md:gap-6 transition-all'>


            <GameHeader
                game={game.header.competitions[0]}
                details={game.header.competitions[0].details}
                leagueName={game.header.league.name}
                stage={game.header.season.name}
                leagueId={game.header.league.slug}
            />

            <div className='z-20 top-0 relative w-full md:w-[80%]'>
                <Tabs tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                <TabContent selectedTab={selectedTab} />
            </div>

        </div>
    )
}

export default GameContainer