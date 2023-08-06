export const SignsList = ({ children }) => {
  //grid grid-cols-2 place-items-center
  //flex flex-col justify-center align-middle
  return (
    <div className={`grid grid-cols-2 place-items-center mt-8 gap-4 w-full md:w-[90%] xl:w-[80%]`}>
      {children}
    </div>
  );
};
