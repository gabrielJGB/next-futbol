"use client"
import Game from '@/app/game/components/tabs/prev/Game'
import GameAlt from '@/components/home/GameAlt'
import { convertTimestamp, formatDate4, formatDateObject } from '@/utils/dates'
import { formatTitle, getStatus, getStatusColor, getTeamObject } from '@/utils/game'
import React, { useEffect, useState } from 'react'

type Props = {
    league: any
}




const Fixture = ({ league }: Props) => {
    const currentStageId = league.currentStage.slug
    const [selectedWeek, setSelectedWeek] = useState(0)
    const [selectedStageId, setSelectedStageId] = useState(currentStageId)
    const [selectedStage, setSelectedStage] = useState<any>(league.stages.find((stage: any) => stage.slug === currentStageId))

    const getGamesArray = () => {


        if (selectedStage.stageEvents.length != 0) {
            if (selectedStage.hasStandings && selectedStage.stageEvents.length > 0) {
                return selectedStage.stageEvents[selectedWeek]
            }
            else if (!selectedStage.hasStandings && selectedStage.stageEvents.length > 0) {
                return selectedStage.stageEvents
            }
        }

        return []
    }

    const getCurrentWeek = () => {
        if (selectedStage.hasStandings && selectedStage.stageEvents.length > 0) {

            for (let i = 0; i < selectedStage.stageEvents.length; i++) {

                let x = selectedStage.stageEvents[i].find((elem: any) => elem.status.type.state === "pre")

                if (x != undefined || i == selectedStage.stageEvents.length - 1) {
                    setSelectedWeek(i)
                    break;
                }
            }
        }
    }


    const getNextDates = (date: string) => {

        const y: any = new Date(convertTimestamp(date).dateNext)
        const x = convertTimestamp(y)

        return `${x.month} ${x.year}`

    }

    useEffect(() => {

        const obj = league.stages.find((stage: any) => stage.slug === selectedStageId)
        setSelectedStage(obj)
        getCurrentWeek()
        


    }, [selectedStageId])

    if (!selectedStage)
        return <div></div>


    return (
        <div className='md:mt-8'>

            {
                !league.oneStage &&
                <select
                    className='w-full rounded p-2 mb-4 bg-[--tw-color-900] border-[--tw-color-700] border-[1px] md:hover:border-[--tw-primary] active:border-[--tw-primary] transition-all text-center font-semibold cursor-pointer'
                    onChange={(e) => { setSelectedStageId(e.target.value) }}
                    value={selectedStageId}
                >

                    {
                        league.stages.map((stage: any, i: number) => (
                            <option key={i} value={stage.slug}>{formatTitle(stage.name)}</option>
                        ))
                    }
                </select>
            }
            <div className='flex flex-col gap-4'>
                <div className='flex flex-row flex-wrap justify-center gap-2 '>

                    {
                        selectedStage.hasStandings &&
                        selectedStage.stageEvents.map((event: any, i: number) => (
                            <div
                                key={i}
                                className={`${i == selectedWeek && "bg-[--tw-primary] text-black"} flex items-center justify-center cursor-pointer bg-[--tw-color-800] md:h-[35] md:w-[35px] h-[42] w-[42px] font-semibold rounded text-center border-[1px] border-transparent md:hover:border-[--tw-primary] active:border-[--tw-primary transition-all`}
                                onClick={() => { setSelectedWeek(i) }}
                            >
                                {i + 1}
                            </div>
                        ))

                    }
                </div>

                {
                    selectedStage.stageEvents.length > 0 ?
                        <div className='flex flex-col gap-2'>
                            {
                                getGamesArray().map((game: any, i: number) => (
                                    <div className='flex flex-col justify-center w-full'>
                                        <div className='text-end mr-2 mb-[2px] font-semibold text-xs'>{formatDateObject(new Date(game.date))}</div>
                                        <GameAlt
                                            key={i}
                                            id={game.id}
                                            gameState={game.status.type.state}
                                            selectedState={""}
                                            statusColor={getStatusColor(game.status.type.state)}
                                            status={getStatus(game.status.type.name, game.status.type.detail, game.date)}
                                            home={getTeamObject(game.competitions[0], 0)}
                                            away={getTeamObject(game.competitions[0], 1)}
                                            gameData={undefined}

                                        />
                                    </div>
                                ))
                            }
                        </div>
                        :
                        <div>
                            <div className='mt-6 text-sm text-center'> Todavía no se definieron los partidos de esta fase</div>
                            <div className='text-gray-400 text-xs text-center mt-3'>{getNextDates(selectedStage.startDate)}</div>
                        </div>
                }


            </div>


        </div>
    )
}

export default Fixture