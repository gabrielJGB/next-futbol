import React from 'react'
import Event from './Event'

type Props = {
    keyEvents: any,
    teams:any,
}

const KeyEvents = ({ keyEvents,teams }: Props) => {

    const getTeam = (displayName: any) => {
        return teams.find((team: any) => team.team.displayName === displayName)?.team
    }


    return (
        <div className='flex flex-col-reverse gap-4'>
            {
                keyEvents.map((event: any, i: number) => (
                    <Event
                        key={i}
                        text={event.text}
                        clock={event.clock.displayValue}
                        participants={"participants" in event && event.participants}
                        typeId={"type" in event && "id" in event.type && event.type.id}
                        typeText={"type" in event && "text" in event.type && event.type.text}
                        team={"team" in event && getTeam(event.team.displayName)}

                    />
                ))
            }
        </div>
    )
}

export default KeyEvents