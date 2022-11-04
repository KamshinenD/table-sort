import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SortContextProvider } from './store/sortContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SortContextProvider>
    <App />
  </SortContextProvider>
);