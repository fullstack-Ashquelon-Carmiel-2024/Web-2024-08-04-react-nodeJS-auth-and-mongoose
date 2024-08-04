import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/icons/projectIcons';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/natalie/projects/bulls-and-cows">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


