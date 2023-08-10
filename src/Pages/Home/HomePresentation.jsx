import { Filters } from "../../Components/Filters/Filters";
import { SignNotFound } from "../../Components/Errors";
import { ContainerSingList } from "./ContainerSingList/ContainerSingList";

export const HomePresentation = ({
  error,
  orderList,
  sortedSigns,
  setOrderList,
  setfilterSigns,
}) => {
  return (
    <div className="pt-[70px] sm:pt-[90px] mb-10 h-full w-full flex flex-col justify-center items-center text-center">
      <h1 className="text-pink-400 inline-block mb-10 dark:text-purple-400">
        Horóscopo
      </h1>
      <Filters setfilterSigns={setfilterSigns} setOrderList={setOrderList} />
      {error || sortedSigns.length === 0 ? 
        <SignNotFound />
       : 
        <ContainerSingList orderList={orderList} sortedSigns={sortedSigns} />
      }
    </div>
  );
};
