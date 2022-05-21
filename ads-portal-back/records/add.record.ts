import { AdEntity, NewAdentity, SimpleAdEntity } from '../types/ad/ad-entity';
import { ValidationError } from '../utils/errors';
import { pool } from '../utils/db';
import { FieldPacket } from 'mysql2';
import {v4 as uuid} from 'uuid'

type AdRecordResult = [AdEntity[], FieldPacket[]]

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

    static async getOne(id: string): Promise<AdRecord | null> {
       const [result] = await pool.execute("SELECT * FROM `ads` WHERE id = :id", {
            id,
        }) as AdRecordResult;

       return result.length === 0 ? null : new AdRecord(result[0]);
    }

    static async findAll(name:string): Promise<SimpleAdEntity[]> {
        const [results] = await pool.execute("SELECT * FROM `ads` WHERE `name` LIKE :search", {
            search: `%${name}%`,
        }) as AdRecordResult;

        return results.map(result => {
            const { id, lat, lon} = result;
            return { id, lat, lon}
        });
    }

    async insert(): Promise<void> {
        if (!this.id) {
            this.id = uuid()
        } else {
            throw new Error('Nie mozna dodać drugi raz tego samego')
        }

        await pool.execute("INSERT INTO `ads`(`id`,`name`,`description`,`price`,`url`,`lat`,`lon`) VALUES(:id,:name,:description,:price,:url,:lat,:lon)", this)
    }
}