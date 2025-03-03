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

export const fetchTeam = async (teamId: string, season: number | boolean) => {
    try {

        let url1 = `https://site.api.espn.com/apis/site/v2/sports/soccer/all/teams/${teamId}/schedule?region=ar&lang=es`
        let url2 = url1 + "&fixture=true"

        if (season) {
            url1 = url1 + `&season=${season}`
            url2 = url2 + `&season=${season}`
        }

        const res1 = await fetch(url1)
        const data1 = await res1.json()

        if ("events" in data1 && data1.events.length === 0)
            return { teamData: { ...data1 }, events: [] }


        const res2 = await fetch(url2)
        const data2 = await res2.json()

        const previousGames = data1.events
        const nextGames = data2.events

        previousGames.forEach((object: any) => {
            object['played'] = true;
        })

        nextGames.forEach((object: any) => {
            object['played'] = false;
        })


        let events = [...previousGames, ...nextGames]

        events.sort((a, b) => {
            return a.date.localeCompare(b.date);
        })


        delete data1.events

        return { teamData: { ...data1 }, events }



    } catch (error) {
        throw error
    }

}


export const fetchRoster = async (teamId: string) => {

    try {
        const url = `https://site.api.espn.com/apis/site/v2/sports/soccer/all/teams/${teamId}?enable=roster&lang=es`
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


// export const fetchTeam = async (teamId: string, season: string | number) => {

//     try {
//         //?enable=roster

//         const url1 = `https://site.api.espn.com/apis/site/v2/sports/soccer/all/teams/${teamId}/schedule?region=ar&lang=es&season=${season}`
//         const url2 = `https://site.api.espn.com/apis/site/v2/sports/soccer/all/teams/${teamId}/schedule?region=ar&lang=es&fixture=true&season=${season}`

//         const res1 = await fetch(url1)
//         const data1 = await res1.json()

//         if ("events" in data1 && data1.events.length === 0)
//             throw new Error("Sin datos")

//         const teamResp2 = data1.season.year === data1.requestedSeason.year ? await fetch(url2) : { events: [] }

//         const teamInfo = data1
//         const previousGames = data1.events
//         const nextGames = teamResp2.events

//         previousGames.forEach((objeto: any) => {
//             objeto['played'] = true;
//         })

//         nextGames.forEach((objeto: any) => {
//             objeto['played'] = false;
//         });


//         let events = [...previousGames, ...nextGames]

//         events.sort((a, b) => {
//             return a.date.localeCompare(b.date);
//         });


//         const leaguesRepeated = events.map(event => event.league)
//         const seasonLeagues = Array.from(new Set(leaguesRepeated.map(JSON.stringify))).map(JSON.parse)
//         const leagues = seasonLeagues.map(league => ({ ...league, events: events.filter(event => event.league.id === league.id) }))

//         delete teamInfo.events


//         return { ...teamInfo, leagues }

//     } catch (error) {
//         throw error
//     }

// }