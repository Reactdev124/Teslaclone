import React, { createContext } from "react";
import { useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider
      value={{
        name: ["model s", "model y", "model x", "model 3"],
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalcontext = () => useContext(AppContext);

export { AppProvider, AppContext };
export default useGlobalcontext;
