import Text from "../../../../components/Text";
import CustomLink from "../../../../components/CustomLink";

import { Link, Divider } from "@nextui-org/react";

const AllPhoneticsCourses = () => {
  return (
    <div>
      <Text pbold className="text-left">
        All Phonetics Courses
      </Text>
      <ul className="px-10 list-disc list-outside ">
        <li>
          {" "}
          <CustomLink href="https://scripts.sil.org/cms/scripts/page.php?id=fontdownloads&site_id=nrsi">
            SIL phonetic fonts download page
          </CustomLink>{" "}
          (Unicode{" "}
          <CustomLink href="https://software.sil.org/gentium/">
            {" "}
            Gentium,
          </CustomLink>{" "}
          <CustomLink href="https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=encore-ipa">
            Encore IPA93,
          </CustomLink>{" "}
          unicode DuolosSIL)
        </li>
        <li>
          <CustomLink href="https://www.library.ucla.edu/about/programs/campus-library-instructional-computing-commons-clicc/">
            CLICC
          </CustomLink>{" "}
          in Powell Library (location, lab hours, classrooms, software, etc.);{" "}
          CDH lab classroom in Rolfe
        </li>
        <li>
          Anatomical models (larynx, auditory system, brain) are in the cabinet
          in the lab kitchen
        </li>
        <li>
          <CustomLink href="https://phonetics.linguistics.ucla.edu/facilities/databases/Videos.html">
            Videos etc. in phonetics lab.
          </CustomLink>{" "}
          Note that many of these have been digitized, and are on the hard drive
          in the cabinet. Some are also{" "}
          <CustomLink href="https://phonetics.linguistics.ucla.edu/facilities/physiology/physiologyfilms.html">
            online
          </CustomLink>
        </li>
        <li>
          Link to the{" "}
          <CustomLink href="https://media.dymaxion.ca/display/214/wwk770">
            UCLA Instructional Media Library on-line catalog
          </CustomLink>{" "}
          (for films, videos, DVDs) (individual items listed below by course,
          but cannot be linked individually)
        </li>
      </ul>
    </div>
  );
};

export default AllPhoneticsCourses;
