import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const name = "Pety"
const active = []

ReactDOM.render(
  <App name={name} active={active}/>,
  document.getElementById('root')
);

