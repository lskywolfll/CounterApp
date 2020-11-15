import React from 'react'
import PropTypes from 'prop-types'

function PrimeraApp({ texto, subtitulo }) {

    return (
        <>
            <h1>{texto}</h1>
            <p>{subtitulo}</p>
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