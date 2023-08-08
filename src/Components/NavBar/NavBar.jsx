import { Link } from "react-router-dom";

import { Moon } from "../../Images/Icons/Moon";
import { Sun } from "../../Images/Icons/Sun";
import { ZodiacLogo } from "../../Images/Icons/ZodiacLogo";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";

export const NavBar = ({ isChecked, darkMode }) => {
  return (
    <div className="flex justify-between p-4 w-[80%] mx-auto">
      <Link to={"/"} aria-label='redirects to home'>
        <ZodiacLogo darkMode={darkMode} />
      </Link>
      <div className="flex items-center justify-center">
        <Sun darkMode={darkMode} />
        <ToggleSwitch isChecked={isChecked} />
        <Moon darkMode={darkMode} />
      </div>
    </div>
  );
};
