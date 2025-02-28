"use client"
import React, { useEffect, useState } from 'react'
import '../calendar.css';
import CalendarContainer from '@/components/home/Calendar';
import { useStates } from '@/stores/states';
import Menu from '@/components/home/Menu';
import Image from 'next/image';
import calendar from '@/assets/calendar.png';
import Link from 'next/link';


const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {


  const { showCalendar, toggleShowCalendar, hideCalendar } = useStates()

  useEffect(() => {
    
    return ( ) => hideCalendar() 
  }, [])



  return (
    <div className='flex flex-1 w-full justify-evenly mt-0 md:mt-10'>

      <Menu/>

      <div className='w-full sm:w-[500px]'>{children}</div>


      <div className={`${showCalendar ? "flex" : "hidden"} flex-col fixed justify-center top-0  md:pt-0 h-full md:relative md:flex w-full  md:w-[330px] md:h-[350px] md:px-0 px-[7px] text-center bg-[rgb(0,0,0,0.7)] rounded-lg shadow-none md:shadow shadow-slate-900`}  >
        <CalendarContainer />
        {/* <Link className='rounded mt-1 p-1 text-xs bg-[--tw-color-800]' href={`/`}>Volver a hoy</Link> */}
      </div>

      <div className='cursor-pointer md:hidden flex fixed transition-all active:bg-[#13b313] bottom-4 right-4 w-[60px] h-[60px] rounded-[16px] shadow shadow-black text-white bg-[--tw-primary]  border-[--tw-color-700] border-[0px] text-center font-bold items-center justify-center' onClick={() => toggleShowCalendar()}>
        {
          showCalendar?
          <div className='text-2xl'>x</div>
          :
          <Image src={calendar} width={25} height={25} alt="icon" style={{filter:"invert(1)"}} />
        }
      </div>

    </div>
  )
}

export default HomeLayout