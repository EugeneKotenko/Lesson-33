import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import App from './app.jsx';
import * as buttonStyles from "./button.module.scss";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);
