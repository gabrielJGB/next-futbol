"use client"
import React from 'react'
import Player from './Player'

type Props = {
  data: any,
  selectedTab: number,
}

const getPosHeader = (pos: string) => {
  switch (pos) {
    case "G":
      return "ARQUEROS"
    case "D":
      return "DEFENSORES"
    case "M":
      return "MEDIOCAMPISTAS"
    case "A":
      return "DELANTEROS"
  }
}

const TeamRoster = ({ data, selectedTab }: Props) => {

  const players = data.team.athletes

  
  


  return (
    <div className={`max-md:${selectedTab === 1 ? "flex " : "hidden "} rounded-lg text-sm w-full`}>

      <div className='flex flex-col gap-4 w-full'>
        {
          players.length > 0 ?
            ["G", "D", "M", "A"].map(position => {
              return (
                <div key={position} className='bg-[--tw-color-800] rounded-lg p-2'>
                  <div className='font-bold text-sm pb-1 text-center'>{getPosHeader(position)}</div>

                  <div className='flex flex-col divide-y-[1px] divide-[--tw-color-700]'>
                    {
                      players
                        .filter((p: any) => "position" in p && p.position.abbreviation === position)
                        .map((player: any) => (
                          <Player key={player.id} player={player} />
                        ))

                    }
                  </div>

                </div>
              )
            })
            :
            <div className='text-center text-gray-300'>Sin datos</div>
        }

      </div>

    </div>
  )
}

export default TeamRoster