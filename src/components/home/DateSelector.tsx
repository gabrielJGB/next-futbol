"use client"

import { useDateStore } from '@/stores/dateStore'
import { getDates } from '@/utils/dates'
import Link from 'next/link'
import React, { useEffect } from 'react'

type Props = {
    date: string
}

const DateSelector =  ({ date }: Props) => {

    const { selectedDate, previousDate, nextDate } =  getDates(date);
    const { setStoredDate } = useDateStore()

    useEffect(() => {
        setStoredDate(selectedDate.string)
    }, [])
    

    return (
        <div className='flex flex-row justify-between items-center  w-full shadow-none  md:shadow  md:shadow-slate-900 bg-green-900 text-xs text-center font-bold '>
            <Link href={`/${previousDate.string}`} className='w-full  py-3 text-gray-400 cursor-pointer hover:text-white'>
                {previousDate.formated}
            </Link>

            <div className='w-full  py-3  border-b-[2px] border-white'>
                {selectedDate.formated}
            </div>

            <Link href={`/${nextDate.string}`} className='w-full  py-3 text-gray-400 hover:text-white'>
                {nextDate.formated}
            </Link>
        </div>
    )
}

export default DateSelector