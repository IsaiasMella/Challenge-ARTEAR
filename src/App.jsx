import useFetch from "./Hooks/useFetch";

const URL = "http://localhost:3001/zodiac_signs";
const HEADER = {
  headers: {
    Authorization: "qazwsx",
  },
};

function App() {
  const { data } = useFetch(URL, HEADER);

  console.log(data);

  return (
    <>
      <h1 className="text-pink-400 inline-block mb-6">Horóscopo</h1>
    </>
  );
}

export default App;
