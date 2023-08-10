export const SignPagePresentation = ({name,image,init_date,end_date,prediction}) => {
  return (
    <div className="mb-10 sm:mb-0 flex flex-col items-center text-center">
      <div className="pt-[70px] sm:pt-[90px] flex gap-6 flex-col-reverse items-center sm:flex-row">
        <img
          className="rounded-xl row-span-2 aspect-square max-h-[120px] max-w-[120px]"
          src={`/${image}`}
          alt={image}
        />
        <div className="text-center">
          <h3 className="text-3xl">Horóscopo de hoy para</h3>
          <h2 className="font-semibold text-6xl">{name}</h2>
        </div>
      </div>
      <div className="mt-6 sm:mt-10  w-[70%] ">
        <small className="text-gray-400 text-xs">
          del {init_date} al {end_date}{" "}
        </small>
        <p>{prediction}</p>
      </div>
    </div>
  );
};
