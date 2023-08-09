import { useContext } from "react";
import { DarkModeContext } from "../../Context/DarkModeContext";

export const ToggleSwitch = () => {
  const { isChecked } = useContext(DarkModeContext);

  return (
    <label className="cursor-pointer relative flex justify-between items-center group mr-2 ml-1">
      <input
        type="checkbox"
        aria-label="Toggle Option"
        className="absolute cursor-pointer left-1/2 -translate-x-1/2 w-1/2 h-1/2 peer appearance-none rounded-md"
        onClick={() => isChecked()}
      />
      <span className="w-8 h-5 flex items-center flex-shrink-0 ml-2 p-0.5 bg-pink-400 rounded-full duration-300 ease-in-out peer-checked:bg-purple-400 after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-3 " />
    </label>
  );
};
