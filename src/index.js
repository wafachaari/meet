import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as atatus from 'atatus-spa';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
 
serviceWorkerRegistration.register();
atatus.config('91a8c0ac5b654dccb52228101a4bed74').install();
 