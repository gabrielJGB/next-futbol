import React from 'react'
import Game from './prev/Game';
import { getLogo } from '@/utils/game';
import logo404 from '@/assets/team.png'
import Image from 'next/image';

type Props = {
  game: any
}

const Prev = ({ game }: Props) => {

  const home = game.boxscore.form[0]
  const away = game.boxscore.form[1]
  const headToHeadGames = game.headToHeadGames[0]

  const getLogoTag = (team: any) => {

    const logo = getLogo(team, 23)

    if (logo === "-")
      return <Image src={logo404} width={23} height={23} alt="Logo" />
    else
      return <img src={logo} alt="logo" width={23} height={23} />
  }

  return (
    <div className='flex flex-col gap-4'>

      <div className='flex flex-col'>
        <h2 className='p-2 text-center text-xl font-bold'>Partidos previos</h2>
        <div className='grid grid-cols-2 gap-x-6 md:gap-y-2 gap-y-6 md:px-0 px-1 pt-1'>

          {
            [home, away].map((team: any, i: number) => (

              <div key={i} className='flex flex-col gap-2 md:col-span-1 col-span-2  rounded-lg p-0'>

                <div className='flex flex-row items-center gap-2 justify-center '>

                  {getLogoTag(team.team)}

                  <h2 className='text-center font-bold pt-1'>
                    {team.team.displayName}
                  </h2>
                </div>

                <div key={i} className='flex flex-col gap-2 md:col-span-1 col-span-2 p-2 rounded-lg pb-2'>

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
                        headToHeadGame={false}

                      />
                    ))
                  }
                </div>

              </div>
            ))
          }


        </div>
      </div>
      {
        headToHeadGames.events.length > 0 ?

          <div className='md:w-[420px] md:mx-auto flex flex-col gap-2 md:col-span-1 col-span-2 '>

            <h2 className='p-2 text-center text-xl font-bold'>Últimos enfrentamientos</h2>

            <div className='flex flex-col gap-2  mx-1 p-2  rounded-lg'>
              {

                headToHeadGames.events.map((event: any, j: number) => (
                  <Game
                    key={j}
                    id={event.id}
                    team={headToHeadGames.team}
                    opponent={event.opponent}
                    teamHome={event.atVs === "vs"}
                    homeScore={event.homeTeamScore}
                    awayScore={event.awayTeamScore}
                    homeShootoutScore={event.homeShootoutScore}
                    awayShootoutScore={event.awayShootoutScore}
                    leagueName={event.leagueName}
                    gameResult={event.gameResult}
                    gameDate={event.gameDate}
                    headToHeadGame={true}
                  />
                ))

              }


            </div>
          </div>
          :
          <></>
      }


    </div>
  )
}

export default Prev