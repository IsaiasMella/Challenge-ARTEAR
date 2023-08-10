import { ErrorCloud } from "../../../Images/Icons/ErrorCloud";

export const ErrorPage = () => {
  return (
    <div className="pt-[70px] sm:pt-[90px] h-full w-full flex flex-col sm:gap-4 justify-center items-center mt-4">
      <ErrorCloud />
      <h3 className="text-center">Hemos tenido unproblema, por favor vuelva a intentarlo mas tarde</h3>
    </div>
  );
};
