import { cloneElement } from "react";

const listView = {
  grid: "overflow-hidden grid grid-cols-2 place-items-center",
  list: "flex flex-col justify-center align-middle",
};

export const SignsList = ({ children, orderList, sortedSigns }) => {
  return (
    <div
      className={`${ orderList === "grid" ? listView.grid : listView.list } mt-8 gap-2 w-full md:w-[90%] xl:w-[80%] `}
    >
      {sortedSigns &&
        sortedSigns.map((signo) => {
          if (sortedSigns[0]?.name === signo?.name) return;

          return cloneElement(children, {
            key: signo.id,
            name: signo.name,
            prediction: signo.prediction,
            image: signo.image,
          });
        })}
    </div>
  );
};
