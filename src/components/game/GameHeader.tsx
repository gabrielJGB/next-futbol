import React from 'react'
import Info from './tabs/Info'
import Link from 'next/link'
import { formatTitle, getLogo, getStatus, getStatusColor } from '@/utils/game'
import Team from './Team'
import Status from './Status'
import HeaderDetails from './Details'

type Props = {
    game: any,
    leagueName: string,
    leagueId: string,
    stage?: string,
    details: any

}

const GameHeader = ({ game, leagueName, leagueId, details, stage = "" }: Props) => {


    const home = game.competitors[0]
    const away = game.competitors[1]
    const stageName = stage?.split(",")[1]

    return (
        <div className='z-20 relative w-full md:w-[40%] flex flex-col gap-4 '>
            <div className="flex flex-col gap-1 bg-[--tw-color-800]  rounded-none md:rounded-lg shadow shadow-slate-900 py-1">

                <div className="hover:underline font-bold text-center   ">
                    <Link href={`/league/${leagueId} `}>
                        {leagueName}
                    </Link>
                </div>

                <div className='text-center text-[12px] text-gray-400  font-bold'>{formatTitle(stageName).toUpperCase()}</div>
                <div className="grid grid-cols-3 justify-center items-center w-full ">

                    <Team team={home.team} />

                    <Status
                        status={getStatus(game.status.type.name, game.status.type.detail, game.date)}
                        statusColor={getStatusColor(game.status.type.state)}
                        homeScore={home.score}
                        awayScore={away.score}
                    />

                    <Team team={away.team} />

                </div>

                {
                    details != undefined &&
                    <HeaderDetails details={details} homeId={home.id} awayId={away.id} />
                }



            </div>
            <div className='hidden md:block'>
                <Info />
            </div>

        </div>

    )
}

export default GameHeader