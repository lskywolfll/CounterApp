const { getHeroeById } = require("../../base/08-imp-exp");
const { getHeroeByIdAsync } = require("../../base/09-promesas")


describe('Pruebas en 09-promesas', () => {

    test('debe de retornar un heroe async', (done) => {

        const id = 1;

        const heroeValidator = getHeroeById(id);
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroeValidator);
                done();
            })
    });

    test('Debe retornar un error cuando el heroe no existe', (done) => {
        const id = 100;

        getHeroeByIdAsync(id)
            .catch(err => {

                expect(err).toBe("No se pudo encontrar el héroe");
                done();
            })
    });
})
