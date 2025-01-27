"use client"
import React from 'react'

type Props = {
    status: any,
    statusColor: string,
    homeScore: string,
    awayScore: string
}

const Status = ({ status, statusColor, homeScore, awayScore }: Props) => {
    return (
        <div className='flex flex-col justify-center items-center gap-1'>
            <div className='flex flex-row justify-center items-center gap-[2px] text-3xl'>
                <div className=''>{homeScore}</div>
                <div >-</div>
                <div className=''>{awayScore}</div>
            </div>

            <div
                style={{ backgroundColor: (`${statusColor}`) }}
                className={`font-semibold text-xs py-[1px] px-1 rounded-sm `}
            >{status}</div>
        </div>
    )
}

export default Status