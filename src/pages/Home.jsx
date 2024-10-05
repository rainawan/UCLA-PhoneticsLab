import Text from "../components/Text";
import MyFairLady from "../../public/myfairlady4.jpg";
import { Divider } from "@nextui-org/react";

const HomePage = () => {
  return (
    <div className="bg-white">
      <div className="py-10 px-10 flex flex-col items-center justify-center">
        <Text h2 className="font-bold text-darkblue">
          UCLA Phonetics Lab
        </Text>
        <img src={MyFairLady} alt="my_fair_lady" className="pt-5 shadow-2xl" />
        <h6 className="pt-10 px-20 sm:px-30 lg:px-40 text-center italic text-darkblue">
          Peter Ladefoged teaching Rex Harrison (Professor Higgins) and Wilfred
          Hyde White (Colonel Pickering) about Sweet's vowel symbols on the set
          of My Fair Lady. George Cukor (the director) is on the right.
        </h6>
      </div>
      <Divider className="my-4 w-2/3 mx-auto border-t-2 border-gray-400" />
      <div class="px-10 lg:px-40 py-10">
        <div className="block text-left text-lg px-35">
          <div className="p-3">
            The UCLA Phonetics Laboratory was established by Peter Ladefoged in
            the English Department in Fall 1962 and moved with him to the new
            Linguistics Department in 1966. The lab was directed by Peter
            Ladefoged until his retirement in 1991, then by Pat Keating until
            her retirement in 2022. The current Director of the Phonetics Lab is
            Sun-Ah Jun. Members of the lab include faculty, postdocs, graduate
            students, staff, and visiting scholars in Linguistics. In our
            research we document segments and prosody of a range of languages
            and describe their patterns as part of a linguistic system through
            the production and perception of adult native speakers. We also
            study how infants and children learn to perceive and produce the
            sounds of their native language(s). The UCLA Linguistics Department
            is well-known for the close cooperation between its phonetics and
            phonology programs.
          </div>
          <div className="p-3">
            The lab maintains facilities for teaching and research in adult and
            infant speech production and perception. Descriptions of our current
            facilities, and information about how to use them, are in the
            Resources section of this site, while courses and materials on
            phonetics are listed under Teaching, and grant projects and working
            paper information are listed under Research. Current and past
            members of the lab, and local colleagues with whom we collaborate,
            are listed under People. The UCLA Phonetics Lab has two sub-labs,
            Language Acquisition “Infant” Lab, and SPOG team (Speech and
            Cognitive Development).
          </div>
          <div className="p-3">
            The UCLA Phonetics Lab holds valuable databases, which you can
            access under Resources. UCLA Phonetics Lab Data (formerly Sounds of
            the World’s Languages) are organized for teaching, and UCLA
            Phonetics Lab Archive includes raw data files consisting of
            thousands of recordings of hundreds of speakers, some of which are
            acknowledged in full, others in part (with their first name) and
            still others who did not wish to be acknowledged. When available,
            these acknowledgements can be found under "Recording Details". UPSID
            (UCLA Phonological Segment Inventory Database) holds data from 451
            languages, and finally, the Linguistic Voice Quality project archive
            includes audio and EGG recordings and spreadsheets of measurements
            on nine languages.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
