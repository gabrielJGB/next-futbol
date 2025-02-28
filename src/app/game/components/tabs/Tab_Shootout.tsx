import React from 'react'
import score from '@/assets/score.png'
import noScore from '@/assets/no-score.png'
import Image from 'next/image'
import { getLogo } from '@/utils/game'

type Props = {
  game: any
}

const IMG_SIZE = 18

const getTeamLogo = (teamName: string, game: any) => {

  const team = game.header.competitions[0].competitors.find((elem: any) => elem.team.displayName === teamName)
  const logo = getLogo(team, 30)

  return logo

}

const interleaveShots = (shoots: any) => {
  if ("shots" in shoots[0]) {

    const maxShots = Math.max(shoots[0].shots.length, shoots[1].shots.length);
    let interleaved: any = [];
    for (let i = 0; i < maxShots; i++) {
      shoots.forEach((team: any) => {
        if (team.shots[i]) {
          interleaved.push({ ...team.shots[i], team: team.team });
        }
      });
    }
    return interleaved;
  }
  return false
};


const Shootout = ({ game }: Props) => {

  const shootout = interleaveShots(game.shootout)




  return (
    <div className='md:mx-14'>

      <h2 className=' text-center font-semibold mb-2 '>Definición por penales</h2>

      <div className='flex flex-row px-1 justify-between items-center'>

        {
          [0, 1].map(i => {
            const logo = getTeamLogo(shootout[i].team, game)
            return logo != "-" ? <img key={i} className='mb-2' src={getTeamLogo(shootout[i].team, game)} alt="Logo" /> : <div></div>
          })
        }

      </div>

      <div className='flex flex-col gap-2 px-1'>
        {
          shootout.map((shot: any, i: number) => (
            <div key={i} className={`flex ${i % 2 === 0 ? "flex-row bg-gradient-to-r" : "flex-row-reverse bg-gradient-to-l"} rounded p-2 gap-1 items-center  bg-[--tw-color-800]  from-[--tw-color-800] to-[--tw-color-950]  `}>
              <div className='text-sm text-gray-300'>{shot.shotNumber}</div>
              <Image src={shot.didScore ? score : noScore} alt={"icon"} style={{ width: IMG_SIZE, height: IMG_SIZE }} />
              <div className='text-sm'>{shot.player}</div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Shootout