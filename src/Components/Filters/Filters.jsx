import { Search } from "../../Images/Icons/Search";
import "./index.css";

export const Filters = ({ setfilterSigns, setOrderList }) => {
  return (
    <header className="flex justify-between w-full lg:w-[90%] xl:w-[80%] mb-4">
      <div className="flex justify-between items-center">
        <p className="text-gray-500">ver como:</p>
        <select
          onChange={(e) => {
            setOrderList(e.target.value);
          }}
          className="viewOptions focus:outline-none border-0 border-b-2 rounded-none border-pink-400 focus:border-purple-400 transition px-4 py-2 ml-4 mb-1"
        >
          <option className="focus:border-none " value="grid">
            Grilla
          </option>
          <option className="focus:border-none " value="list">
            Lista
          </option>
        </select>
      </div>
      <div className="flex justify-between items-center">
        <Search styles={"stroke-gray-400"} />
        <input
          onChange={(e) => setfilterSigns(e.target.value)}
          type="text"
          className="focus:outline-none border-0 border-b-2 rounded-none border-pink-400 focus:border-purple-400 transition px-2 py-1 ml-4 mb-1"
        />
      </div>
    </header>
  );
};
