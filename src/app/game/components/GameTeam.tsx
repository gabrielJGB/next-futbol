"use client"
import { getLogo } from '@/utils/game'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import teamLogo404 from '@/assets/team.png'
import Link from 'next/link'

type Props = {
    team: any

}

const IMG_SIZE = 40

const Team = ({ team }: Props) => {

    const logo = getLogo(team, 40)

    return (
        <Link href={`/team/${team.id}`} className='flex flex-col gap-1 items-center justify-between hover:underline transition-all cursor-pointer'>

            {
                logo != "-" ?
                <img src={logo} width={IMG_SIZE} height={IMG_SIZE} alt="Logo" />
                :
                <Image src={teamLogo404} width={IMG_SIZE} height={IMG_SIZE} alt="Logo"/>
            }
            <div className='text-sm md:text-xs font-bold text-center'>{team.shortDisplayName}</div>

        </Link>
    )
}

export default Team