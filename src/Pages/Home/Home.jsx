import { useMemo, useState } from "react";

import { BASE_URL, HEADER } from "../../Utils";
import { filterData, sortSign } from "../../helpers";

import useFetch from "../../Hooks/useFetch";

import { Loader } from "../../Components/Loader/Loader";
import { ErrorPage } from "../../Components/Errors/ErrorPage/ErrorPage";
import { HomePresentation } from "./HomePresentation";


export const Home = () => {
  const [filterSigns, setfilterSigns] = useState();
  const [orderList, setOrderList] = useState("grid");

  const { data, error, isLoading } = useFetch(BASE_URL, HEADER);

  const filteredSigns = useMemo(
    () => filterData(data, filterSigns),
    [data, filterSigns]
  );

  const sortedSigns = useMemo(
    () => (filteredSigns ? sortSign(filteredSigns) : null),
    [filteredSigns]
  );

  if (isLoading) return <Loader />;
  if (error) return <ErrorPage />;
  return (
    <HomePresentation
      sortedSigns={sortedSigns}
      setfilterSigns={setfilterSigns}
      setOrderList={setOrderList}
      orderList={orderList}
      error={error}
    />
  );
};
