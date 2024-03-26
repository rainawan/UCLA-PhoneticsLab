import Text from "../components/Text";
import MyFairLady from "../../public/myfairlady4.jpg";
import { Divider } from "@nextui-org/react";

const HomePage = () => {
  return (
    <div>
      <div className="px-10 flex flex-col items-center justify-center">
        <Text h2 className="font-bold text-blue">
          UCLA Phonetics Lab
        </Text>
        <img src={MyFairLady} alt="my_fair_lady" className="pt-5 shadow-2xl" />
        <h6 className="pt-5 px-30 text-center italic text-blue">
          Peter Ladefoged teaching Rex Harrison (Professor Higgins) and Wilfred
          Hyde White (Colonel Pickering) about Sweet's vowel symbols on the set
          of My Fair Lady. George Cukor (the director) is on the right.
        </h6>
      </div>
      <Divider className="my-4 w-2/3 mx-auto border-t-2 border-gray-400" />
      <div className="lg:col-span-12">
        <div className="block text-lg px-35">
          <div className="p-3">
            The UCLA Phonetics Laboratory was established by Peter Ladefoged in
            the English Department in Fall 1962 and moved with him to the new
            Linguistics Department in 1966. Members of the lab include faculty,
            postdocs, graduate students, staff, and visiting scholars in
            Linguistics. In our research we document sounds from a range of
            languages, and describe the behavior of a language's sounds as part
            of a linguistic system. The UCLA Linguistics Department is
            well-known for the close cooperation between its phonetics and
            phonology programs.
          </div>
          <div className="p-3">
            The lab maintains facilities for teaching and research in adult and
            infant speech production, acoustics, and perception. Descriptions of
            our current facilities, and information about how to use them, are
            in the Facilities section of this site, while some illustrative data
            are posted under Demos. Dissertation and grant projects are listed
            under Research Projects. Current and past members of the lab, and
            local colleagues with whom we collaborate, are listed under People.
          </div>
          <div className="p-3">
            This archive consists of thousands of recordings of hundreds of
            speakers, some of which are acknowledged in full, others in part
            (with their first name) and still others who did not wish to be
            acknowledged. When available, these acknowledgements can be found
            under "Recording Details".
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
