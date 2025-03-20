"use client"
import React from 'react'

type Props = {
  selectedTab: any,
  setSelectedTab: any,

}

const TabBar = ({ selectedTab, setSelectedTab }: Props) => {

  const buttons = ["FIXTURE", "PLANTEL", "NOTICIAS"]

  return (
    <div className='md:hidden  grid  grid-cols-3 gap-1 bg-[--tw-color-800] md:bg-[--tw-color-950] text-xs font-bold '>
      {
        buttons.map((button: any, i: number) => (

          <button
            key={i}
            onClick={() => setSelectedTab(i)}
            className={`${selectedTab === i ? "border-[--tw-primary]" : "border-transparent"} md:border-transparent max-md:active:bg-[--tw-color-900] border-b-2 py-3 md:cursor-default md:text-lg transition-all duration-200`} >{button}</button>
        ))
      }

    </div>
  )
}

export default TabBar