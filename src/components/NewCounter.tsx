"use client"
import { useDateStore } from '@/stores/dateStore'
import React, { useEffect } from 'react'


type Props = {}

const NewCounter = (props: Props) => {

    const {date, setDate } = useDateStore()

    useEffect(() => {
      setTimeout(() => {
          setDate("444444")
        
      }, 2000);
    }, [])
    

    return (
        <div className='flex flex-col gap-1'>

            <div className='text-orange-400'>{date}</div>
            
    
        </div>
    )
}

export default NewCounter