import { convertTimestamp, timeUntil } from '@/utils/dates'
import React from 'react'

type Props = {
    game: any
}

const Card = ({ title, value, icon }: { title: string | boolean, value: string, icon: string }) => {



    return (
        <div className='flex flex-row gap-2 items-center justify-start px-2 py-1'>
            <div className='w-[20px] h-[20px] bg-slate-600 text-sm rounded-[20px] flex justify-center items-center font-bold  text-slate-300'>i</div>
            <div className='flex flex-col '>
                {
                    title &&
                    <div className='text-xs font-bold text-gray-400'>{title}</div>
                }
                <div className={`text-xs ${title ? "" : "py-2"}`}>{value}</div>
            </div>
        </div>
    )
}


const GameInfo = ({ game }: Props) => {


    const gameDate = convertTimestamp(game.header.competitions[0].date)
    const dateString = `${gameDate.dayOfWeek} ${gameDate.day} de ${gameDate.month} de ${gameDate.year}, ${gameDate.time} hs`
    const playing = game.header.competitions[0].status.type.state === "in"

    return (

        <div className='shadow shadow-gray-800 bg-[--tw-color-800] flex flex-col  divide-y-[1px] divide-[--tw-color-700] gap-0 rounded-lg  '>
            <h3 className='text-center font-bold py-2'>INFORMACIÓN DEL PARTIDO</h3>

            <Card title="Fecha" value={dateString} icon={"calendar-month"} />

            {/* {!playing && <Card title="Contador" value={timeUntil(game.header.competitions[0].date)} icon={"timer-sand"} />} */}


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
                    <div className=''>
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
                <div className=''>
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

                <div className=''>
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