"use client"
// import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Calendar } from "react-calendar"
import '../../app/calendar.css'
import { usePathname, useRouter } from 'next/navigation'



const CalendarContainer = () => {

    const { push } = useRouter()
    
    const [pathname] = useState<string | null>(usePathname())
    const [date, setDate] = useState<any>()

    // const [locationPath, setLocationPath] = useState<any>(new Date(parseInt(pathname.slice(1, 5)), parseInt(pathname.slice(5, 7)) - 1, parseInt(pathname.slice(7, 9))))

    useEffect(() => {



        if (pathname)
            setDate(new Date(parseInt(pathname.slice(1, 5)), parseInt(pathname.slice(5, 7)) - 1, parseInt(pathname.slice(7, 9))))


    }, [pathname])


    if (pathname === null)
        return <div></div>


    return (

        

            <Calendar

                className="calendar"
                locale='es-AR'
                tileClassName="text-white"
                value={date}
                next2Label={null}
                prev2Label={null}
                onClickDay={(e) => {
                    const date = `${e.getFullYear()}${String(e.getMonth() + 1).padStart(2, "0")}${String(e.getDate()).padStart(2, "0")}`
                    push(`/${date}`)
                    
                }}

            />

        
    )
}

export default CalendarContainer