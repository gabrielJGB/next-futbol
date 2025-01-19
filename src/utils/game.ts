import { convertTimestamp } from "./dates"

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
            return "ET Sup.."

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
            return `rgb(30, 41, 59)`
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