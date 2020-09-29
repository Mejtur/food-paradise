import React, { createContext, useState } from "react";

export const RecipeContext = createContext();

export const RecipeContextProvider = ({ children }) => {
  const [findIsOpen, setFindIsOpen] = useState(false);
  return (
    <RecipeContext.Provider value={{ setFindIsOpen, findIsOpen }}>
      {children}
    </RecipeContext.Provider>
  );
};
