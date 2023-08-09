import { useState, useEffect } from "react";

const useFetch = (url, headers) => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getFetch = async (url, headers) => {
    fetch(url, headers)
      .then((response) => {
        if (!response.ok) {
          setError(true);
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((err) => {
        setError(true);
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    setIsLoading(true);
    getFetch(url, headers);
  }, [url, headers]);

  return { data, isLoading, error };
};

export default useFetch;
