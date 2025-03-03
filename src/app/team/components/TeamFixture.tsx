"use client"
import React from 'react'
import FixtureGame from './FixtureGame'

type Props = {
  data: any,
  selectedTab: number,
  teamId: string,
}

const TeamFixture = ({ data, selectedTab, teamId }: Props) => {



  const leaguesRepeated = data.events.map((x: any) => ({ name: x.league.name, id: x.league.id }))
  const leagues = Array.from(new Map(leaguesRepeated.map((obj: any) => [obj.id, obj])).values());

  return (
    <div className={`max-md:${selectedTab === 0 ? "flex " : "hidden "} rounded-lg text-sm `}>

      <div className='flex flex-col gap-2 w-full'>
        {
          data.events.length > 0 ?
            data.events.map((event: any, i: number) => (

              <FixtureGame key={i} num={i} event={event} teamId={teamId} />
            ))
            :
            <div className='text-xs text-center mt-2'>Sin datos</div>

        }
      </div>

    </div>
  )
}

export default TeamFixture