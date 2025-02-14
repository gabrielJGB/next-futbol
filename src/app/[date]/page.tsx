import DateSelector from '@/components/home/DateSelector'
import Main from '@/components/home/LeaguesContainer'
import { fetchLaegues, fetchSofaData } from '@/utils/fetch'



type Params = {
    params: Promise<{ date: string }>
}

const HomePage = async ({ params }: Params) => {

    const { date } = await params
    const leagues = await fetchLaegues(date)
    // const sofaEvents = await fetchSofaData(date)
    console.log("home")
     

    return (
        <div className='flex flex-col gap-0 pb-10'>

            <DateSelector date={date} />
            <Main leagues={leagues} sofaEvents={""}/>
            
        </div>
    )
}

export default HomePage