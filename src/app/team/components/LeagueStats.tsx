import React, { useEffect, useState } from 'react'

type Props = {
    events: any,
    teamId: string,
    filterId: string,
    showOnly:string
}

const getStats = (events: any, teamId: string, showOnly: string) => {
    let won = 0, lost = 0, tied = 0
    let teamScore = 0
    let rivalScore = 0


    events.forEach((game: any) => {
        const _team = game.competitions[0].competitors.find((comp: any) => comp.id === teamId)
        const rival = game.competitions[0].competitors.find((comp: any) => comp.id != teamId)
        const result = _team.winner ? "G" : (rival.winner ? "P" : "E")

        if ("score" in _team) {
            if (showOnly === "ALL") {

                teamScore = teamScore + parseInt(_team.score.value)
                rivalScore = rivalScore + parseInt(rival.score.value)

            } else if (showOnly === "L" && _team.homeAway === "home") {

                teamScore = teamScore + parseInt(_team.score.value)
                rivalScore = rivalScore + parseInt(rival.score.value)

            } else if (showOnly === "V" && _team.homeAway === "away") {

                teamScore = teamScore + parseInt(_team.score.value)
                rivalScore = rivalScore + parseInt(rival.score.value)

            }
        }

        if (showOnly === "ALL" || _team.homeAway === "home" && showOnly === "L" || _team.homeAway === "away" && showOnly === "V") {
            if (game.played)
                if (result === "G")
                    won++
                else if (result === "P")
                    lost++
                else if (result === "E")
                    tied++
        }
    })

    const score = [teamScore, rivalScore]


    let total: number = won + lost + tied

    let wonRate = Math.round((won * 100) / total)
    let tiedRate = Math.round((tied * 100) / total)
    let lostRate = Math.round((lost * 100) / total)


    return won === 0 && tied === 0 && lost === 0 ? { arr: [] } : {
        arr: [
            { value: won, percentage: wonRate, color: "#00A537", displayName: "Victorias" },
            { value: tied, percentage: tiedRate, color: "#F7FF32", displayName: "Empates" },
            { value: lost, percentage: lostRate, color: "#EB1E1C", displayName: "Derrotas" },
        ],
        score
    }


}

const LeagueStats = ({ events, teamId, filterId ,showOnly}: Props) => {



    const [stats, setStats] = useState(getStats(events, teamId, "ALL"))
    


    useEffect(() => {

        const a = getStats(events, teamId, showOnly)
        setStats(a)
        

    }, [filterId,showOnly])

    if(stats.arr.length === 0)
        return 

    return (
        <div className='flex flex-col gap-3 mb-4 w-[95%] md:w-[85%] justify-center mx-auto'>
            <div className={`flex flex-row h-[20px]`}>
                {
                    stats.arr.map((stat: any, i: number) => (
                        <div
                            key={i}
                            className='text-center font-semibold'
                            style={{ backgroundColor: stat.color, width: `${stat.percentage}%`, minWidth: (stat.percentage != 0 ? "8%" : 0),display:(stat.percentage === 0?"none":"block"), color: i === 1 ? "black" : "white" }}
                        >
                            {stat.value}
                        </div>
                    ))
                }
            </div>

            <div className='flex flex-row justify-evenly'>
                {
                    "score" in stats &&
                    stats.score?.map((score: any, i: any) => (
                        <div
                            key={i}
                            className='flex flex-col justify-center items-center'
                        >
                            <div className='font-semibold '>{score}</div>
                            <div className='text-xs'>{i === 0 ? "Goles a favor" : "Goles en contra"}</div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default LeagueStats