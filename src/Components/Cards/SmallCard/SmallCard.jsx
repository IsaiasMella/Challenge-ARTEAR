import { Link } from "react-router-dom";
import "./index.css";

const SmallCard = ({ name, prediction, image}) => {
  return (
    <Link to={`/sign/${name.toLowerCase()}`}>
      <div className="container group relative sm:grid sm:grid-rows-4 sm:grid-cols-3 sm:p-4 sm:place-items-center cursor-pointer items-start overflow-hidden rounded-lg border border-slate-100 shadow-sm hover:shadow-xl h-40 w-40 sm:h-44 sm:w-[100%] gap-3 dark:border-none dark:bg-gray-900 ">
        <h3 className="hidden sm:flex text-xl font-semibold ">{name}</h3>
        <div className="hidden overflow-hidden sm:col-span-2 sm:row-span-4 h-full w-full sm:flex p-3">
          <p className=" small-card_prediction hidden sm:inline-block sm:text-sm dark:text-slate-400">
            {prediction}
          </p>
        </div>
        <img
          src={`/${image}`}
          alt={`imagen de ${name}`}
          className="row-span-3 sm:self-start lg:self-center md:col-span-1 rounded-lg md:h-16 sm:h-20 lg:w-28 lg:h-full object-cover group-hover:opacity-90"
        />
      </div>
    </Link>
  );
};

export default SmallCard
