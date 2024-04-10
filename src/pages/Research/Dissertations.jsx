import Text from "../../components/Text";
import { Link } from "@nextui-org/react";

const Dissertations = () => {
  return (
    <div className="px-20 md:px-40 lg:px-40 py-20 bg-white">
      <Text h2 className="font-bold text-darkblue pb-10">
        Dissertations
      </Text>
      <p>
        Until about 1995, dissertations from the Phonetics Lab were published in
        the&nbsp;
        <Link
          isExternal
          href="http://phonetics.linguistics.ucla.edu/workpapph/wpp.htm"
          underline="hover"
          color="danger"
        >
          working papers
        </Link>
        &nbsp;in phonetics series (the last was Hagiwara 1995, which was WPP
        #90). These dissertations are available online as part of the online
        version of WPP. The Linguistics Department website provides an almost
        complete list of students'&nbsp;
        <Link
          href="https://linguistics.ucla.edu/research/"
          underline="hover"
          color="danger"
        >
          dissertations
        </Link>
        , as well as some&nbsp;
        <Link
          href="https://linguistics.ucla.edu/research/masters-theses/"
          underline="hover"
          color="danger"
        >
          master theses
        </Link>
        .
      </p>
    </div>
  );
};

export default Dissertations;
