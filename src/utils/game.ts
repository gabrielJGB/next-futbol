import React from "react"
import { convertTimestamp } from "./dates"
import penalty from '@/assets/penalty.png'
import penaltyMissed from '@/assets/no-score.png'
import arrowIn from '@/assets/arrow-in.png'
import arrowOut from '@/assets/arrow-out.png'
import ownGoal from '@/assets/own-goal.png'
import goal from '@/assets/goal.png'

import boot from '@/assets/boot.png'
import redCard from '@/assets/red.png'
import yellowCard from '@/assets/yellow.png'


export const getPlayImg = (play:any,subbedOut:boolean) => {
    
    

    if (play.penaltyKick)
        if (play.didScore)
            return penalty
        else
            return penaltyMissed
    else if (play.ownGoal)
        return ownGoal
    else if (play.didScore)
        return goal
    else if (play.didAssist)
        return boot
    else if (play.redCard)
        return redCard
    else if (play.yellowCard)
        return yellowCard

    else if (play.substitution)
        if(subbedOut)
            return arrowOut
        else 
        return arrowIn

    else
        return ""
    // else if (play.substitution)
    //     return p_in ? <Icon source={"chevron-right"} size={22} color='lime' /> : <Icon source={"chevron-left"} size={22} color='red' />


}

export const getFlag = (slug: string, SIZE: number) => {

    const flagCode = slug.slice(0, 3)
    const p = 7
    const arr = ['fif', 'afc', 'clu', 'con', 'uef']


    if (arr.includes(flagCode)) {
        return undefined
    }

    return `https://a1.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/${flagCode}.png?w=${SIZE + p}&h=${SIZE + p}`


}

export const getLogoURL = (logoFull: string, size: number) => {



    const logo = `${logoFull.replace("https://a.espncdn.com/", "https://a1.espncdn.com/combiner/i?img=")}?h=${size}&w=${size}`
    return logo

}


export const getLogo = (team_p:any, SIZE:number) => {
    let logo = ""
    const p = 7

    if (team_p) {


        let team = "team" in team_p ? team_p.team : team_p

        if (typeof (team) === "object" && "logo" in team && Array.isArray(team.logo)) {
            
            logo = team.logo[0].href
            logo = logo.replace("https://a.espncdn.com/i", `https://a1.espncdn.com/combiner/i?img=/i`)
            logo += `&h=${SIZE + p}&w=${SIZE + p}`
            return logo
        }


        if (typeof (team) === "object" && "logo" in team && team.logo != "") {
            logo = team.logo
            logo = logo.replace("https://a.espncdn.com/i", `https://a1.espncdn.com/combiner/i?img=/i`)
            logo += `&h=${SIZE + p}&w=${SIZE + p}`
            return logo
        }

        if (typeof (team) === "object" && "logos" in team && team.logos.length > 0) {
            
            logo = team.logos.length > 1 ? team.logos[1].href : team.logos[0].href
            logo = logo.replace("https://a.espncdn.com/i", `https://a1.espncdn.com/combiner/i?img=/i`)
            logo += `&h=${SIZE + p}&w=${SIZE + p}`
            return logo

        }

        return "-"
    }
    return "-"
}

export const getStatus = (status: string, detail: string, date: string) => {



    switch (status) {

        case "STATUS_SCHEDULED":
            return convertTimestamp(date).time;

        case "STATUS_FIRST_HALF":
        case "STATUS_SECOND_HALF":
            return `${detail}`

        // return `${elem.detail} PT`    
        // return `${elem.detail}`
        // return `${parseInt(elem.detail) - 45}' ST`


        case "STATUS_OVERTIME":
            return "ET Sup."

        case "STATUS_HALFTIME":
        case "STATUS_HALFTIME_ET":
            return "ET";

        case "STATUS_ABANDONED":
            return "Susp."

        case "STATUS_POSTPONED":
            return "Aplaz.";

        case "STATUS_IN_PROGRESS":
            return "Jugando"

        case "STATUS_DELAYED":
            return "Retras."

        case "STATUS_CANCELED":
            return "Cancel.";

        case "STATUS_SHOOTOUT":
        case "STATUS_END_OF_EXTRATIME":
            return "Pen.";

        case "STATUS_FINAL_AGT":
        case "STATUS_FULL_TIME":
            return "Final";

        case "STATUS_FINAL_PEN":
            return "Final\n(Pen.)";

        case "STATUS_FINAL_AET":
            return `Final\n(Supl.)`;

        default:
            return "...";
    }
}

export const getStatusColor = (status: string) => {


    switch (status) {
        case "pre":
            return `rgb(21, 128, 61)`
        case "in":
            return `rgb(185, 28, 28)`
        case "post":
            return `rgb(10,10,10)`
        default:
            return ``
    }
}

export const leagueHasState = (objeto: any, state: string) => {

    if (objeto.hasOwnProperty("state") && objeto["state"] === state) {
        return true;
    }

    for (const propiedad in objeto) {
        if (objeto[propiedad] !== null && typeof objeto[propiedad] === "object") {
            const resultado = leagueHasState(objeto[propiedad], state);
            if (resultado) {
                return true;
            }
        }
    }

    return false;
}

export const formatTitle = (title:string) => {

    if(title === undefined)
        return ""

    title = title.replace("Argentine", "").replace(",", " -")
    title = title.replace("Round of 64", "32avos de final")
    title = title.replace("Round of 32", "16avos de final")
    title = title.replace("Round of 16", "Octavos de final")
    title = title.replace("Round of 8", "Cuartos de final")
    title = title.replace("Ronda de 64", "32avos de final")
    title = title.replace("Ronda de 32", "16avos de final")
    title = title.replace("Ronda de 16", "Octavos de final")
    title = title.replace("Ronda de 8", "Cuartos de final")
    title = title.replace("First Round", "Primera Ronda")
    title = title.replace("Second Round", "Segunda Ronda")
    title = title.replace("Third Round", "Tercera Ronda")
    title = title.replace("Fourth Round", "Cuarta Ronda")
    title = title.replace("Fifth Round", "Quinta Ronda")
    title = title.replace("Club Friendly", "Amistoso")
    title = title.replace("Finals", "Final")
    return title

}


export const sortRoster = (roster:any) => {

    // const order = ["G", "LI", "DCI", "DC", "DCD", "LD", "MI", "MCI", "MCD", "MD", "MO", "MI", "MCI", "MC", "MO", "MCD", "MD", "ACI", "ACD", "AI", "ACI", "A", "ACD", "AD"];

    const order = ["G", "LI", "DCI", "D", "DC", "DCD", "LD", "L", "MI", "MCI", "MC", "MO", "MCD", "MD", "M", "AI", "ACI", "A", "ACD", "AD"];


    // const order = ["G", "LI", "DCI", "DC", "DCD", "LD", "MI","MD","MI","MO","MD","A"]

    const sortedJson = roster.sort((a:any, b:any) => {
        const indexA = a.position?.abbreviation ? order.indexOf(a.position?.abbreviation) : -1;
        const indexB = b.position?.abbreviation ? order.indexOf(b.position?.abbreviation) : -1;


        if (indexA === -1 && indexB === -1) return 0;
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;

        return indexA - indexB;
    });




    return sortedJson

}





export const getPlayerColor = (position:any) => {

    if (!position)
        return "#808080"

    if (position.displayName === "Arquero")
        return "#FF8700"

    else if (position.displayName.includes("Defensor") || position.displayName.includes("Lateral") || position.displayName.includes("defensivo") || position.displayName.includes("Líbero"))
        return "#20b4ff"

    else if (position.displayName.includes("Mediocampista"))
        return "#42d515"

    else if (position.displayName.includes("Atacante") || position.displayName.includes("Enganche"))
        return "#df1d1e"
    else
        return "#808080"

}