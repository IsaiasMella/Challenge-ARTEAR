import { Constelation } from "../../../Images/Icons/Constelation";

export const SignNotFound = () => {
  return (
    <div className="h-full w-full flex flex-col gap-10 justify-center items-center mt-4">
      <Constelation/>
      <p className="">No encontramos su signo, por favor vuelva a intentarlo</p>
    </div>
  );
};
