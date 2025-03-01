"use client"
import React, { useEffect, useState } from 'react'
import RosterPlayer from './RosterPlayer'
import Image from 'next/image'

type Props = {
    roster: any,
    logo: any,
    
}

const Roster = ({ roster, logo }: Props) => {

    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {

        if (window != undefined)
            setWindowWidth(window.innerWidth)

    }, [])


    return (

        <div
            style={{ minWidth: windowWidth < 800 ? (windowWidth - 10) : "auto" }}
            className={` flex flex-col gap-2 col-span-1 w-full`}
        >

            <div className='bg-[--tw-color-800] rounded-lg divide-y-[1px] p-2 divide-[--tw-color-700]'>
                <div className='flex flex-row items-center gap-3 justify-center'>
                    {
                        logo != "-" &&
                        <img src={logo} alt="logo" />
                    }
                    <div className='text-center font-bold py-2'>TITULARES</div>
                </div>

                {
                    roster.filter((elem: any, j: number) => elem.starter).map((player: any, i: number) => (
                        <RosterPlayer key={i} player={player} />
                    ))
                }
            </div>


            <div className='bg-[--tw-color-800]  rounded-lg divide-y-[1px] p-2 divide-[--tw-color-700]'>
                <div className='flex flex-row items-center gap-3 justify-center'>
                    {
                        logo != "-" &&
                        <img src={logo} alt="logo" />
                    }
                    <div className='text-center font-bold py-2'>SUPLENTES</div>
                </div>
                {
                    roster.filter((elem: any, i: number) => !elem.starter).map((player: any, i: number) => (
                        <RosterPlayer key={i} player={player} />
                    ))
                }

            </div>


        </div>

    )
}

export default Roster