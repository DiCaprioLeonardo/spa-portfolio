import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Уберите BrowserRouter отсюда

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {}
  </React.StrictMode>
);