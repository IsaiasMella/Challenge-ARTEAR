// million-ignore
import { useParams } from "react-router-dom";

import useFetch from "../../Hooks/useFetch";
import { capitalizeFirstLetter } from "../../Utils";
import { SignPagePresentation } from "./SignPagePresentation";

const BASE_URL_SIGN = "http://localhost:3001/zodiac_signs";
const HEADER = {
  headers: {
    Authorization: "qazwsx",
  },
};

const SignPage = () => {
  const { sign } = useParams();

  const signSearch = capitalizeFirstLetter(sign);
  const { data } = useFetch(`${BASE_URL_SIGN}?name=${signSearch}`, HEADER);

  const userSign = data ? data[0] : null;

  return (
    data && (
      <SignPagePresentation
        name={userSign.name}
        image={userSign.image}
        init_date={userSign.init_date}
        end_date={userSign.end_date}
        prediction={userSign.prediction}
      />
    )
  );
};

export default SignPage
