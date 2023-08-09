import { useContext } from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import { DarkModeContext } from "../../Context/DarkModeContext";

export const MainLayout = ({ children }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`${darkMode ? "dark" : "light"} w-full h-full min-h-screen`}>
      <div className="dark:bg-gray-950 h-full min-h-screen">
        <NavBar />
        <div className="bg-transparent h-full w-[80%] mx-auto flex flex-col items-center ">
          {children}
        </div>
      </div>
    </div>
  );
};
