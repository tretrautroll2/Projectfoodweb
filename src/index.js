import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style-sheet.css';

import { AuthContextProvider } from './components/user-status';
import { CartContextProvider } from './Context';
import { ItemContextProvider } from './components/products-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ItemContextProvider>
    <AuthContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </AuthContextProvider>
    </ItemContextProvider>
  </React.StrictMode>
);

