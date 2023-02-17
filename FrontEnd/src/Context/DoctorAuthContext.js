import { createContext, useEffect, useReducer } from 'react';

export const DoctorAuthContext = createContext();

export const doctorAuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { doctor: action.payload };
    case 'LOGOUT':
      return { doctor: null };
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export function DoctorAuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(doctorAuthReducer, { doctor: null });

  useEffect(() => {
    const doctor = JSON.parse(localStorage.getItem('doctorToken'));
    //  console.log(user,"dfsdf");
    if (doctor) {
      dispatch({ type: 'LOGIN', payload: doctor });
    }
  }, []);

  console.log('DoctorAuthContext state: ', state);

  return (
    <DoctorAuthContext.Provider value={{ ...state, dispatch }}>
      { children}
    </DoctorAuthContext.Provider>
  );
}
