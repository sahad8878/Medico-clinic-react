/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useReducer } from 'react';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('clientToken'));
    //  console.log(user,"dfsdf");
    if (user) {
      dispatch({ type: 'LOGIN', payload: user });
    }
  }, []);

  console.log('AuthContext state: ', state);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope, react/jsx-filename-extension
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children}
    </AuthContext.Provider>
  );
}
