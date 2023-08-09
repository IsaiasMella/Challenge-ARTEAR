import { useMemo, useState } from "react";

import useFetch from "../../Hooks/useFetch";
import { BASE_URL, HEADER, sortSign } from "../../Utils";

import { HomePresentation } from "./HomePresentation";
import { ErrorPage } from "../../Components/Errors/ErrorPage/ErrorPage";

export const Home = () => {
  const [filterSigns, setfilterSigns] = useState();
  const [orderList, setOrderList] = useState("grid");

  const { data, error, isLoading } = useFetch(BASE_URL, HEADER);

  const filteredSigns = useMemo(() => {
    if (!Array.isArray(data) || data.length === 0) return [];

    return filterSigns != null && filterSigns.length > 0
      ? data.filter((sign) =>
          sign?.name.toLowerCase().includes(filterSigns.toLowerCase().trim())
        )
      : data;
  }, [data, filterSigns]);

  const sortedSigns = useMemo(
    () => (filteredSigns ? sortSign(filteredSigns) : null),
    [filteredSigns]
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <ErrorPage />;
  }

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
