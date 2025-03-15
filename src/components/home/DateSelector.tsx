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
        <div className='flex flex-row justify-between items-center  w-full shadow-none  md:shadow  md:shadow-slate-900 bg-[--tw-color-800] text-xs text-center font-bold md:rounded-lg'>
            <Link href={`/${previousDate.string}`} className='active:text-white w-full  py-3 text-gray-400 cursor-pointer md:hover:text-white'>
                {previousDate.formated}
            </Link>

            <div className='w-full  py-3  border-b-[2px] border-[--tw-primary] text-white'>
                {selectedDate.formated}
            </div>

            <Link href={`/${nextDate.string}`} className='active:text-white w-full py-3 text-gray-400 md:hover:text-white hover:text--[--tw-primary]'>
                {nextDate.formated}
            </Link>
        </div>
    )
}

export default DateSelector