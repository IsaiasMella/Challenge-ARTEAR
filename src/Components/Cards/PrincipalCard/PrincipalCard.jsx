import { memo } from "react";

import { Link } from "react-router-dom";

import "./index.css";

const PrincipalCard = ({ name, prediction, image }) => {
  return (
    <Link className="w-full flex justify-center" to={`/sign/${name.toLowerCase()}`}>
      <div
        className={`container group p-4 cursor-pointer flex flex-col items-center sm:flex-row sm:items-start overflow-hidden rounded-lg border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl gap-1 sm:h-44 md:h-48 w-full lg:w-[90%] xl:w-[80%] sm:gap-2 dark:border-none dark:bg-gray-900 `}
      >
        <img
          src={`/${image}`}
          alt={`imagen de ${name}`}
          className="rounded-lg h-full object-cover transition-all duration-300 group-hover:opacity-90 "
        />
        <div className="flex text-center sm:text-start h-full flex-col items-center gap-2 sm:gap-0 sm:items-start justify-center p-3 pb-0 sm:pb-3 overflow-hidden sm:p-2">
          <h2 className="text-2xl font-semibold ">{name}</h2>
          <p className="text-base overflow-hidden principal-card_prediction ">
            {prediction}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default memo(PrincipalCard);
