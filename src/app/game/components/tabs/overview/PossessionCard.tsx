import { getLogo } from '@/utils/game'
import React from 'react'

type Props = {
    homeStats: any,
    awayStats: any,
    homeTeam: any,
    awayTeam: any
}

const PossessionCard = ({ homeStats, awayStats, homeTeam, awayTeam }: Props) => {

    const homePctValue = homeStats.find((stat: any) => stat.name === "possessionPct")
    const awayPctValue = awayStats.find((stat: any) => stat.name === "possessionPct")

    const homeLogo = getLogo(homeTeam, 32)
    const awayLogo = getLogo(awayTeam, 32)



    return (
        <div className='flex flex-col gap-1 p-2 rounded-lg bg-[--tw-color-800]'>
            <div className='w-full flex flex-row justify-between'>
                {
                    homeLogo != "-" ?
                        <img src={homeLogo} alt="Logo" width={24} height={14} />
                        :
                        <div></div>

                }
                <div className='text-lg font-bold text-center'>Posesión</div>
                {
                    awayLogo != "-" ?
                        <img src={awayLogo} alt="Logo" width={24} height={14} />
                        :
                        <div></div>

                }
            </div>

            <div className='w-full flex flex-row justify-between font-semibold'>
                <div>{homePctValue.displayValue}%</div>
                <div>{awayPctValue.displayValue}%</div>
            </div>

            <div className={`rounded h-[12px] bg-[#3787ff]`}>
                <div
                    style={{ width: `${Math.round(parseFloat(homePctValue.displayValue))}%` }}
                    className={`rounded-l h-[12px] border-r-[1px] border-[--tw-color-900] bg-[#43e143]`}></div>
            </div>

        </div>
    )
}

export default PossessionCard