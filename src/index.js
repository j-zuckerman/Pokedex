import React from 'react';
import ReactDOM from 'react-dom';
import PokedexProvider from './context';
import App from './App';
import './style.css';

ReactDOM.render(
  <React.StrictMode>
    <PokedexProvider>
      <App />
    </PokedexProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
