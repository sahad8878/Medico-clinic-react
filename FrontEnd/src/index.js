import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './Context/AuthContext';
import { AdminAuthContextProvider } from './Context/AdminAuthContext';
import { DoctorAuthContextProvider } from './Context/DoctorAuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AdminAuthContextProvider>
      <DoctorAuthContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
      </DoctorAuthContextProvider>
    </AdminAuthContextProvider>
  </React.StrictMode>,
);
