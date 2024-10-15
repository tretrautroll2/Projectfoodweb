import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style-sheet.css';

import { AuthContextProvider } from './components/user-status';
import { CartContextProvider } from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

