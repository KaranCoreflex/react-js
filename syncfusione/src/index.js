import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerLicense } from "@syncfusion/ej2-base";

registerLicense("ORg4AjUWIQA/Gnt2VVhhQlFaclhJWHxLfEx0RWFbb1d6d1dMZVpBNQtUQF1hS35XdEBjW35ec3VWT2Be");



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
