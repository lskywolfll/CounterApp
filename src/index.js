
import React from 'react'
import ReactDOM from 'react-dom'
import CounterApp from './components/CounterApp';
import PrimeraApp from './components/PrimeraApp';

import './styles/global.css';

const divRoot = document.querySelector('#root');

ReactDOM.render(<CounterApp />, divRoot)