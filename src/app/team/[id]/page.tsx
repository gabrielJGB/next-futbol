import React from 'react'
import Main from '../components/Main'

type Params = {
    params: Promise<{ id: string }>
}

const Team = async ({ params }: Params) => {
    const { id } = await params
    // const team = await fetchTeam(id, false)
    // const roster = await fetchRoster(id)
    // const articles = await fetchTeamArticles(id)

    // const leagues = team.events.map((x: any) => ({ name: x.league.name, id: x.league.id }))

    // console.log(team);
    // console.log(roster);
    // console.log(articles)
    
    
    

    return (
        
        <Main id={id} />
        
    )
}

export default Team