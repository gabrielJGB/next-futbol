import { formatDate, formatDate2, formatDateObject } from '@/utils/dates'
import { getLogo } from '@/utils/game'
import logo404 from '@/assets/team.png'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

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
    headToHeadGame: boolean,
}

const LOGO = 22
const getResultColor = (gameResult: any, headToHeadGame: boolean) => {

    if (headToHeadGame)
        return "border-[--tw-color-600]"

    if (gameResult === "P")
        return "border-[#ff0e0e] text-[#ff0e0e]"
    else if (gameResult === "G")
        return "border-[#00ff00] text-[#00ff00]"
    else if (gameResult === "E")
        return "border-[#ffff00] text-[#ffff00]"


}

const getLogoTag = (team: any) => {

    const logo = getLogo(team, 23)

    if (logo === "-")
        return <Image src={logo404} width={23} height={23} alt="Logo" />

    return <img src={logo} alt="logo" width={23} height={23} />
}

const Game = ({ id, team, opponent, teamHome, homeScore, awayScore, leagueName, homeShootoutScore, awayShootoutScore, gameResult, gameDate, headToHeadGame }: Props) => {

    const home = teamHome ? team : opponent
    const away = teamHome ? opponent : team

    
    

    return (
        <Link
            // style={{ borderColor: !headToHeadGame ? getResultColor(gameResult) : "gray" }}
            href={`/game/${id}`}
            className='flex flex-col bg-[--tw-color-800] border-[--tw-color-700] border-[1px] divide-y-[1px] divide-[--tw-color-700] rounded-lg md:hover:border-[--tw-primary] active:border-[--tw-primary]'
        >

            <div className='flex flex-row items-center justify-between  px-2 py-1 font-bold'>
                <div className='text-[11px]  text-gray-400'>{leagueName}</div>
                <div className='text-[11px]  text-gray-400'>{formatDateObject(new Date(gameDate))}</div>
            </div>
            {
                [home, away].map((team: any, i: number) => (

                    <div key={i} className='flex flex-row justify-between items-center'>
                        <div className='flex flex-row gap-2 items-center pl-2 py-1'>

                            {getLogoTag(team)}

                            <div className='text-xs'>{team.displayName}</div>
                        </div>
                        <div className={`border-l-[2px] ${getResultColor(gameResult, headToHeadGame)} text-center bg-[--tw-color-900] text-[22px]  py-0 ${i === 1 ? "rounded-br-lg" : ""} w-[50px] font-semibold`}>{i === 0 ? homeScore : awayScore}</div>
                    </div>

                ))
            }
        </Link>
    )
}

export default Game