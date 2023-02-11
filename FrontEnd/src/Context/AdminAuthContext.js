/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useReducer } from 'react';

export const AdminAuthContext = createContext();

export const adminAuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { admin: action.payload };
    case 'LOGOUT':
      return { admin: null };
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export function AdminAuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(adminAuthReducer, { admin: null });

  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem('AdminToken'));
    //  console.log(admin,"dfsdf");
    if (admin) {
      dispatch({ type: 'LOGIN', payload: admin });
    }
  }, []);

  console.log('AdminAuthContext state: ', state);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope, react/jsx-filename-extension
    <AdminAuthContext.Provider value={{ ...state, dispatch }}>
      { children}
    </AdminAuthContext.Provider>
  );
}
