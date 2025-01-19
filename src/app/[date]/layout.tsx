import React from 'react'

import '../calendar.css';
import CalendarContainer from '@/components/home/Calendar';


const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className='flex flex-1 w-full justify-evenly mt-0 md:mt-10'>

      <div className='hidden md:block w-[250px] h-[1200px] text-center bg-green-900 rounded shadow shadow-slate-900'>Menu</div>

      <div className='w-full sm:w-[500px]'>{children}</div>

      <div className='hidden md:block w-[330px] h-[350px] px-[2px] text-center bg-green-900 rounded shadow shadow-slate-900'>
        <CalendarContainer />
      </div>

    </div>
  )
}

export default HomeLayout