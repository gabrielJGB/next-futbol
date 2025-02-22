import GameAlt from '@/components/home/GameAlt';
import React from 'react'

type Props = {
  game: any
}

const Prev = ({ game }: Props) => {

  const home = game.boxscore.form[0]
  const away = game.boxscore.form[1]


  // const form = {
  //   home: {
  //     team: game.boxscore.form[0].team,
  //     games: [],
  //   },
  //   away: {
  //     team: game.boxscore.form[1].team,
  //     games: [],
  //   }
  // }

  



  return (
    <div>

      {
        home.events.map((game: any, i: number) => (
          <div key={i} className='bg-[--tw-color-800] rounded-lg p-2 '>

          </div>
        ))
      }

    </div>
  )
}

export default Prev