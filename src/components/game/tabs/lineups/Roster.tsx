import React from 'react'
import RosterPlayer from './RosterPlayer'

type Props = {
    roster: any,
    logo: any
}

const Roster = ({ roster, logo }: Props) => {
    return (


        <div className='flex flex-col gap-2 '>

            <div className='bg-[--tw-color-800] p-1 rounded-lg divide-y-[1px] divide-[--tw-color-700]'>
                <div >
                    {logo}
                    <div className='text-center font-bold py-2'>TITULARES</div>
                </div>

                {
                    roster.filter((elem: any, i: number) => elem.starter).map((player: any, i: number) => (
                        <RosterPlayer key={i} player={player} />
                    ))
                }
            </div>


            <div className='bg-[--tw-color-800] p-1 rounded-lg divide-y-[1px] divide-[--tw-color-700]'>
                <div >
                    {logo}
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