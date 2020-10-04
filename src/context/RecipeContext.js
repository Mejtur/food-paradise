import React, { createContext, useState } from "react";

export const RecipeContext = createContext();

export const RecipeContextProvider = ({ children }) => {
  const [findIsOpen, setFindIsOpen] = useState(false);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [user, setUser] = useState("");

  return (
    <RecipeContext.Provider
      value={{
        setFindIsOpen,
        findIsOpen,
        sidebarIsOpen,
        setSidebarIsOpen,
        loginOpen,
        setLoginOpen,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
