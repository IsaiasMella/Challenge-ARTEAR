const listView = {
  grid: "grid grid-cols-2 place-items-center",
  list: "flex flex-col justify-center align-middle",
};

export const SignsList = ({ children, orderList }) => {
  return (
    <div
      className={`${
        orderList === "grid" ? listView.grid : listView.list
      } mt-8 gap-4 w-full md:w-[90%] xl:w-[80%] `}
    >
      {children}
    </div>
  );
};
