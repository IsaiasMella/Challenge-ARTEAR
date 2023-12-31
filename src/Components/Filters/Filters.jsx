import { Search } from "../../Images/Icons/Search";
import "./index.css";

export const Filters = ({ setfilterSigns, setOrderList }) => {
  return (
    <header className="flex flex-col justify-between w-full lg:w-[90%] xl:w-[80%] mb-4 sm:flex-row">
      <div className="flex flex-col justify-between items-center sm:flex-row">
        <p className="text-gray-500">ver como:</p>
        <select
          onChange={(e) => {
            setOrderList(e.target.value);
          }}
          className="viewOptions focus:outline-none border-pink-400 border-0 border-b-2 rounded-none focus:border-purple-400 px-4 py-2 sm:ml-4 mb-1 dark:bg-transparent dark:border-purple-400 dark:focus:border-pink-400"
        >
          <option className="rounded-none dark:bg-gray-700 " value="grid">
            Grilla
          </option>
          <option className="rounded-none dark:bg-gray-700 " value="list">
            Lista
          </option>
        </select>
      </div>
      <div className="relative flex justify-center items-center sm:justify-between ">
        <Search />
        <input
          onChange={(e) => setfilterSigns(e.target.value)}
          type="text"
          aria-label="Search Sign"
          className="w-[80%] sm:w-full bg-transparent focus:outline-none border-0 border-b-2 rounded-none border-pink-400 focus:border-purple-400 transition pl-9 sm:px-2 py-1 sm:ml-1 mb-1 dark:bg-transparent dark:border-purple-400 dark:focus:border-pink-400"
        />
      </div>
    </header>
  );
};
