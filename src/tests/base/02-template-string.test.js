const { getSaludo } = require("../../base/02-template-string");

describe('Pruebas en el template-string.test.js', () => {

    test('getSaludo debe de retornar Hola rene', () => {
        const nombre = "rene";
        const saludo = getSaludo(nombre);
        const saludoSinNombre = getSaludo();

        expect(saludo).toBe(`Hola ${nombre}`);

        expect(saludoSinNombre).toBe(`Hola Carlos`);
    })

    test('getSaludo sin enviar nombre debe de retornar Hola Carlos', () => {
        const saludo = getSaludo();

        expect(saludo).toBe(`Hola Carlos`);
    })

})