"use client"
import React, { useEffect, useState } from 'react'
import TeamFixture from './TeamFixture'
import TeamRoster from './TeamRoster'
import TeamArticles from './TeamArticles'
import { fetchTeamInformation, fetchRoster, fetchTeamEvents, fetchTeamArticles } from '@/utils/fetch'
import TeamHeader from './TeamHeader'
import TabBar from './TabBar'
import Spinner from '@/components/Spinner'

type Props = {
    id: any
}
interface ApiResponse {
    res1: any;
    res2: any;
    res3: any;
}

const Main = ({ id }: Props) => {

    const [season, setSeason] = useState<string | boolean>(false)
    const [selectedTab, setSelectedTab] = useState(0);
    const [currentSeason, setCurrentSeason] = useState(null);
    const [headerInfo, setHeaderInfo] = useState<any>(false)
    const [events, setEvents] = useState<any>(false)
    const [roster, setRoster] = useState<any>(false)
    const [articles, setArticles] = useState<any>(false)


    useEffect(() => {

        const fetchData = async () => {

            setHeaderInfo(false)

            try {
                const data = await fetchTeamInformation(id)
                setHeaderInfo(data)

            } catch (error) {
                setHeaderInfo(false)
            }
        }

        fetchData()

    }, [])


    useEffect(() => {

        const fetchData = async () => {

            setEvents(false)

            try {
                const data = await fetchTeamEvents(id, season)
                console.log(data);
                
                setEvents(data.events)
                setCurrentSeason(data.currentSeason)

            } catch (error) {
                setEvents(false)
            }
        }

        fetchData()

    }, [season])


    useEffect(() => {

        const fetchData = async () => {

            setRoster(false)

            try {
                const data = await fetchRoster(id, season)
                setRoster(data)


            } catch (error) {
                setRoster(false)
            }
        }

        fetchData()

    }, [season])


    useEffect(() => {

        const fetchData = async () => {

            setArticles(false)

            try {
                const data = await fetchTeamArticles(id)
                setArticles(data)


            } catch (error) {
                setArticles(false)
            }
        }

        fetchData()

    }, [])


    return (

        <div className='flex flex-col md:m-6'>

            <div className='bg-[--tw-color-800] md:rounded-lg p-2 pb-4 md:border-[1px] border-[--tw-color-700]'>
                {
                    headerInfo ?
                        <TeamHeader team={headerInfo} />
                        :
                        <Spinner />

                }
            </div>

            <TabBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

            <div className='grid md:grid-cols-3 grid-cols-1 gap-10 mt-3 mx-1'>

                <div className={`${selectedTab === 0 ? "max-md:" : "max-md:hidden"} `}>
                    {
                        events ?
                            <TeamFixture data={events} selectedTab={selectedTab} teamId={id} season={season} setSeason={setSeason} currentSeason={currentSeason} />
                            : <Spinner />
                    }
                </div>

                <div className={`${selectedTab === 1 ? "max-md:" : "max-md:hidden"}`}>
                    {
                        roster ?
                            <TeamRoster data={roster} selectedTab={selectedTab} />
                            : <Spinner />
                    }
                </div>

                <div className={`${selectedTab === 2 ? "max-md:" : "max-md:hidden"}`}>
                    {
                        articles ?
                            <TeamArticles data={articles} selectedTab={selectedTab} />
                            : <Spinner />
                    }
                </div>

            </div>
        </div>
    )
}

export default Main