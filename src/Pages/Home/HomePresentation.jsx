import { PrincipalCard } from "../../Components/Cards";
import { SignNotFound } from "../../Components/Errors";
import { Filters } from "../../Components/Filters/Filters";
import { SignsList } from "../../Containers/SignsList/SignsList";
import SmallCard from "../../Components/Cards/SmallCard/SmallCard";

export const HomePresentation = ({
  sortedSigns,
  setfilterSigns,
  setOrderList,
  orderList,
  error,
}) => (
  <div className=" pt-[70px] sm:pt-[90px] mb-10 h-full w-full flex flex-col justify-center items-center text-center">
    <h1 className="text-pink-400 inline-block mb-10 dark:text-purple-400 ">
      Horóscopo
    </h1>
    <Filters setfilterSigns={setfilterSigns} setOrderList={setOrderList} />
    {error || sortedSigns.length === 0 ? (
      <SignNotFound />
    ) : (
      sortedSigns && (
        <>
          <PrincipalCard
            name={sortedSigns[0]?.name}
            prediction={sortedSigns[0]?.prediction}
            image={sortedSigns[0]?.image}
          />
          <SignsList orderList={orderList} sortedSigns={sortedSigns}>
            <SmallCard />
          </SignsList>
        </>
      )
    )}
  </div>
);
