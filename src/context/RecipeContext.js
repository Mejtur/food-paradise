import React, { createContext, useState, useEffect } from "react";

export const RecipeContext = createContext();

export const RecipeContextProvider = ({ children }) => {
  const [findIsOpen, setFindIsOpen] = useState(false);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <RecipeContext.Provider
      value={{
        setFindIsOpen,
        findIsOpen,
        sidebarIsOpen,
        user,
        setUser,
        setSidebarIsOpen,
        loginOpen,
        setLoginOpen,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
