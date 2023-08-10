import { Link } from "react-router-dom";

import { Moon } from "../../Images/Icons/Moon";
import { Sun } from "../../Images/Icons/Sun";
import { ZodiacLogo } from "../../Images/Icons/ZodiacLogo";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";

export const NavBar = () => {
  return (
    <div className="flex justify-center w-full mx-auto absolute top-0 left-0">
      <div className="flex justify-between py-2 sm:p-4 w-[80%]">
        <Link to={"/"} aria-label="redirects to home">
          <ZodiacLogo />
        </Link>
        <div className="flex items-center justify-center">
          <Sun />
          <ToggleSwitch />
          <Moon />
        </div>
      </div>
    </div>
  );
};
