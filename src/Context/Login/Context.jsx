import React from 'react';
import { createContext, useReducer } from 'react';
import { reducer } from './Reducer';

export const GlobalContext = createContext();

export default function ContextProvider({ children }) {
  const data = {
    user: { email: '', password: '' },
  };
  const [state, dispatch] = useReducer(reducer, data);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}