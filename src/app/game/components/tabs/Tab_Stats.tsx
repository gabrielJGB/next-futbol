import { getLogo } from '@/utils/game'
import React from 'react'
import Stat from './stats/Stat'

type Props = {
  game: any
}
const IMG_SIZE = 25

const Stats = ({ game }: Props) => {

  const home = game.boxscore.teams[0]
  const away = game.boxscore.teams[1]
  const homeLogo = getLogo(home.team, IMG_SIZE)
  const awayLogo = getLogo(away.team, IMG_SIZE)
  const statsLength = game.boxscore.teams[0].statistics.length

  return (
    <div>

      <div className='flex flex-row items-center justify-between pt-1 pb-4 px-2'>
        <img src={homeLogo} alt="Logo" width={IMG_SIZE} />
        <div className='text-sm font-bold'></div>
        <img src={awayLogo} alt="Logo" width={IMG_SIZE} />
      </div>

      <div className='flex flex-col gap-0 px-1'>
        {
          new Array(statsLength).fill(0).map((e, i) => (
            <Stat
              key={i}
              homeStat={home.statistics[i]}
              awayStat={away.statistics[i]} />
          ))
        }
      </div>

    </div>
  )
}

export default Stats