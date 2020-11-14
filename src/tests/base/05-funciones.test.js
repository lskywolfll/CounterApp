const { getUser, getUsuarioActivo } = require("../../base/05-funciones")


describe('Pruebas en 05-funciones', () => {

    test('getUser Debe de retornar un objeto', () => {
        const usuarioTest = {
            uid: "ABC123",
            username: "El_Papi1502"
        };

        const user = getUser();

        expect(user).toEqual(usuarioTest);
    })

    test('getUsuarioActivo debe retornar un objecto con el nombre pasado', () => {

        const nombre = "Rene";
        const { username } = getUsuarioActivo(nombre);

        expect(username).toBe(nombre);
    });

})
