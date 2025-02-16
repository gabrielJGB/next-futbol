import { convertTimestamp, formatDate2 } from "./dates";

export const fetchGame = async (id: string) => {

    const response = await fetch(`https://site.web.api.espn.com/apis/site/v2/sports/soccer/all/summary?region=ar&lang=es&contentorigin=deportes&event=${id}`);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const game = await response.json();
    return game

}

export const fetchLaegues = async (dates: string) => {

    const url = `https://site.web.api.espn.com/apis/site/v2/sports/soccer/scorepanel?league=all&lang=es&region=ar&contentorigin=deportes&limit=250&dates=${dates}`
    const response: any = await fetch(url);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const leagues = await response.json();

    const events = leagues.scores.flatMap((item: any) => item.events);
    const sortedEvents = events.sort((a: any, b: any) => new Date(a.date).valueOf() - new Date(b.date).valueOf());

    const sorted = Object.entries(
        sortedEvents.reduce((acc: any, event: any) => {
            acc[event.date] = acc[event.date] || [];
            acc[event.date].push(event);
            return acc;
        }, {})
    )
        .map(([date, events]) => ({ date, events }))
        .sort((a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf());



    return { leagues: leagues.scores, sorted }

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


export const fetchArticle = async (id:string) => {

    try {
        const res = await fetch(`https://now.core.api.espn.com/v1/sports/news/${id}?lang=es`)
        const data = await res.json()
        return data

    } catch (error) {
        throw error
    }

}

export const fetchVideo = async (id:string) => {

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