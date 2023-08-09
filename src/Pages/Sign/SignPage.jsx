// million-ignore
import { useParams } from "react-router-dom";

import useFetch from "../../Hooks/useFetch";
import { BASE_URL, HEADER, capitalizeFirstLetter } from "../../Utils";
import { SignPagePresentation } from "./SignPagePresentation";

const SignPage = () => {
  const { sign } = useParams();

  const signSearch = capitalizeFirstLetter(sign);
  const { data } = useFetch(`${BASE_URL}?name=${signSearch}`, HEADER);

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
