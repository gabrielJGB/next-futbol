import React from 'react'
import GameCard from './Game'
import { getStatus, getStatusColor } from '@/utils/game'

type Props = {
    sortedEvents: any,
    selectedState: any
}

const Sorted = ({ sortedEvents, selectedState }: Props) => {
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

    sortedEvents.forEach((e:any) => {
        e.events
    });

    return (
        sortedEvents.map((elem: any, j: number) => (

            <div key={j} className='flex flex-col gap-2 bg-[--tw-color-800] rounded px-1 pb-1'>

                <div className='text-sm font-bold p-2'>

                    {`${String(new Date(elem.date).getHours()).padStart(2, "0")}:${String(new Date(elem.date).getMinutes()).padStart(2, "0")} hs`}
                </div>
                <div className='bg-red-800'>
                    {
                        elem.events.map((game: any, i: number) => (

                            <GameCard
                                key={i}
                                id={game.id}
                                gameState={game.status.type.state}
                                selectedState={selectedState}
                                statusColor={getStatusColor(game.status.type.state)}
                                status={getStatus(game.status.type.name, game.status.type.detail, game.date)}
                                home={getTeamObject(game.competitions[0], 0)}
                                away={getTeamObject(game.competitions[0], 1)}

                            />
                        ))
                    }
                </div>
            </div>
        ))
    )
}

export default Sorted