import { convertTimestamp, timeUntil } from '@/utils/dates'
import React from 'react'

type Props = {
    game: any
}

const Card = ({ title, value, icon }: { title: string | boolean, value: string, icon: string }) => {



    return (
        <div className='flex flex-row items-center justify-start gap-2 '>
            <div className='w-[30px] h-[30px] bg-gray-900 text-sm rounded'></div>
            <div className='flex flex-col gap-0 p-1'>

                {
                    title &&
                    <div className='text-xs font-bold text-gray-400'>{title}</div>
                }

                <div className='text-sm '>{value}</div>

            </div>
        </div>
    )
}


const GameInfo = ({ game }: Props) => {




    const gameDate = convertTimestamp(game.header.competitions[0].date)

    const dateString = `${gameDate.dayOfWeek} ${gameDate.day} de ${gameDate.month} de ${gameDate.year}, ${gameDate.time} hs`

    const playing = game.header.competitions[0].status.type.state === "in"

    return (

        <div className='shadow shadow-gray-800 bg-[--tw-color-800] flex flex-col gap-0 rounded-lg p-2 '>
            <h3 className='text-center font-bold'>INFORMACIÓN DEL PARTIDO</h3>

            <Card title="Fecha" value={dateString} icon={"calendar-month"} />

            {!playing && <Card title="Contador" value={timeUntil(game.header.competitions[0].date)} icon={"timer-sand"} />}


            {
                "venue" in game.gameInfo && "city" in game.gameInfo.venue.address &&

                <Card title="Ciudad" value={`${game.gameInfo.venue.address.city}${"country" in game.gameInfo.venue.address ? ", " + game.gameInfo.venue.address.country : ""}`} icon={"city"} />
            }

            {
                "venue" in game.gameInfo && game.gameInfo.venue &&

                <Card title={"Estadio"} value={game.gameInfo.venue.fullName.replace("TBC", "A confirmar")} icon={"stadium"} />

            }

            {
                "attendance" in game.gameInfo && game.gameInfo.attendance > 0 &&

                <Card title={"Espectadores"} value={game.gameInfo.attendance} icon={"crowd"} />

            }

            {
                "officials" in game.gameInfo &&

                <Card title={"Arbitro"} value={game.gameInfo.officials[0].fullName} icon={"whistle"} />

            }

            {
                "gameNote" in game.header &&

                game.header.gameNote.split(" - ").map((note: string, i: number) => (
                    <div className='mt-2'>
                    <Card

                        key={i}
                        title={false}
                        value={note.replace("Juego", "Partido")}
                        icon="information"
                    />
                    </div>
                ))

            }

            {
                "groups" in game.header.competitions[0].competitors[0] &&
                <div className='mt-4'>
                    <Card
                        title={false}
                        value={game.header.competitions[0].competitors[0].groups.abbreviation}
                        icon="information-outline"
                    />
                </div>

            }



            {
                !("groups" in game.header.competitions[0].competitors[0]) &&
                game.header.competitions[0].groups?.abbreviation.includes("Grupo") &&

                <div className='mt-4'>
                    <Card
                        title={false}
                        value={game.header.competitions[0].groups.abbreviation}
                        icon="information-outline"
                    />
                </div>

            }


        </div>

    )
}

export default GameInfo