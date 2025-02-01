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


