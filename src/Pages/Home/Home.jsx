import { useMemo, useState } from "react";

import useFetch from "../../Hooks/useFetch";
import { sortSign } from "../../Utils";

import { HomePresentation } from "./HomePresentation";

const BASE_URL = "http://localhost:3001/zodiac_signs";
const HEADER = { headers: { Authorization: "qazwsx" } };

export const Home = () => {
  const [filterSigns, setfilterSigns] = useState();
  const [orderList, setOrderList] = useState("grid");

  const { data } = useFetch(BASE_URL, HEADER);

  const filteredSigns = useMemo(() => {
    return filterSigns != null && filterSigns.length > 0
      ? data.filter((sign) =>
          sign?.name.toLowerCase().includes(filterSigns.toLowerCase().trim())
        )
      : data;
  }, [data, filterSigns]);

  const sortedSigns = useMemo(() => sortSign(filteredSigns), [filteredSigns]);

  return (
    <HomePresentation
      sortedSigns={sortedSigns}
      setfilterSigns={setfilterSigns}
      setOrderList={setOrderList}
      orderList={orderList}
    />
  );
};
