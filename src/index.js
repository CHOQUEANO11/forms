import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
//import Information from './Information';
//import Potentials from './Potentials'
//import CPO02 from '../src/CPO02'
import MyDocument from './CPO01/pdf'

ReactDOM.render(<MyDocument />, document.getElementById('root'));
 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
