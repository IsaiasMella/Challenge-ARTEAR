import { PrincipalCard } from "../../../Components/Cards";
import { SignsList } from "../../../Containers/SignsList/SignsList";
import SmallCard from "../../../Components/Cards/SmallCard/SmallCard";

export const ContainerSingList = ({ sortedSigns, orderList }) => {
  const { name, prediction, image } = sortedSigns[0] || {};

  return (
    <>
      <PrincipalCard name={name} prediction={prediction} image={image} />
      <SignsList orderList={orderList} sortedSigns={sortedSigns}>
        <SmallCard />
      </SignsList>
    </>
  );
};
