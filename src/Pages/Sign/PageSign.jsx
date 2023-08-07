// million-ignore
import { useParams } from "react-router-dom";

import useFetch from "../../Hooks/useFetch";
import { capitalizeFirstLetter } from "../../Utils";

const BASE_URL_SIGN = "http://localhost:3001/zodiac_signs";
const HEADER = {
  headers: {
    Authorization: "qazwsx",
  },
};

export const PageSign = () => {
  const { sign } = useParams();

  const signSearch = capitalizeFirstLetter(sign);
  const { data } = useFetch(`${BASE_URL_SIGN}?name=${signSearch}`, HEADER);

  const userSign = data[0];

  return !data ? <div>no data</div> : (
    <>
      <div className="flex gap-6 flex-col-reverse items-center sm:flex-row">
        <img className="rounded-xl row-span-2 aspect-square max-h-[120px] max-w-[120px]" src={`/${userSign.image}`} alt={userSign.image} />
        <div className="text-center">
          <h3 className="text-3xl" >Horóscopo de hoy para</h3>
          <h2 className="font-semibold text-6xl">{userSign.name}</h2>
        </div>
      </div>
      <div className="mt-10  w-[70%] ">
        <small className="text-gray-400 text-xs">
          del {userSign.init_date} al {data[0].end_date}{" "}
        </small>
        <p>{userSign.prediction}</p>
      </div>
    </>
  );
};
