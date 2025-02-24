import React from 'react'
import Table from './positions/Table'

type Props = {
  game: any
}

const Positions = ({ game }: Props) => {

  const groups = game.standings.groups



  return (
    <div className='flex flex-col gap-4 mt-4 md:w-[80%] mx-auto md:px-0 px-1 '>
      {
        groups.map((group: any, i: number) => (
          <div key={i} className='mb-2'>
            <h2 className='text-center text-md mb-1 font-semibold'>{group.header}</h2>
            <div>
              {
                <Table entries={group.standings.entries} />
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Positions