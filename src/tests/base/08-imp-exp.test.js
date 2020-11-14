const { getHeroeById, getHeroesByOwner } = require("../../base/08-imp-exp");
const { default: heroes } = require("../../data/heroes");


describe('Pruebas en 08-imp-exp', () => {

    test('Debe de retornar un hèroe por id', () => {
        const id = 1;

        const heroe = getHeroeById(id);
        const heroeData = heroes.find(heroe => heroe.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('Debe de retornar undefined si heroe no existe', () => {
        const id = 101;

        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    test('Debe retornar un array con los heroes por owner', () => {

        const owner = "DC";
        const ownerFilter = heroes.filter(owners => owners.owner === owner);
        const ownerData = getHeroesByOwner(owner);

        expect(ownerFilter).toEqual(expect.arrayContaining(ownerData));
    });

    test('Debe retornar un array con los heroes de marvel', () => {

        const owner = "Marvel";
        const ownerData = getHeroesByOwner(owner).length;

        expect(ownerData).toEqual(2);
    });
});
