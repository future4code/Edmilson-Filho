import dayjs from 'dayjs';
var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

import { insertConcert, selectConcert } from '../data/concertDatabase';
import { Concert } from './entities/concert';

export const businessCreateConcert = async (
    concert: Concert
): Promise<void> => {
    if (
        !concert.id ||
        !concert.date ||
        !concert.datetime
    ) {
        throw new Error("Por favor, preencha todos os campos (id, date e datetime).");
    };

    if (!dayjs(concert.date).format('YYYY/MM/DD')) {
        throw new Error("Formato de data incorreto")            
    }

    // console.log("concert.date.get('day')", dayjs(concert.date).get('day'));

    if (dayjs(concert.date).get('day') > 0 && dayjs(concert.date).get('day') < 6) {
        throw new Error("Dia inválido. Os dias de show são sexta, sábado e domingo.");
    }

    const completeDate = dayjs(`${concert.date}T${concert.datetime}`, ['DD/MM/YYYYTHH', 'DD/MM/YYYYTHH:mm']);
    const completeDateMinute = dayjs(`${concert.date}T${concert.datetime}`, 'DD/MM/YYYYTHH:mm');
    
    console.log("Dia", dayjs(`${concert.date}T${concert.datetime}`, ['DD/MM/YYYYTHH', 'DD/MM/YYYYTHH:mm']).get('day'));
    console.log("Hora", dayjs(`${concert.date}T${concert.datetime}`, ['DD/MM/YYYYTHH', 'DD/MM/YYYYTHH:mm']).get('hour'));
    console.log("Minute", dayjs(`${concert.date}T${concert.datetime}`, 'DD/MM/YYYYTHH:mm').get('minute'));
    console.log(concert.datetime)
    console.log(completeDate)
    
    if (completeDateMinute.get('minute') > 0 || completeDate.get('hour') < 8 || completeDate.get('hour') > 23) {
        throw new Error("Horário inválido. Os horários de show são horários redondos das 8 hr ás 23 hr. Exemplo: 8:00.");
    }

    const concertData = {
        id: concert.id,
        // datetime: concert.date
        datetime: dayjs(`${concert.date}T${concert.datetime}`, ['DD/MM/YYYYTHH', 'DD/MM/YYYYTHH:mm']).format("YYYY/MM/DDTHH")
    }

    await insertConcert(concertData);
}

export const businessGetConcert = async (
    date: any
): Promise<void> => {
    if (
        !date
    ) {
        throw new Error("Por favor, informe a data do(s) show(s)");
    };

    console.log(date)

    // const formattedDate = dayjs(date, "DD/MM/YYYY").format("YYYY/MM/DD")
    const formattedDate = dayjs(`${date}T00:00`, "DD/MM/YYYYTHH").format("YYYY/MM/DDTHH:mm")
    const nextDate = dayjs(formattedDate).add(1, 'day').format("YYYY/MM/DDTHH:mm")

    console.log(formattedDate)
    console.log(nextDate)
    const concertData = await selectConcert(formattedDate, nextDate);

    return concertData;
}