import React, { createContext, useContext } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};

export const useGlobal = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
