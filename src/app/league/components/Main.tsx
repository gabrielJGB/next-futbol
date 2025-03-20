"use client"

import { fetchLeague } from '@/utils/fetch'
import React, { useEffect, useState } from 'react'
import TabBar from './TabBar'
import LeagueHeader from './LeagueHeader'
import Standings from './Tab_Standings'
import Fixture from './Tab_Fixture'
import Spinner from '@/components/Spinner'
import Stats from './Tab_Stats'
import Tab_Articles from './Tab_Articles'

type Props = {
    id: string
}

const Main = ({ id }: Props) => {


    const [league, setLeague] = useState<any>(false)
    const [tabs, setTabs] = useState<any>(["FIXTURE", "ESTADISTICAS", "NOTICIAS"])
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    useEffect(() => {

        const fetchData = async () => {


            setLeague(false)

            try {
                const data = await fetchLeague(id)

                if (data.hasStandings)
                    setTabs((prev: any) => ["POSICIONES","FIXTURE", "ESTADISTICAS", "NOTICIAS"])

                setLeague({ ...data })



            } catch (error) {
                setLeague(false)
            }
        }


        fetchData()
        fetchData()

    }, [])






    if (!league)
        return <Spinner />


    return (
        <div className='flex flex-col md:m-6'>

            <div className='bg-[--tw-color-800] md:rounded-lg p-2 pb-4 md:border-[1px] border-[--tw-color-700]'>
                <LeagueHeader league={league} />
            </div>

            <TabBar tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

            <div className='grid md:grid-cols-3 grid-cols-1 gap-10 mt-3   mx-1 '>

   
                {
                    league.standings &&
                    <div className={`${selectedTab === "POSICIONES" ? "max-md:" : "max-md:hidden"} `}>
                        <Standings league={league} />
                    </div>
                }

                <div className={`${selectedTab === "FIXTURE" ? "max-md:" : "max-md:hidden"}`}>
                    <Fixture league={league} />
                </div>


                <div className={`${selectedTab === "NOTICIAS" ? "max-md:" : "max-md:hidden"}`}>
                    <Tab_Articles id={id} />
                </div>
                
            </div>
        </div>
    )
}

export default Main