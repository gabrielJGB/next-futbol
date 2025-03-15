import { getLogo } from '@/utils/game'
import React from 'react'

type Props = {
  league: any,
}

const IMG = 80

const LeagueHeader = ({ league }: Props) => {

  const logo = getLogo(league, IMG + 50)


  return (
    <div className='flex flex-row gap-2 items-center'>


      {
        logo != "-" &&
        <img src={logo} alt="Logo" width={IMG} height={IMG} />
      }

      <div className=''>
        <h1 className='font-semibold md:text-2xl text-lg'>{league.name}</h1>
        <div className='text-gray-400 font-semibold md:text-lg text-sm'>{league.seasonDisplay}</div>
      </div>

    </div>
  )
}

export default LeagueHeader