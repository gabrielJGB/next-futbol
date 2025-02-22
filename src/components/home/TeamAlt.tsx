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

        <div className={`flex flex-row gap-x-2  text-white  col-span-6 bg-[--tw-color-900] px-1 ${isHome ? "rounded-tl-lg" : "rounded-bl-lg"} `}>

            <div className='shrink-0 flex flex-row py-2 gap-2 items-center pr-2 border-r-[1px] border-[--tw-color-800] '>
                {
                    logo != "-" ?
                        <img className='w-[27px] h-[27px]' src={logo} alt="" width={IMG_SIZE} height={IMG_SIZE} />
                        :
                        <Image src={teamLogo404} width={24} height={24} alt="Logo" />
                }
                <div className=' text-[12px] md:text-[12px]  font-bold text-center'>{name}</div>
            </div>



            <div className='flex flex-wrap py-1 w-max gap-[2px] text-gray-400 gap-x-1 text-[10px] '>
            {
                scorers &&
                scorers.map((goal: any, i: number) => (

                    <div key={i} className={`${i == 0 ? "" : ""} text-gray-400 flex flex-row items-center gap-x-[2px] text-[9px] md:text-[10px]`}>
                        <div className='font-bold'>{goal.clock.displayValue}</div>
                        {
                            "athletesInvolved" in goal &&
                            <div> {goal.athletesInvolved[0].shortName}</div>
                        }
                        {i != scorers.length - 1 && <span className='pl-[0px]'>,</span>}
                    </div>

                ))
            }


            </div>



        </div>




    )
}

export default TeamAlt