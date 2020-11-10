import React, { useState } from "react";

// create functional component for context provider and export it
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const APIKEY = 'c2ecb11b02de4bffb9d3b2b679a51f72'
  const [isAuth, setIsAuth] = useState(false);



  // Return Value
  return (
    <Context.Provider
      value={{
        isAuth, setIsAuth,
        APIKEY
      }}>
      {children}
    </Context.Provider>
  )
}