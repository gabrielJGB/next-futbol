"use client"

import React from 'react'

type Props = {
  selectedTab: number,
  setSelectedTab: any,
  tabs: any
}

const Tabs = ({ tabs, selectedTab, setSelectedTab }: Props) => {
  return (

    <div className='z-20 top-0 sticky md:relative flex flex-row self-start mb-2 md:shadow shadow-[--tw-color-900] md:shadow-gray-900 md:overflow-hidden overflow-x-scroll w-full mx-auto rounded-none md:rounded bg-[--tw-color-800] md:bg-[--tw-color-800] text-xs font-bold '>

      {/* <div className='sticky top-0 z-20 mx-auto flex md:justify-center w-full bg-black shadow-sm shadow-black overflow-x-auto text-gray-400 '> */}
            <button

              className={`flex  md:hidden active:bg-[--tw-color-900] hover:text-white transition-all md:px-4 px-4 md:py-3 py-4 border-b-[3px] ${selectedTab === 0 ? "border-[--tw-primary]" : "border-transparent"}`}
              onClick={() => setSelectedTab(0)}
            >
             INFO
            </button>

      {
        tabs.map((tab: any, i: number) =>{
          return tab.show && (

            <button
              key={i}
              className={`flex transition-all active:bg-[--tw-color-900] hover:text-white md:px-3 px-4 md:py-3 py-4 border-b-[3px] ${selectedTab === i ? "border-[--tw-primary] " : "border-transparent text-gray-300"}`}
              onClick={() => setSelectedTab(i)}
            >
  
              {tab.name.toUpperCase()}
  
            </button>
          )
        })
      }

    </div>
  )
}

export default Tabs