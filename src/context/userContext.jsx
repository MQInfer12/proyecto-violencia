import React, { createContext, useContext, useState } from 'react'

export const NameContext = createContext(null);

export const useUserContext = () => {
  const context = useContext(NameContext);
  if (!context) {
    throw new Error(
      "this contexts must be used whitin a UserContextProvider"
    );
  }
  return context;
}

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <NameContext.Provider value={{user, setUser}}>
      { children }
    </NameContext.Provider>
  )
}