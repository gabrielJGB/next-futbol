import React from 'react'
import { formatDate4 } from '@/utils/dates'
import { formatTitle, getLogo } from '@/utils/game'
import Link from 'next/link'
import { BsTrophyFill } from 'react-icons/bs'


type Props = {
    event: any,
    teamId: string,
    num: number,
}
const LOGO = 24

const FixtureGame = ({ event, teamId, num }: Props) => {



    const team = event.competitions[0].competitors.find((team: any) => team.id === teamId)
    const rival = event.competitions[0].competitors.find((team: any) => team.id != teamId)
    const rivalLogo = getLogo(rival, LOGO+8)
    const teamScore = event.played ? team.score.value : ""
    const rivalScore = event.played ? rival.score.value : ""
    const homeAway = team.homeAway === "home" ? "L" : "V"
    const leagueName = event.league.shortName
    const isTournament = event.league.isTournament && leagueName.trim() != "Copa de la Liga Profesional"
    const gameStage = formatTitle(event.seasonType.name).trim()
    const title = `${leagueName} ${isTournament ? `| ${gameStage}` : ""}`

    

    const getScoreColor = () => {

        if (event.played)
            if (team.winner)
                return "bg-[#008d35]"
            else if (rival.winner)
                return "bg-[#e50000]"
            else
                return "bg-[#dded00] text-black"

        return ""

    }


    return (
        <Link
            href={`/game/${event.id}`}
            className='flex flex-col divide-y-[1px] divide-[--tw-color-700] px-1 bg-[--tw-color-800] border-[1px] border-transparent md:hover:border-[--tw-primary] active:border-[--tw-primary] transition-all rounded-lg'
        >

            <div className='flex flex-row item-center justify-between md:py-1 py-[1px] font-semibold md:text-xs text-[10px] text-gray-400'>
                <div className='flex flex-row items-center gap-2'>
                    {isTournament && <BsTrophyFill color='white' size={12} />}
                    <div className='md:text-xs text-[11px]'>{title}</div>
                </div>
                <div>{formatDate4(event.date).replaceAll("-", "/")}</div>
            </div>

            <div className='flex flex-row items-center justify-between md:py-1 py-2'>
                <div className='flex flex-row gap-2 items-center'>
                    <div className='flex items-center justify-center  text-[9px] text-center w-[16px] h-[16px] rounded-[7px] text-white font-bold bg-[--tw-color-950]'>{num + 1}</div>
                    <div className='text-xs font-bold text-gray-400'>{homeAway}</div>
                    <div className='flex flex-row items-center gap-1'>
                        {
                            rivalLogo != "-" &&
                            <img src={rivalLogo} alt="Logo" width={LOGO} height={LOGO} />
                        }
                        <div className='text-xs'>{rival.team.displayName}</div>
                        
                    </div>
                </div>
                <div className={`${getScoreColor()} text-center min-w-[40px] rounded font-bold px-2 py-1`}>
                        
                    {
                        event.played &&
                        `${teamScore}-${rivalScore}`
                    }
                </div>
            </div>

        </Link>
    )
}

export default FixtureGame