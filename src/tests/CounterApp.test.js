import { shallow } from 'enzyme';
import React from 'react'
import CounterApp from '../components/CounterApp';

describe('Pruebas en <CounterApp />', () => {

    function getCounterApp(valor) {
        if (valor) {
            return shallow(<CounterApp value={valor} />);
        } else {
            return shallow(<CounterApp />);
        }
    }

    function getCounterValueOfWrap(wrapper) {
        return parseInt(wrapper.find('h2').text().trim());
    }

    test('debe de mostrar el estado por defecto', () => {

        const wrapper = getCounterApp();

        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar el valor por defecto de 100', () => {
        const wrapper = getCounterApp();
        const contador = getCounterValueOfWrap(wrapper);

        expect(contador).toBe(100);
    })

    test('debe de mostrar el valor enviado', () => {
        const valor = 20;
        const wrapper = getCounterApp(valor);
        const contador = getCounterValueOfWrap(wrapper);

        expect(contador).toBe(valor);
    })

    test('debe incrementar el contador en 1 al hacer click en el boton +1', () => {
        const wrapper = getCounterApp();
        const contadorActual = getCounterValueOfWrap(wrapper);
        wrapper.find('button').at(0).simulate('click')
        const contadorNuevo = getCounterValueOfWrap(wrapper);

        expect(contadorNuevo).toBe(contadorActual + 1);
    })

    test('debe decrementar el contador en 1 al hacer click en el boton -1', () => {
        const wrapper = getCounterApp();
        const contadorActual = getCounterValueOfWrap(wrapper);
        wrapper.find('button').at(4).simulate('click')
        const contadorNuevo = getCounterValueOfWrap(wrapper);

        expect(contadorNuevo).toBe(contadorActual - 1);
    })


    test('debe reiniciar el contador a 0 al hacer click', () => {
        const wrapper = getCounterApp();
        wrapper.find('button').at(3).simulate('click')
        const contadorActual = getCounterValueOfWrap(wrapper);

        expect(contadorActual).toBe(0);
    })

})
