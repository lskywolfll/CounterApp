import React from 'react'
const { render } = require("@testing-library/react");
const { default: PrimeraApp } = require("../components/PrimeraApp");


describe('Pruebas en <PrimeraApp/>', () => {

    test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {

        const saludo = "Hola, Soy Goku";

        const { getByText } = render(<PrimeraApp texto={saludo} />);

        expect(getByText(saludo)).toBeInTheDocument();
    })
})
