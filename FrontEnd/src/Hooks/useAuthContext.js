/* eslint-disable import/prefer-default-export */
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error('useAuthContext must be used inside an AuthContextProvider');
  }

  return context;
};
