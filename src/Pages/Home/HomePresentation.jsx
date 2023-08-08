import { PrincipalCard } from "../../Components/Cards";
import SmallCard from "../../Components/Cards/SmallCard/SmallCard";
import { Filters } from "../../Components/Filters/Filters";
import { SignsList } from "../../Containers/SignsList/SignsList";

export const HomePresentation = ({ sortedSigns, setfilterSigns, setOrderList, orderList }) => (
  <>
    <h1 className="text-pink-400 inline-block mb-16 dark:text-purple-400">Horóscopo</h1>
    <Filters setfilterSigns={setfilterSigns} setOrderList={setOrderList} />
    {sortedSigns && (
      <PrincipalCard
        name={sortedSigns[0]?.name}
        prediction={sortedSigns[0]?.prediction}
        image={sortedSigns[0]?.image}
      />
    )}
    <SignsList orderList={orderList} sortedSigns={sortedSigns}>
      <SmallCard />
    </SignsList>
  </>
);
