import { formatDate, formatDate2, formatDateObject } from '@/utils/dates'
import { getLogo } from '@/utils/game'
import Link from 'next/link'
import React from 'react'

type Props = {
    team: any,
    opponent: any,
    teamHome: any,
    id: string,
    homeScore: string,
    awayScore: string,
    leagueName: string,
    gameResult: string,
    gameDate: string,
    homeShootoutScore: string,
    awayShootoutScore: string,
    headToHeadGame:boolean,
}

const LOGO = 22
const getResultColor = (gameResult: any) => {

    if (gameResult === "P")
        return "#e91e1e"
    else if (gameResult === "G")
        return "#33af33"
    else if(gameResult === "E")
        return "#cbcb38"
    else
        return "gray"
}

const Game = ({ id, team, opponent, teamHome, homeScore, awayScore, leagueName, homeShootoutScore, awayShootoutScore, gameResult, gameDate,headToHeadGame }: Props) => {

    const home = teamHome ? team : opponent
    const away = teamHome ? opponent : team


    return (
        <Link
            style={{ borderColor: !headToHeadGame? getResultColor(gameResult):"gray" }}
            href={`/game/${id}`}
            className='flex flex-col bg-[--tw-color-900] border-slate-600 border-[1px] divide-y-[1px] divide-[--tw-color-800] rounded-lg'
        >

            <div className='flex flex-row items-center justify-between  px-2 py-1 font-bold'>
                <div className='text-[11px]  text-gray-400'>{leagueName}</div>
                <div className='text-[11px]  text-gray-400'>{ formatDateObject(new Date(gameDate))}</div>
            </div>
            {
                [home, away].map((team: any, i: number) => (

                    <div  key={i} className='flex flex-row justify-between items-center'>
                        <div className='flex flex-row gap-2 items-center pl-2 py-1'>
                            <img src={getLogo(team, LOGO)} width={LOGO} height={LOGO} alt="" />
                            <div className='text-xs'>{team.displayName}</div>
                        </div>
                        <div className={`text-center bg-[--tw-color-950] text-[22px]  py-0 ${i === 1 ? "rounded-br-lg" : ""} w-[50px] font-semibold`}>{i === 0 ? homeScore : awayScore}</div>
                    </div>

                ))
            }
        </Link>
    )
}

export default Game