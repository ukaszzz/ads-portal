import { AdRecord } from '../records/add.record';
import { pool } from '../utils/db';
import { AdEntity } from '../types/ad/ad-entity';

afterAll( async () => {
    await pool.end();
})

const defaultObject = {
    name: 'test',
    description: 'test test',
    url: 'http://test.pl',
    price: 0,
    lat: 9,
    lon: 2,
}

test('AdRecord returns data from database for one entry', async () => {
    const ad = await AdRecord.getOne('abc');

    expect(ad).toBeDefined();
    expect(ad.id).toBe('abc')
    expect(ad.name).toBe('test')
})

test('AdRecord returns null from database for unexisting entry', async () => {
    const ad = await AdRecord.getOne('---');

    expect(ad).toBeNull()
})

test('AdRecord returns array of found entries', async () => {
    const ads = await AdRecord.findAll('');

    expect(ads).not.toEqual([]);
    expect(ads[0].id).toBeDefined();
})

test('AdRecord returns array of found entries when search for "test".', async () => {
    const ads = await AdRecord.findAll('test');

    expect(ads).not.toEqual([]);
    expect(ads[0].id).toBeDefined();
})

test('AdRecord returns empty array when searching for something that does not exist', async () => {
    const ads = await AdRecord.findAll('$$$$$$$');

    expect(ads).toEqual([]);
})

test('AdRecord returns part of data', async () => {
    const ads = await AdRecord.findAll('');

    expect((ads[0] as AdEntity).price).toBeUndefined();
})

test('AdRecord returns new UUID', async () => {
    const ad = new AdRecord(defaultObject)
    await ad.insert();

    expect(ad.id).toBeDefined();
})

test('AdRecord insert data to database', async () => {
    const ad = new AdRecord(defaultObject)
    await ad.insert();

    const foundAd = await AdRecord.getOne(ad.id);

    expect(foundAd).toBeDefined();
    expect(foundAd.id).toBe(ad.id);
})