import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import CounterApp from './CounterApp'

function PrimeraApp({ texto, subtitulo }) {

    const [contador, setContador] = useState(0);

    const aumentarContador = (cantidad) => setContador(contador + cantidad);

    const reset = () => setContador(0);

    const restarCantidad = (cantidad) => setContador(contador - cantidad);

    const numerosGenericosActions = [1, 2, 5];

    const fillIncrements = () => {
        return numerosGenericosActions.map(number => (
            <Fragment key={number}>
                <button onClick={() => aumentarContador(number)} >Agregar +{number}</button><br></br>
            </Fragment>
        ))
    }

    const fillSubstracts = () => {
        return numerosGenericosActions.map(number => (
            <Fragment key={number}>
                <button onClick={() => restarCantidad(number)} >Agregar +{number}</button><br></br>
            </Fragment>
        ))
    }

    return (
        <>
            <h1>{texto}</h1>
            <p>{subtitulo}</p>

            <CounterApp value={contador} />



            {fillIncrements()}
            <button onClick={() => reset()} >Reinicio</button><br></br>
            {fillSubstracts()}
        </>
    )
}

PrimeraApp.propTypes = {
    texto: PropTypes.string.isRequired,
    subtitulo: PropTypes.string,
}

PrimeraApp.defaultProps = {
    subtitulo: "Soy un subtitulo4e"
}

export default PrimeraApp