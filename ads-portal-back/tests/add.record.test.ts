import { AdRecord } from '../records/add.record';

const defaultObject = {
    name: 'test',
    description: 'test test',
    url: 'http://test.pl',
    price: 0,
    lat: 9,
    lon: 2,
}

test('Can build AdRecord', ()=>{
    const ad = new AdRecord({
        ...defaultObject
    })

    expect(ad.name).toBe('test');
});

test('Validates invalid price', ()=>{
    expect(() => {new AdRecord({
        ...defaultObject,
        price: -3
    })}).toThrow('cena nie może być mniejsza niż 0 lub większa.')
})