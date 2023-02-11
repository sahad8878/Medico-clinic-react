import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './Context/AuthContext';
import { AdminAuthContextProvider } from './Context/AdminAuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <AdminAuthContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </AdminAuthContextProvider>
  </React.StrictMode>,
);
