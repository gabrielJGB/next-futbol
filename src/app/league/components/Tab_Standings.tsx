import Table from '@/app/game/components/tabs/positions/Table';
import React from 'react'

type Props = {
    league: any
}

const Standings = ({ league }: Props) => {

    const standings = league.standings


    return (
        <div className='flex flex-col gap-4'>
            {
                standings.map((table: any, i: number) => (
                    <div key={i} className='flex flex-col gap-2 '>
                        <div className='text-center py-0  rounded-md font-bold'>{table.name}</div>
                        <Table entries={table.standings.entries} homeId={null} awayId={null} />
                    </div>
                ))
            }
        </div>
    )
}

export default Standings