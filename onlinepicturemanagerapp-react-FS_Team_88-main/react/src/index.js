import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Appbar from './Appbar';

ReactDOM.render(
  <Appbar />,
  document.getElementById('appbar')
);
ReactDOM.render(
    <App />,
  document.getElementById('KIOT'),
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
