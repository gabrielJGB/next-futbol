import { getLogo } from '@/utils/game';
import React from 'react'

type Props = {
  team: any
}

const IMG_SIZE = 70

const TeamHeader = ({ team }: Props) => {

  const logo = getLogo(team, IMG_SIZE + 10)


  if (team === null)
    return <div></div>

  return (
    <div className='flex flex-row items-center gap-3  px-3  '>


      {
        logo != "-" &&
        <img src={logo} alt="Logo" width={IMG_SIZE} height={IMG_SIZE} />
      }

      <div>
        <div className='mb-0 md:text-2xl text-lg font-bold '>{team.name}</div>
        {
          "venue" in team &&
          <>
            <div className='mb-0 md:text-sm text-xs text-gray-400'>
              {team.venue?.address?.city}, {team.venue?.address.country}
              </div>
            <div className='mb-0 md:text-sm text-xs text-gray-400'>{team.venue?.fullName}</div>
          </>
        }
      </div>
    </div>
  )
}

export default TeamHeader