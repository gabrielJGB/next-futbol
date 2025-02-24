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
          homeStat.displayValue != "0" && awayStat.displayValue != "0" && !homeStat.label.includes("%") && !homeStat.label.includes("Effective")&&
          <div className='flex flex-col mb-3 bg-[--tw-color-800] border-[1px] border-[--tw-color-700] rounded-lg'>
            <div className='text-center text-sm font-semibold'>{translateStatLabel(homeStat.label)}</div>
  
            <div className='flex items-center justify-between gap-[2px] w-full  px-2 rounded-md'>
  
              <div className='flex items-center justify-between w-full'>
                <div className='font-semibold pr-1'>{ parseInt(homeStat.displayValue).toFixed() }</div>
                <div className="h-[6px] bg-[#43e143] rounded-l-sm" style={{ width: (`${homeWidth.toFixed()}%`) }} ></div>
              </div>
  
              <div className='flex items-center justify-between w-full'>
                <div className=" h-[6px] bg-[#3787ff] rounded-r-sm" style={{ width: (`${awayWidth.toFixed()}%`) }}></div>
                <div className='font-semibold pl-1'>{ parseInt(awayStat.displayValue).toFixed() }</div>
              </div>
  
            </div>
          </div>
        }
      </>
    )
}

export default Stat