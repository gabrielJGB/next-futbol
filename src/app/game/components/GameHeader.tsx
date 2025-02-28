import React from 'react'
import Info from './tabs/Tab_Overview'
import Link from 'next/link'
import { formatTitle, getLogo, getStatus, getStatusColor } from '@/utils/game'
import Team from './GameTeam'
import Status from './GameStatus'
import HeaderDetails from './GameDetails'

type Props = {
    game: any,
    leagueName: string,
    leagueId: string,
    stage?: string,
    details: any,
    gameData: any,
    sofaId: any
}

const GameHeader = ({ game, leagueName, gameData, leagueId, details, stage = "", sofaId }: Props) => {


    const home = game.competitors[0]
    const away = game.competitors[1]
    const stageName = stage?.split(",")[1]

    const shootout = game.status.type.name === "STATUS_FINAL_PEN" ? `(${game.competitors[0].shootoutScore}-${game.competitors[1].shootoutScore})` : false
    
    console.log(game,shootout);
    


    return (
        <div className='flex flex-col gap-4 '>
            <div className="flex flex-col gap-1 bg-[--tw-color-800] rounded-none md:rounded-lg  py-1">


                <Link
                    href={`/league/${leagueId}`}
                    className="hover:underline font-bold text-center"
                >
                    {leagueName}
                </Link>


                <div className='text-center text-[10px] text-gray-400  font-bold'>
                    {formatTitle(stageName).toUpperCase()}
                </div>

                <div className="grid grid-cols-3 justify-center items-center w-full  ">

                    <Team team={home.team} />

                    <Status
                        status={getStatus(game.status.type.name, game.status.type.detail, game.date)}
                        statusColor={getStatusColor(game.status.type.state)}
                        homeScore={home.score}
                        awayScore={away.score}
                        winner={home.winner ? "home" : (away.winner ? "away" : false)}
                        shootout={shootout}
                    />

                    <Team team={away.team} />

                </div>

                {
                    details != undefined &&
                    <HeaderDetails details={details} homeId={home.id} awayId={away.id} />
                }

            </div>

            <div className='hidden md:block'>
                <Info game={gameData} sofaId={sofaId} />
            </div>

        </div>

    )
}

export default GameHeader