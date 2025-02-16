import React from 'react'
import Main from '@/app/game/components/Main'
import { fetchGame, fetchSofaData } from '@/utils/fetch'
import { getSofaId } from '@/utils/game'

type Params = {
    params: Promise<{ id: string }>
}

const Page = async ({ params }: Params) => {

    const { id } = await params
    const gameData = await fetchGame(id)
    //const date = gameData.header.competitions[0].date
  //  const sofaData = await fetchSofaData(date)
//    const sofaId = getSofaId(gameData,sofaData)



    let tabs = [
        { show: false, name: "Info" },
        { show: false, name: "Formaciones" },
        { show: true, name: "Previa" },
        { show: false, name: "Penales" },
        { show: false, name: "Relato" },
        { show: false, name: "Estadísticas" },
        { show: false, name: "Posiciones" },
        { show: false, name: "Videos" }
    ]

    

    if ("roster" in gameData.rosters[0])
        tabs[1].show = true

    if ("shootout" in gameData)
        tabs[3].show = true

    if ("commentary" in gameData || "keyEvents" in gameData)
        tabs[4].show = true

    if ("statistics" in gameData.boxscore.teams[0] && gameData.boxscore.teams[0].statistics.length > 0)
        tabs[5].show = true

    if (gameData.standings.groups.length && gameData.standings.groups[0].standings.entries.length)
        tabs[6].show = true

    if ("videos" in gameData && gameData.videos.length)
        tabs[7].show = true




    return (
        <Main tabs={tabs} gameData={gameData} id={id} sofaId={""}/>
    )
}

export default Page