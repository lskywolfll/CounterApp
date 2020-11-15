import { shallow } from 'enzyme';
import React from 'react'
const { default: PrimeraApp } = require("../components/PrimeraApp");

describe('Pruebas en <PrimeraApp/>', () => {
    function getPrimeraApp(saludo, subtitulo) {

        if (subtitulo) {
            return shallow(<PrimeraApp texto={saludo} subtitulo={subtitulo} />);
        } else {
            return shallow(<PrimeraApp texto={saludo} />);
        }

    }

    // test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {

    //     const saludo = "Hola, Soy Goku";

    //     const { getByText } = render(<PrimeraApp texto={saludo} />);

    //     expect(getByText(saludo)).toBeInTheDocument();
    // })

    test('debe de mostrar <PrimeraApp/> correctamente', () => {
        const saludo = "Hola, Soy Goku";
        const wrapper = getPrimeraApp(saludo)

        expect(wrapper).toMatchSnapshot()
    })

    test('debe de mostrar subtitulo enviado por props', () => {
        const saludo = "Hola, Soy Goku";
        const subtitulo = "Soy un subtitulo";
        const wrapper = getPrimeraApp(saludo, subtitulo);

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subtitulo);
    })


})
