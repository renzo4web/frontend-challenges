import React, { createContext, useReducer, useContext } from "react";

const Context = createContext();

export function AppStateProvider({ reducer, initialState = {}, children }) {
  const value = useReducer(reducer, initialState);
  // eslint-disable-next-line react/no-children-prop
  return <Context.Provider value={value} children={children} />;
}

export function useAppState() {
  return useContext(Context);
}
