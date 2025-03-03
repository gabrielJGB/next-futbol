"use client"
import React, { useEffect, useState } from 'react'
import TeamFixture from './TeamFixture'
import TeamRoster from './TeamRoster'
import TeamArticles from './TeamArticles'
import { fetchRoster, fetchTeam, fetchTeamArticles } from '@/utils/fetch'
import TeamHeader from './TeamHeader'
import TabBar from './TabBar'

type Props = {
    id: any
}
interface ApiResponse {
    res1: any;
    res2: any;
    res3: any;
}

const Main = ({ id }: Props) => {


    const [data, setData] = useState<ApiResponse | null>(null);

    const [loading, setLoading] = useState(true);
    const [selectedTab, setSelectedTab] = useState(0);


    useEffect(() => {
        const fetchData = async () => {
            console.log("fetching team")
            try {
                const [res1, res2, res3] = await Promise.all([
                    fetchTeam(id, false).then(res => res),
                    fetchRoster(id).then(res => res),
                    fetchTeamArticles(id).then(res => res)
                ]);

                setData({ res1, res2, res3 });
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);

            }
        };

        fetchData();

    }, []);


    const getSelected = (selectedTab: any, data: any) => {

        if (window.innerWidth < 768) {
            if (selectedTab === 0)
                return <TeamFixture data={data?.res1 || null} selectedTab={selectedTab} teamId={id} />

            else if (selectedTab === 1)
                return <TeamRoster data={data?.res2 || null} selectedTab={selectedTab} />
            else if (selectedTab === 2)
                return <TeamArticles data={data?.res3 || null} selectedTab={selectedTab} />
        }else{
            return (
                <>
                    <TeamFixture data={data?.res1 || null} selectedTab={selectedTab} teamId={id} />
                    <TeamRoster data={data?.res2 || null} selectedTab={selectedTab} />
                    <TeamArticles data={data?.res3 || null} selectedTab={selectedTab} />
                </>
            )

        }
    }



    if (loading) return <div className='text-sm mx-auto my-4 text-center'>Cargando...</div>;

    return (

        <div className='flex flex-col md:m-6'>

            <TeamHeader team={data?.res2 != null ? data.res2.team : null} />
            <TabBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

            <div className='grid md:grid-cols-3 gap-10 mt-3 px-2'>

                {
                    getSelected(selectedTab, data)
                }

                {/* {data?.res1 != null &&

                    <TeamFixture data={data?.res1 || null} selectedTab={selectedTab} teamId={id} />

                }
                {data?.res2 != null &&

                    <TeamRoster data={data?.res2 || null} selectedTab={selectedTab} />

                }
                {data?.res3 != null &&

                    <TeamArticles data={data?.res3 || null} selectedTab={selectedTab} />

                } */}



            </div>
        </div>
    )
}

export default Main