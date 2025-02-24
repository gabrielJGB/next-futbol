import React from 'react'
import Event from './Event'

type Props = {
    events: any,
    teams: any,
}

const Events = ({ events, teams }: Props) => {

    const getTeam = (displayName: any) => {
        return teams.find((team: any) => team.team.displayName === displayName)?.team
    }




    return (
        <div className='flex flex-col-reverse gap-4'>
            {
                events.map((event: any, i: any) => {
                    const isFoul = event.play && "type" in event.play && "id" in event.play.type && event.play.type.id === '66' || event.play && "type" in event.play && "id" in event.play.type && event.play.type.id === '36'

                    return !isFoul && <Event
                        key={i}
                        text={event.text}
                        clock={event.time.displayValue}
                        participants={event.play && "participants" in event.play && event.play.participants}
                        typeId={event.play && "type" in event.play && "id" in event.play.type && event.play.type.id}
                        typeText={event.play && "type" in event.play && "text" in event.play.type && event.play.type.text}
                        team={event.play && "team" in event.play && getTeam(event.play.team.displayName)}


                    />
                })
            }
        </div>
    )
}

export default Events