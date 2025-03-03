import { getLogo } from '@/utils/game';
import React from 'react'

type Props = {
  team: any
}

const IMG_SIZE = 60

const TeamHeader = ({ team }: Props) => {
  

  const logo = getLogo(team, IMG_SIZE)

  return (
    <div className='flex flex-row items-center gap-3 md:bg-[--tw-color-950] bg-[--tw-color-800] p-3  '>

      {
        logo != "-" &&
        <img src={logo} alt="Logo" width={IMG_SIZE} height={IMG_SIZE} />
      }

      <div>
        <div className='mb-0 text-2xl font-bold '>{team.name}</div>
        <div className='mb-0 md:text-sm text-xs text-gray-400'>{team.standingSummary}</div>
      </div>
    </div>
  )
}

export default TeamHeader