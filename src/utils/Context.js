import React, { useState } from "react";

// create functional component for context provider and export it
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const APIKEY = '9103665cf0df40789a6d3c1d22e5c69b'
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState("")
  const [newUser, setNewUser] = useState(false);



  // Return Value
  return (
    <Context.Provider
      value={{
        isAuth,
        setIsAuth,
        APIKEY,
        userData,
        setUserData,
        newUser,
        setNewUser
      }}>
      {children}
    </Context.Provider>
  )
}