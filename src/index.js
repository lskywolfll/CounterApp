
import React from 'react'
import ReactDOM from 'react-dom'
import PrimeraApp from './components/PrimeraApp';

import './styles/global.css';

const divRoot = document.querySelector('#root');

ReactDOM.render(<PrimeraApp texto="Hola, Soy Goku" />, divRoot)