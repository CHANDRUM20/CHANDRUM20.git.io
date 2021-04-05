import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Appbar from './Appbar';
import 'bootstrap/dist/css/bootstrap.css'
import './css/App.css';

ReactDOM.render(
  <Appbar />,
  document.getElementById('appbar')
);
ReactDOM.render(
    <App />,
  document.getElementById('root')
);


reportWebVitals();
