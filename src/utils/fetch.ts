import { convertTimestamp, formatDate2 } from "./dates";

export const fetchGame = async (id: string) => {

    const url = `https://site.web.api.espn.com/apis/site/v2/sports/soccer/all/summary?region=ar&lang=es&contentorigin=deportes&event=${id}`
    const response = await fetch(url, { "cache": "no-store" });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const game = await response.json();
    return game

}

export const fetchLaegues = async (dates: string) => {



    const url = `https://site.web.api.espn.com/apis/site/v2/sports/soccer/scorepanel?league=all&lang=es&region=ar&contentorigin=deportes&limit=250&dates=${dates}`
    const response: any = await fetch(url, { "cache": "no-store" });


    if (!response.ok) {
        throw new Error(response.statusText);
    }


    const leagues = await response.json();





    // const events = leagues.scores.flatMap((item: any) => item.events);
    // const sortedEvents = events.sort((a: any, b: any) => new Date(a.date).valueOf() - new Date(b.date).valueOf());

    // const sorted = Object.entries(
    //     sortedEvents.reduce((acc: any, event: any) => {
    //         acc[event.date] = acc[event.date] || [];
    //         acc[event.date].push(event);
    //         return acc;
    //     }, {})
    // )
    //     .map(([date, events]) => ({ date, events }))
    //     .sort((a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf());



    return leagues.scores

}


export const fetchLeaguesExtra = async (dates: string) => {

    try {


        const url = `https://site.web.api.espn.com/apis/v2/scoreboard/header?sport=soccer&lang=es&region=ar&dates=${dates}`
        const response: any = await fetch(url, { "cache": "no-store" });
        const parsed = await response.json();
        const leagues = parsed.sports[0].leagues

        return leagues

        // const newData = data.scores.map((league: any) => ({
        //     ...league,
        //     events: league.events.map((event: any, j: any) => ({
        //         ...event,
        //         headline: getHeadline(event.id, leaguesArray)
        //     }))
        // }))
    } catch (error) {
        console.log(error)

    }



}


export const fetchSofaData = async (selectedDate: string) => {

    try {
        const dateString = formatDate2(selectedDate)
        const res = await fetch(`https://api.sofascore.com/api/v1/sport/football/scheduled-events/${dateString}`)

        if (!res.ok) {
            return false
        }

        const data = await res.json()


        if ("events" in data)
            return data.events

        else
            return false


    } catch (error) {
        return false
    }

}


export const fetchArticle = async (id: string) => {

    try {
        const res = await fetch(`https://now.core.api.espn.com/v1/sports/news/${id}?lang=es`)
        const data = await res.json()
        return data

    } catch (error) {
        throw error
    }

}

export const fetchVideo = async (id: string) => {

    try {
        const res = await fetch(`https://api-app.espn.com/v1/video/clips/${id}?lang=es`)
        const data = await res.json()


        if ("videos" in data && data.videos.length > 0)
            return data.videos[0]

        else
            throw Error("No se pudo obtener el video")

    } catch (error) {
        throw error
    }

}


const getDefaultSeason = async (teamId: string) => {

    const url = `https://sports.core.api.espn.com/v2/sports/soccer/teams/${teamId}?region=ar&lang=es`
    const res = await fetch(url)
    const data = await res.json()
    const text = data.record.$ref
    const season = text.match(/seasons\/(\d+)/)[1]

    return season


}



export const fetchTeamInformation = async (teamId: string) => {

    
    const url = `https://sports.core.api.espn.com/v2/sports/soccer/teams/${teamId}?region=ar&lang=es`
    const res = await fetch(url)

    if (!res.ok)
        return false

    const data = await res.json()

    return data


}

export const fetchTeamEvents = async (teamId: string, season: any) => {
    try {

        const currentSeason = await getDefaultSeason(teamId)
        season = !season ?currentSeason: season
        let fixture = String(season) === String(currentSeason)

        const url = `https://site.api.espn.com/apis/site/v2/sports/soccer/all/teams/${teamId}/schedule?region=ar&lang=es&season=${season || currentSeason}&fixture=false`
        const res = await fetch(url)
        const data = await res.json()

        if ("events" in data && data.events.length === 0)
            throw Error("No data")

        let previousGames = data.events
        let nextGames = []

        previousGames.forEach((object: any) => { object['played'] = true })

        if (fixture) {
            const url = `https://site.api.espn.com/apis/site/v2/sports/soccer/all/teams/${teamId}/schedule?region=ar&lang=es&season=${season || currentSeason}&fixture=true`
            const res = await fetch(url)
            const data = await res.json()
            nextGames = data.events
            nextGames.forEach((object: any) => { object['played'] = false })
        }

        let events = [...previousGames, ...nextGames]

        events.sort((a, b) => {
            return a.date.localeCompare(b.date);
        })

        return {events,currentSeason}

    } catch (error) {
        throw Error("Error")
    }
}



export const fetchRoster = async (teamId: string, season: string | boolean) => {

    try {
        if (!season) {
            season = await getDefaultSeason(teamId)
        }

        const url = `https://site.api.espn.com/apis/site/v2/sports/soccer/all/seasons/${season}/teams/${teamId}?enable=roster&lang=es`
        const res = await fetch(url)
        const data = await res.json()
        return data

    } catch (error) {
        throw error
    }

}


export const fetchTeamArticles = async (teamId: string) => {

    const articleCount = 32
    const url = `https://site.web.api.espn.com/apis/v2/flex?sport=soccer&league=soccer&region=ar&lang=es&contentorigin=deportes&team=${teamId}&limit=${articleCount}&offset=0&pubkey=soccer-clubhouse`
    const res = await fetch(url)
    const data = await res.json()
    const articles = data.columns[1].items[0].feed.filter((article: any) => article.type === "dStory")

    return articles

}





export const fetchSearch = async (query: string) => {

    const url = `https://site.web.api.espn.com/apis/search/v2?region=ar&lang=es&limit=10&page=1&dtciVideoSearch=true&query=${query}`

    try {

        const res = await fetch(url)
        const data = res.json()

        return data


    } catch (error) {
        throw error
    }


}



// Añadir boton (check) de mostrar estadisticas debajo de PLANTEL y mapear estos datos con la lista de jugadores:  https://site.web.api.espn.com/apis/site/v2/sports/soccer/arg.1/teams/5/statistics?region=ar&lang=es&contentorigin=deportes&level=1