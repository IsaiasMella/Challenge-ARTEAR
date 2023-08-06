import { memo } from 'react';
import './index.css'

const PrincipalCard = ({name, prediction,image}) => {
  return (
    <div className={`container group relative flex cursor-pointer items-start overflow-hidden rounded-lg border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl h-40 gap-1 sm:h-44 md:h-48 w-full lg:w-[90%] xl:w-[80%] sm:gap-2 `}>
      <img
        src={`/${image}`}
        className="h-full object-cover transition-all duration-300 group-hover:opacity-90"
      />
      <div className="flex h-full flex-col items-start justify-center p-3 overflow-hidden">
        <h2 className="text-2xl font-semibold ">{name}</h2>
        <p className="text-base overflow-hidden principal-card_prediction">
         {prediction}
        </p>
      </div>
    </div>
  );
};

export default memo(PrincipalCard)