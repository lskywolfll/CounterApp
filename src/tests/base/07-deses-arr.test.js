const { retornaArreglo } = require("../../base/07-deses-arr")


describe('Pruebas en 07-deses-arr', () => {


    test('retornaArreglo debe retornar un array con un string y numero', () => {
        const array = retornaArreglo();
        const [letras, numeros] = array;
        const expected = ['ABC', 123];

        expect(array).toBeInstanceOf(Array);
        expect(array).toEqual(expect.arrayContaining(expected));

        expect(typeof letras).toBe("string");
        expect(typeof numeros).toBe("number");
    })

})
