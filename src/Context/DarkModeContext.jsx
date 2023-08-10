import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const isChecked = () => {
    setDarkMode(!darkMode);
  };

  const data = {
    isChecked,
    darkMode,
  };

  return (
    <DarkModeContext.Provider value={data}>{children}</DarkModeContext.Provider>
  );
};
