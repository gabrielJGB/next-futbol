import GameAlt from '@/components/home/GameAlt';
import React from 'react'
import Game from './prev/Game';

type Props = {
  game: any
}

const Prev = ({ game }: Props) => {

  const home = game.boxscore.form[0]
  const away = game.boxscore.form[1]


  return (
    <div className='flex flex-col gap-4'>

      <div className='flex flex-col'>
        <h2 className='p-2 text-center text-xl font-bold'>Ultimos partidos </h2>
        <div className='grid grid-cols-2 gap-x-2 gap-y-2 pt-1'>

          {
            [home, away].map((team: any, i: number) => (

              <div key={i} className='flex flex-col gap-2 bg-[--tw-color-800] md:col-span-1 col-span-2 px-2 rounded-lg pb-2'>

                <h2 className='text-center font-bold pt-1'>
                  {team.team.displayName}
                </h2>
                {
                  team.events.map((event: any, j: number) => (
                    <Game
                      key={j}
                      id={event.id}
                      team={team.team}
                      opponent={event.opponent}
                      teamHome={event.atVs === "vs"}
                      homeScore={event.homeTeamScore}
                      awayScore={event.awayTeamScore}
                      homeShootoutScore={event.homeShootoutScore}
                      awayShootoutScore={event.awayShootoutScore}
                      leagueName={event.leagueName}
                      gameResult={event.gameResult}
                      gameDate={event.gameDate}


                    />
                  ))
                }


              </div>
            ))
          }


        </div>
      </div>

      <div className='flex flex-col'>
        <h2 className='p-2 text-center text-xl font-bold'>Ultimos enfrentamientos</h2>

      </div>



    </div>
  )
}

export default Prev