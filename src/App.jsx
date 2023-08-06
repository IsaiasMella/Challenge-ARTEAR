import useFetch from "./Hooks/useFetch";

import { PrincipalCard, SmallCard } from "./Components/Cards";
import { SignsList } from "./Components/SignsList/SignsList";

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
      <h1 className="text-pink-400 inline-block mb-16">Horóscopo</h1>
      {data && (
        <PrincipalCard
          name={data[0]?.name}
          prediction={data[0]?.prediction}
          image={data[0]?.image}
        />
      )}
      <SignsList>
        {data &&
          data.map((signo) => (
            <SmallCard
              key={signo.id}
              name={signo.name}
              prediction={signo.prediction}
              image={signo.image}
            />
          ))}
      </SignsList>
      
    </>
  );
}

export default App;
