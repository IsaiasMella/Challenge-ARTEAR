import { useState } from "react";
import { NavBar } from "../../Components/NavBar/NavBar";

export const MainLayout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const isChecked = () => {
    setDarkMode(!darkMode)
  };

  return (
    <div className={`${darkMode ? "dark" : "light"} w-full`}>
      <div className="dark:bg-gray-950">
        <NavBar isChecked={isChecked} darkMode={darkMode} />
        <div className=" bg-transparent h-full min-h-screen w-[80%] mx-auto flex flex-col items-center py-14 ">
          {children}
        </div>
      </div>
    </div>
  );
};
