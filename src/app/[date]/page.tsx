import DateSelector from '@/components/home/DateSelector'
import LeaguesContainer from '@/components/home/LeaguesContainer'

import { fetchLaegues } from '@/utils/fetch'
import Link from 'next/link'
import React, { Suspense } from 'react'

type Params = {
    params: Promise<{ date: string }>
}

const HomePage = async ({ params }: Params) => {

    const { date } = await params
    const leagues = await fetchLaegues(date)
    

    return (
        <div className='flex flex-col gap-0'>

            <DateSelector date={date} />
            <LeaguesContainer leagues={leagues} />

        </div>
    )
}

export default HomePage