"use client"
import { getLogo, sortRoster } from '@/utils/game'
import React, { useActionState, useEffect, useState } from 'react'
import TeamSelector from './lineups/TeamSelector'
import Field from './lineups/Field'
import Roster from './lineups/Roster'

type Props = {
    game: any
}

const Lineups = ({ game }: Props) => {

    const roster = "roster" in game.rosters[0]
    const formation = "formation" in game.rosters[0] ? game.rosters[0].formation : false
    const homeLogo = getLogo(game.header.competitions[0].competitors[0].team, 16)
    const awayLogo = getLogo(game.header.competitions[0].competitors[1].team, 16)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [windowWidth, setWindowWidth] = useState(0)

    const homeFormation = game.rosters[0].formation
    const awayFormation = game.rosters[1].formation



    useEffect(() => {

        if (window != undefined)
            setWindowWidth(window.innerWidth)

    }, [])





    return (
        <>

            {
                roster && !formation &&
                <TeamSelector game={game} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
            }


            <div className='overflow-x-auto  px-1 md:px-0'>

                {
                    roster && formation &&
                    <Field game={game} homeLogo={homeLogo} awayLogo={awayLogo} homeFormation={homeFormation} awayFormation={awayFormation}/>
                }
              
                {
                    roster &&
                    <div
                        style={{ minWidth: windowWidth < 800 ? (windowWidth * 2) : "auto" }}
                        className='grid grid-cols-2 gap-3 mt-3'
                    >
                        <Roster roster={sortRoster(game.rosters[0].roster)} logo={homeLogo} />
                        <Roster roster={sortRoster(game.rosters[1].roster)} logo={awayLogo} />
                    </div>
                }


            </div>

        </>
    )
}

export default Lineups