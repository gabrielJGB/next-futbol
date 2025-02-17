import { getLogo, getLogoURL } from '@/utils/game'
import teamLogo404 from '@/assets/team.png'
import Image from 'next/image'
import React from 'react'

const IMG_SIZE = 45

type Props = {
    logo: string,
    name: string,
    redCards?: [],
    scorers?: [],
    isHome: boolean
    
}



const TeamAlt = ({  name, isHome , scorers ,logo}: Props) => {

    

    return (

        <div className={`flex flex-row gap-x-2 flex-wrap text-white py-2 col-span-6 bg-[--tw-color-900] px-1 ${isHome ? "rounded-tl-lg" : "rounded-bl-lg"}`}>

            <div className='flex flex-row  gap-1 items-center '>
                {
                    logo != "-" ?
                        <img className='w-[25px] h-[25px]' src={logo} alt="" width={IMG_SIZE} height={IMG_SIZE} />
                        :
                        <Image src={teamLogo404} width={24} height={24} alt="Logo" />
                }
                <div className=' text-[11px] md:text-[12px]  font-bold text-center'>{name}</div>
            </div>


            {/* {
                            redCards?.map((_, i) => (
                                <div key={i} className='bg-red-600  w-[4px] h-[8px]'></div>
                            ))
                        } */}



            {/* <div className='flex flex-row flex-wrap  bg-blue-600 text-gray-400 gap-x-1 text-[10px] '> */}
            {
                scorers &&
                scorers.map((goal: any, i: number) => (

                    <div key={i} className={`${i == 0 ? "" : ""} text-gray-400 flex flex-row items-center gap-x-[2px] text-[10px]`}>
                        <div className='font-bold '>{goal.clock.displayValue}</div>
                        {
                            "athletesInvolved" in goal &&
                            <div> {goal.athletesInvolved[0].shortName}</div>
                        }
                        {i != scorers.length - 1 && <span className=''>,</span>}
                    </div>

                ))
            }


            {/* </div> */}



        </div>




    )
}

export default TeamAlt