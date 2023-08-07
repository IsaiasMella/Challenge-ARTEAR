import { useMemo, useState } from "react";

import useFetch from "../../Hooks/useFetch";
import { sortSign } from "../../Utils";

import { Filters } from "../../Components/Filters/Filters";
import { SignsList } from "../../Containers/SignsList/SignsList";
import { PrincipalCard, SmallCard } from "../../Components/Cards";

const BASE_URL = "http://localhost:3001/zodiac_signs";
const HEADER = {
  headers: {
    Authorization: "qazwsx",
  },
};

export const Home = () => {
  const { data } = useFetch(BASE_URL, HEADER);
  const [filterSigns, setfilterSigns] = useState();
  const [orderList, setOrderList] = useState("grid");

  const filteredSigns = useMemo(() => {
    return filterSigns != null && filterSigns.length > 0
      ? data.filter((sign) =>
          sign?.name.toLowerCase().includes(filterSigns.toLowerCase().trim())
        )
      : data;
  }, [data, filterSigns]);

  const sortedSigns = useMemo(() => sortSign(filteredSigns), [filteredSigns]);
  return (
    <>
      <h1 className="text-pink-400 inline-block mb-16">Horóscopo</h1>
      <Filters setfilterSigns={setfilterSigns} setOrderList={setOrderList} />
      {sortedSigns && (
        <PrincipalCard
          name={sortedSigns[0]?.name}
          prediction={sortedSigns[0]?.prediction}
          image={sortedSigns[0]?.image}
        />
      )}
      <SignsList orderList={orderList}>
        {sortedSigns &&
          sortedSigns.map((signo) => {
            if (sortedSigns[0]?.name === signo?.name) return;
            return (
              <SmallCard
                key={signo.id}
                name={signo.name}
                prediction={signo.prediction}
                image={signo.image}
              />
            );
          })}
      </SignsList>
    </>
  );
};
