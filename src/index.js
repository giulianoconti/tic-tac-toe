import React from 'react';
import ReactDOM from 'react-dom';
import { TicTacToe } from './components/TicTacToe';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <TicTacToe />
  </React.StrictMode>,
  document.getElementById('root')
);