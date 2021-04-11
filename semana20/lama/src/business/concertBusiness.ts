import dayjs from 'dayjs';
var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

import { insertConcert, insertConcertImage, selectConcert, selectConcertImages } from '../data/concertDatabase';
import { Concert } from './entities/concert';
import { USER_ROLES } from './entities/user';

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

    if (dayjs(concert.date).get('day') > 0 && dayjs(concert.date).get('day') < 6) {
        throw new Error("Dia inválido. Os dias de show são sexta, sábado e domingo.");
    }

    const completeDate = dayjs(`${concert.date}T${concert.datetime}`, ['DD/MM/YYYYTHH', 'DD/MM/YYYYTHH:mm']);
    const completeDateMinute = dayjs(`${concert.date}T${concert.datetime}`, 'DD/MM/YYYYTHH:mm');
    
    if (completeDateMinute.get('minute') > 0 || completeDate.get('hour') < 8 || completeDate.get('hour') > 23) {
        throw new Error("Horário inválido. Os horários de show são horários redondos das 8 hr ás 23 hr. Exemplo: 8:00.");
    }

    const concertData = {
        id: concert.id,
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

    const formattedDate = dayjs(`${date}T00:00`, "DD/MM/YYYYTHH").format("YYYY/MM/DDTHH:mm")
    const nextDate = dayjs(formattedDate).add(1, 'day').format("YYYY/MM/DDTHH:mm")
    const concertData = await selectConcert(formattedDate, nextDate);

    return concertData;
}

export const businessAddConcertImage = async (
    concertImage: any,
    tokenData: any
): Promise<void> => {
    if (
        !concertImage.bandConcertId ||
        !concertImage.photo
    ) {
        throw new Error("Por favor, preencha todos os campos (bandConcertId e photo).");
    };
    
    if (!tokenData) {
        throw new Error("Token inválido");
    }

    if(tokenData.role !== USER_ROLES.ADMIN) {
        throw new Error("Somente administradores podem adicionar imagens");
    }

    await insertConcertImage(concertImage);
}

export const businessGetConcertImage = async (
    id: any,
    tokenData: any
): Promise<void> => {
    if (
        !id
    ) {
        throw new Error("Por favor, preencha o campo id.");
    };
    
    if (!tokenData) {
        throw new Error("Token inválido");
    }

    if (tokenData.role !== USER_ROLES.ADMIN) {
        throw new Error("Apenas administradores podem ver as imagens do evento")
    }
    
    const result = await selectConcertImages(id);

    return result;
}