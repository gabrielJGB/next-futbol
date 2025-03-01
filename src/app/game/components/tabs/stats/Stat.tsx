import { translateStatLabel } from '@/utils/game'
import React, { useEffect } from 'react'

type Props = {
  homeStat: any,
  awayStat: any,
}

const Stat = ({ homeStat, awayStat }: Props) => {



  let homeWidth = 0
  let awayWidth = 0
  let homeValue = Math.abs(parseFloat(homeStat.displayValue))
  let awayValue = Math.abs(parseFloat(awayStat.displayValue))
  let total = homeValue + awayValue

  homeWidth = (homeValue * 100) / total
  awayWidth = (awayValue * 100) / total
  homeWidth = homeWidth ? homeWidth : 0
  awayWidth = awayWidth ? awayWidth : 0







  return (
    <>
      {

        <div className={`flex flex-col  border-[0px] border-[--tw-color-700] md:py-3 py-2 `}>
          <div className='flex flex-row items-center justify-between text-sm md:text-[16px] text-center font-semibold pb-1'>
            <div className={`font-semibold pl-1 ${homeStat.name === "possessionPct" && "text-[18px]"}`}>

              { homeValue}
              {homeStat.name === "possessionPct" || homeStat.name === "passPct" ? "%" : ""}

            </div>

            <div className={`md:text-sm text-xs`}>{translateStatLabel(homeStat.label)}</div>

            <div className={`font-semibold pl-1 ${homeStat.name === "possessionPct" && "text-[18px]"}`}>

              { awayValue}
              {homeStat.name === "possessionPct" || homeStat.name === "passPct" ? "%" : ""}

            </div>
          </div>

          <div className='flex items-center justify-between gap-1 w-full px-0 rounded-md'>

            <div className='flex items-center justify-between w-full bg-[#234321] rounded-md '>
              <div></div>
              <div className={`${homeStat.label.toUpperCase() === "POSSESSION" ? "h-[15px]" : "h-[5px]"} bg-[#43e143] rounded-l`} style={{ width: (`${homeWidth.toFixed()}%`) }}></div>
            </div>

            <div className='relative flex items-center justify-between w-full bg-[#23324b] rounded-md'>
              <div className={`${awayStat.label.toUpperCase() === "POSSESSION" ? "h-[15px]" : "h-[5px]"} bg-[#3787ff] rounded-r`} style={{ width: (`${awayWidth.toFixed()}%`) }}></div>
              <div></div>
            </div>

          </div>
        </div>
      }
    </>


  )
}

export default Stat