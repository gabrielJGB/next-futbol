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
    metadata.title = "Futbol 1"


    // const leaguesExtra = await fetchLeaguesExtra(date)
    // const leagues = leaguesArray.map((league: any) => ({
    //     ...league,
    //     events: league.events.map((event: any, j: any) => ({
    //         ...event,
    //         headline: getHeadline(event.id, leaguesExtra)
    //     }))
    // }))


    return (
        <div className='flex flex-col gap-0 pb-10'>

            <DateSelector date={date} />
            <Main leagues={leagues} sofaEvents={""} />

        </div>
    )
}

export default HomePage