"use client"
import React, { useEffect, useState } from 'react'
import FixtureGame from './FixtureGame'
import LeagueStats from './LeagueStats'
import Selector from './Selector'


type Props = {
  data: any,
  selectedTab: number,
  teamId: string,
  season: any,
  setSeason: any,
  currentSeason: any
}

const TeamFixture = ({ data, selectedTab, teamId, season, setSeason, currentSeason }: Props) => {

  const [filterId, setFilterId] = useState("all")
  const [leaguesRepeated] = useState(data.map((x: any) => ({ name: x.league.name, id: x.league.id, fullName: x.season.displayName })))
  const [leagues] = useState(Array.from(new Map(leaguesRepeated.map((obj: any) => [obj.id, obj])).values()))
  const [showOnly, setShowOnly] = useState("ALL")




  return (
    <>
      {
        data.length > 0 ?

          <div className={`flex flex-col max-md:${selectedTab === 0 ? "flex " : "hidden "} rounded-lg text-sm `}>

            <select
              className='w-full rounded p-2 mb-4 bg-[--tw-color-900] border-[--tw-color-700] border-[1px] md:hover:border-[--tw-primary] active:border-[--tw-primary] transition-all text-center font-semibold cursor-pointer'
              onChange={(e) => setSeason(e.target.value)}
              value={season}
            >
              {
                Array.from({ length: (parseInt(currentSeason)) - 2000 }, (_, index) => (parseInt(currentSeason)) - index).map((year, i) => (
                  <option key={i} className='p-2' value={year}>Temporada {`${year}/${year + 1}`}</option>
                ))
              }

            </select>

            <select
              className='w-full rounded p-2 mb-4 bg-[--tw-color-900] border-[--tw-color-700] border-[1px] md:hover:border-[--tw-primary] active:border-[--tw-primary] transition-all  text-center font-semibold cursor-pointer'
              onChange={(e) => setFilterId(e.target.value)}
            >
              <option className='p-2' value="all" >Todas las competiciones</option>
              {
                leagues.map((league: any, i: number) => (

                  <option key={i} className='p-2' value={league.id}>{league.fullName}</option>
                ))
              }

            </select>

            <Selector
              showOnly={showOnly}
              setShowOnly={setShowOnly}
            />

            <LeagueStats
              events={data.filter((elem: any) => filterId != "all" ? filterId === elem.league.id : true)}
              teamId={teamId}
              filterId={filterId}
              showOnly={showOnly}
            />

            <div className='flex flex-col gap-2 w-full'>
              {
                data.filter((elem: any) => filterId != "all" ? filterId === elem.league.id : true).map((event: any, i: number) => (

                  <FixtureGame
                    key={i}
                    num={i}
                    event={event}
                    teamId={teamId}
                    showOnly={showOnly}
                    showLeagueName={filterId === "all"}
                  />
                ))


              }
            </div>

          </div>
          :
          <div className='text-sm text-center text-gray-300'>Sin datos</div>
      }
    </>
  )
}

export default TeamFixture