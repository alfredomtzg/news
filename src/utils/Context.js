import React, { useState } from "react";

// create functional component for context provider and export it
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)


  // Return Value
  return (
    <Context.Provider
      value={{
        isAuth, setIsAuth
      }}>
      {children}
    </Context.Provider>
  )
}