import DateSelector from '@/components/home/DateSelector'
import Main from '@/components/home/Main'
import { fetchLaegues, fetchLeaguesExtra, fetchSofaData } from '@/utils/fetch'
import { getHeadline } from '@/utils/game'
import { Metadata } from 'next'



type Params = {
    params: Promise<{ date: string }>
}

export const metadata: Metadata = {}

const HomePage = async ({ params }: Params) => {

    const { date } = await params
    const leagues: any = await fetchLaegues(date)


    const res = await fetchLeaguesExtra(date)

    const leaguesData = res?.map((league:any) => ({
        id:league.id,
        events: league.events.map((event:any) => ({
            id:event.id,
            headline:"video" in event ? event.video.title:undefined,
            stage:league.isTournament? event.group.name:undefined,
            leg:league.isTournament && event.leg?event.leg.text:undefined,
        }))
    }))



    return (
        <div className='flex flex-col gap-0 pb-10'>

            <DateSelector date={date} />
            <Main leagues={leagues} leaguesData={leaguesData} />

        </div>
    )
}

export default HomePage