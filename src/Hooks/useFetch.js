import { useState, useEffect } from "react";

const useFetch = (url, headers) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getFetch = async (url, headers) => {
    fetch(url, headers )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    setIsLoading(true);
    getFetch(url, headers);
  }, [url, headers]);

  return { data, isLoading };
};

export default useFetch;
