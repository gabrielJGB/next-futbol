import { translateStatLabel } from '@/utils/game'
import React from 'react'

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
        !homeStat.label.includes("%") &&  homeStat.displayValue != "0" && awayStat.displayValue != "0" &&
        <div className={`flex flex-col  border-[0px] border-[--tw-color-700] md:py-3 py-2 `}>
          <div className='flex flex-row items-center justify-between text-sm md:text-[16px] text-center font-semibold pb-2'>
            <div className={`font-semibold pl-1 ${homeStat.label === "Possession" && "text-[18px]"}`}>
              {homeStat.displayValue}
              {homeStat.label === "Possession" && "%"}
            </div>

            <div className={`md:text-sm text-xs`}>{translateStatLabel(homeStat.label)}</div>

            <div className={`font-semibold pl-1 ${homeStat.label === "Possession" && "text-[17px]"}`}>
              {awayStat.displayValue}
              {awayStat.label === "Possession" && "%"}
            </div>
          </div>

          <div className='flex items-center justify-between gap-1 w-full px-0 rounded-md'>

            <div className='flex items-center justify-between w-full bg-[#234321] rounded-md'>
              <div></div>
              <div className={`${homeStat.label === "Possession" ? "h-[15px]" : "h-[6px]"} bg-[#43e143] rounded-sm`} style={{ width: (`${homeWidth.toFixed()}%`) }}></div>
            </div>

            <div className='relative flex items-center justify-between w-full bg-[#23324b] rounded-md'>
              <div className={`${awayStat.label === "Possession" ? "h-[15px]" : "h-[6px]"} bg-[#3787ff] rounded-sm`} style={{ width: (`${awayWidth.toFixed()}%`) }}></div>
              <div></div>
            </div>

          </div>
        </div>
      }
    </>


  )
}

export default Stat