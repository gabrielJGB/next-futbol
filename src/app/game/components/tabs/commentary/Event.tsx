import { getEventColor, getLogo, translateEventText } from '@/utils/game'
import React from 'react'

type Props = {
    text: any,
    clock: any,
    participants: any,
    typeId: any,
    typeText: any,
    team: any,

}

const LOGO_SIZE = 23

const Event = ({ text, clock, participants, typeId, typeText, team }: Props) => {

    const logo = getLogo(team, LOGO_SIZE)


    return (
        <div className='rounded-lg p-2 border-[1px] border-[--tw-color-700] bg-[--tw-color-800]'>
            {
                clock != "" &&
                <div className='flex flex-row gap-1 items-center text-sm font-bold'>

                    <div
                        style={{ backgroundColor: getEventColor(typeId) }}
                        className='rounded px-1 py-[2px] text-black'
                    >
                        {clock}
                    </div>
                    {
                        logo != "-" &&
                        <img src={logo} alt="logo" width={LOGO_SIZE} height={LOGO_SIZE} />
                    }


                    <div
                        style={{ color: getEventColor(typeId) }}
                        className='text-sm font-bold pl-1'
                    >
                        {translateEventText(typeText)}
                    </div>

                </div>
            }

            {
                text &&
                <div className='text-xs text-gray-300 py-3'> {text}</div>
            }

            {
                participants &&
                <div className='flex flex-col gap-1'>
                    {
                        participants.map((elem: any, i: number) => (
                            <div key={i} className='flex flex-row items-center rounded gap-2 py-1 px-2 w-max bg-[--tw-color-900] '>

                                {/* {getEventIcon(typeId, i)} */}
                                <div className='text-xs'>{elem.athlete.displayName}</div>

                            </div>
                        ))
                    }
                </div>

            }

        </div>
    )
}

export default Event