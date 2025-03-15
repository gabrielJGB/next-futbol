import React from 'react'

type Props = {
  selectedTab: any,
  setSelectedTab: any,
  tabs:any

}

const TabBar = ({tabs,selectedTab, setSelectedTab }: Props) => {

  "z-20 top-0 sticky md:relative flex flex-row self-start mb-2 md:shadow shadow-[--tw-color-900] md:shadow-gray-900 md:overflow-hidden overflow-x-scroll w-full mx-auto rounded-none md:rounded bg-[--tw-color-800] md:bg-[--tw-color-800] text-xs font-bold border-b-[1px] border-[--tw-color-900] "

  return (
    <div className='md:hidden overflow-x-scroll w-full flex flex-row self-start gap-0 bg-[--tw-color-800] md:bg-[--tw-color-950] text-xs font-bold '>
      {
        tabs.map((button: any, i: number) => (

          <button
            key={i}
            onClick={() => setSelectedTab(button)}
            className={`${selectedTab === button ? "border-[--tw-primary]" : "border-transparent"} md:border-transparent max-md:active:bg-[--tw-color-900] border-b-2 px-4 md:py-3 py-4 md:cursor-default md:text-lg transition-all duration-200`} >{button}</button>
        ))
      }

    </div>
  )
}

export default TabBar