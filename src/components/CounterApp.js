
import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

function CounterApp({ value }) {

    const [contador, setContador] = useState(value);

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
                <button onClick={() => restarCantidad(number)} >Disminuir -{number}</button><br></br>
            </Fragment>
        ))
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {contador} </h2>

            {fillIncrements()}
            <button onClick={() => reset()} >Reinicio</button><br></br>
            {fillSubstracts()}
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 100
}

export default CounterApp

