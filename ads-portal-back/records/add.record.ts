import { AdEntity } from '../types/ad/ad-entity';
import { ValidationError } from '../utils/errors';

interface NewAdentity extends Omit<AdEntity, 'id'> {
    id?: string;
}

export class AdRecord implements AdEntity {
    id: string;
    name: string;
    description: string;
    price: number;
    url: string;
    lat: number;
    lon: number;

    constructor (obj: NewAdentity) {
        if (!obj.name || obj.name.length >100) {
            throw new ValidationError('Nazwa ogłoszenie nie może być pusta ani przekraczać 100 znaków.')
        }

        if(obj.description.length > 1000) {
            throw new ValidationError('opis nie może być dłuższy niz 1000 znaków.')
        }

        if(obj.price < 0 || obj.price > 999999) {
            throw new ValidationError('cena nie może być mniejsza niż 0 lub większa.')
        }

        if (!obj.url || obj.url.length >100) {
            throw new ValidationError('Link ogłoszenia nie może być pusta ani przekraczać 100 znaków.')
        }

        if (typeof obj.lat !== 'number' || typeof obj.lon !== 'number') {
            throw new ValidationError('nie mozna zlokalizować ogłoszenia.')
        }

        this.id = obj.id
        this.name = obj.name
        this.description = obj.description
        this.price = obj.price
        this.url = obj.url
        this.lat = obj.lat
        this.lon = obj.lon
    }
}