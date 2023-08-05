import { useEffect } from "react";
import useFetch from "./Hooks/useFetch";

const URL = "http://localhost:3001/zodiac_signs";
const HEADER = {
  headers: {
    Authorization: "qazwsx",
  },
};

function App() {
  const { data, isLoading } = useFetch(URL, HEADER);

  console.log(data);

  return (
    <>
      <h1>ARRANCAMOS!</h1>
    </>
  );
}

export default App;
