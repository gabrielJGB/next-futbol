export const getTodayString = () => {
    const today = new Date()
    const todayString = `${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, "0")}${String(today.getDate()).padStart(2, "0")}`
    return todayString
}

export const getDates = (date: string) => {

    const year = parseInt(date.slice(0, 4))
    const month = parseInt(date.slice(4, 6)) - 1
    const day = parseInt(date.slice(6, 8))

    const dateObj = new Date(year, month, day)

    const previous = new Date(dateObj.getTime() - 86400000)
    const next = new Date(dateObj.getTime() + 86400000)

    const previousDate = `${previous.getFullYear()}${String(previous.getMonth() + 1).padStart(2, "0")}${String(previous.getDate()).padStart(2, "0")}`

    const nextDate = `${next.getFullYear()}${String(next.getMonth() + 1).padStart(2, "0")}${String(next.getDate()).padStart(2, "0")}`



    return {
        previousDate: {
            formated: formatDateObject(previous),
            string: previousDate
        },
        selectedDate: {
            formated: formatDateObject(dateObj),
            string: date
        },
        nextDate: {
            formated: formatDateObject(next),
            string: nextDate
        }
    }



}

const formatDateObject = (date: Date) => {

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (isSameDay(date, today)) {
        return "HOY";
    } else if (isSameDay(date, tomorrow)) {
        return "MAÑANA";
    } else if (isSameDay(date, yesterday)) {
        return "AYER";
    } else {
        const days = ['DOM', 'LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB'];

        const dayOfWeek = days[date.getDay()];
        const formatedDate = `${dayOfWeek}  ${formatNumber(date.getDate())}/${formatNumber(date.getMonth() + 1)}/${formatNumber(date.getFullYear() % 100)}`;
        return formatedDate;
    }
}

const formatNumber = (number: number) => {
    return number < 10 ? '0' + number : number;
}


const isSameDay = (date1: Date, date2: Date) => {
    return date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear();
}


export const convertTimestamp = (timestamp: string) => {
    const fechaUTC = new Date(timestamp);
    fechaUTC.setUTCHours(fechaUTC.getUTCHours() - 3);
    const hora = fechaUTC.getUTCHours().toString().padStart(2, '0') + ':' + fechaUTC.getUTCMinutes().toString().padStart(2, '0');
    const fecha = fechaUTC.getUTCFullYear().toString() + (fechaUTC.getUTCMonth() + 1).toString().padStart(2, '0') + fechaUTC.getUTCDate().toString().padStart(2, '0');
    const diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'][fechaUTC.getUTCDay()];
    const mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'][fechaUTC.getUTCMonth()];

    const date_2 = new Date(fechaUTC.getTime() - 86400000)
    const dateBefore = date_2.getUTCFullYear().toString() + (date_2.getUTCMonth() + 1).toString().padStart(2, '0') + date_2.getUTCDate().toString().padStart(2, '0');

    const dateNext = new Date(fechaUTC.getTime() + 86400000)


    return {
        time: hora,
        date: fecha,
        dayOfWeek: diaSemana,
        month: mes,
        monthNum: (fechaUTC.getUTCMonth() + 1).toString().padStart(2, '0'),
        year: fechaUTC.getUTCFullYear(),
        day: fechaUTC.getUTCDate(),
        dateBefore,
        dateNext,
        DDMMYYYY: `${fechaUTC.getUTCDate().toString().padStart(2, '0')}/${(fechaUTC.getUTCMonth() + 1).toString().padStart(2, '0')}/${fechaUTC.getFullYear().toString().slice(2)}`,
        dateObject: fechaUTC

    };
}


export const timeUntil = (dateString: string) => {
    const targetDate: any = new Date(dateString);
    const now: any = new Date();
    let diff: any = targetDate - now;

    const isPast = diff < 0;
    diff = Math.abs(diff);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    let result = "";

    if (days > 0) {
        result += `${days} día${days > 1 ? 's' : ''}`;
    }

    if (hours > 0) {
        if (result) result += ", ";
        result += `${hours} hora${hours > 1 ? 's' : ''}`;
    }

    if (minutes > 0) {
        if (result) result += " y ";
        result += `${minutes} minuto${minutes > 1 ? 's' : ''}`;
    }

    if (!result) {
        result = "menos de un minuto";
    }

    if (isPast) {
        return `Hace ${result}`;
    } else {
        return `Empieza en ${result}`;
    }
}


export const formatDate = (date: string) => {

    const t = new Date(date)

    const dateString = `${t.getDate()}/${String(t.getMonth() + 1)}/${t.getFullYear()}`
    const timeString = `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}`

    return `${dateString} - ${timeString}`

}