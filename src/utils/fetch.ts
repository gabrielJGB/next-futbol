export const fetchLaegues = async (dates: string) => {

    const url = `https://site.web.api.espn.com/apis/site/v2/sports/soccer/scorepanel?league=all&lang=es&region=ar&contentorigin=deportes&limit=250&dates=${dates}`    
    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const leagues = await response.json();
    
    return leagues.scores      

}


