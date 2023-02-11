/* eslint-disable import/prefer-default-export */
import { useContext } from 'react';
import { AdminAuthContext } from '../Context/AdminAuthContext';

export const useAdminAuthContext = () => {
  const context = useContext(AdminAuthContext);

  if (!context) {
    throw Error('useAdminAuthContext must be used inside an AuthContextProvider');
  }

  return context;
};
