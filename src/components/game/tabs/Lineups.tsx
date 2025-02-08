"use client"
import { sortRoster } from '@/utils/game'
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
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [width] = useState(window.innerWidth)







    return (
        <div >

            {
                roster && !formation &&
                <TeamSelector game={game} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
            }

            <div>
                <div className='overflow-x-auto'>

                    {
                        roster && formation &&
                        <Field game={game} />
                    }
                    {
                        roster &&
                        <div className={`grid grid-cols-2 gap-4 mt-4 md:w-full w-[850px]`}>
                            <Roster roster={sortRoster(game.rosters[0].roster)} logo={""} />
                            <Roster roster={sortRoster(game.rosters[1].roster)} logo={""} />
                        </div>
                    }

                </div>
            </div>

        </div>
    )
}

export default Lineups