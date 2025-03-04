"use client"
import React, { useEffect, useState } from 'react'
import FixtureGame from './FixtureGame'


type Props = {
  data: any,
  selectedTab: number,
  teamId: string,
}

const TeamFixture = ({ data, selectedTab, teamId }: Props) => {

  const [filterId, setFilterId] = useState("all")
  const leaguesRepeated = data.events.map((x: any) => ({ name: x.league.name, id: x.league.id }))
  const leagues = Array.from(new Map(leaguesRepeated.map((obj: any) => [obj.id, obj])).values())
  


  return (
    <div className={`max-md:${selectedTab === 0 ? "flex " : "hidden "} rounded-lg text-sm `}>

      <select
        className='w-full rounded p-2 mb-4 bg-[--tw-color-800]'
        onChange={(e) => setFilterId(e.target.value)}
      >
        <option className='p-2' value="all" >Todos los partidos</option>
        {
          leagues.map((league: any, i: number) => (

            <option key={i} className='p-2' value={league.id}>{league.name}</option>
          ))
        }

      </select>


      <div className='flex flex-col gap-2 w-full'>
        {
          data.events.length > 0 ?
            data.events.filter((elem: any) => filterId != "all" ? filterId === elem.league.id : true).map((event: any, i: number) => (

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