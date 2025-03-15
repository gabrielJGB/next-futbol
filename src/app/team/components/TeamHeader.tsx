import React from 'react'
import { getLogo } from '@/utils/game';
import { MdLocationPin, MdStadium} from 'react-icons/md';

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
        <div className='mb-0 md:text-[26px] text-[22px] font-bold '>{team.name}</div>
        {
          "venue" in team &&
          <div className='flex flex-col gap-1 md:gap-0'>

            <div className='flex flex-row items-center gap-2'>
              <MdLocationPin size={15} color='white' />
              <div className='mb-0 md:text-sm text-xs text-gray-400'>
                {team.venue?.address?.city}, {team.venue?.address.country}
              </div>
            </div>

            <div className='flex flex-row items-center gap-2'>
              <MdStadium size={15} color='white' />
              <div className='mb-0 md:text-sm text-xs text-gray-400'>
                {team.venue?.fullName}
              </div>
            </div>

          </div>
        }
      </div>
    </div >
  )
}

export default TeamHeader