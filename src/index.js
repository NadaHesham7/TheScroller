import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Scroller from './Scroller';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Scroller />
  </React.StrictMode>
);
