"use client"
import { sortRoster } from '@/utils/game'
import React, { useActionState, useEffect, useState } from 'react'
import TeamSelector from '../lineups/TeamSelector'
import Field from '../lineups/Field'
import Roster from '../lineups/Roster'

type Props = {
    game: any
}

const Lineups = ({ game }: Props) => {

    const roster = "roster" in game.rosters[0]
    const formation = "formation" in game.rosters[0] ? game.rosters[0].formation : false
    const [selectedIndex, setSelectedIndex] = useState(0)








    return (
        <div>

            {
                roster && !formation &&
                <TeamSelector game={game} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
            }

            <div className=''>

                {
                    roster && formation &&
                    <Field game={game} />
                }

                <div className='grid grid-cols-2 gap-4 mt-4'>
                    <Roster />
                    <Roster />
                </div>

            </div>

        </div>
    )
}

export default Lineups