import './index.css'

export const SmallCard = ({ name, prediction, image }) => {
  return (
    <div className="container group relative flex cursor-pointer items-start overflow-hidden rounded-lg border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl h-40 w-40 sm:h-28 sm:max-w-[100%] sm:w-[100%] gap-1 ">
        <img
          src={`/${image}`}
          className="h-full w-full lg:w-28 object-cover transition-all duration-300 group-hover:opacity-90"
        />
      <div className="hidden sm:flex h-full flex-col items-start justify-center p-3 overflow-hidden">
        <h3 className="text-xl font-semibold ">{name}</h3>
        <p className="text-sm small-card_prediction">
          {prediction}
        </p>
      </div>
    </div>
  );
};
