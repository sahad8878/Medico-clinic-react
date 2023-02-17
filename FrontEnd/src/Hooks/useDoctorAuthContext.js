import { useContext } from 'react';
import { DoctorAuthContext } from '../Context/DoctorAuthContext';

export const useDoctorAuthContext = () => {
  const context = useContext(DoctorAuthContext);

  if (!context) {
    throw Error('useDoctorAuthContext must be used inside an AuthContextProvider');
  }

  return context;
};
