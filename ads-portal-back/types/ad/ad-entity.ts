export interface NewAdentity extends Omit<AdEntity, 'id'> {
    id?: string;
}

export interface AdEntity {
    id: string;
    name: string;
    description: string;
    price: number;
    url: string;
    lat: number;
    lon: number;
}
