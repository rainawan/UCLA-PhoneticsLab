import Text from "../../../components/Text";
import { Link, Divider } from "@nextui-org/react";
import AllPhoneticsCourses from "./IndividualCourses/AllPhoneticsCourses";
import Ling102 from "./IndividualCourses/Ling102";
import Ling103 from "./IndividualCourses/Ling103";
import Ling104 from "./IndividualCourses/Ling104";
import Ling111 from "./IndividualCourses/Ling111";
import Ling422 from "./IndividualCourses/Ling422";
import Ling204b from "./IndividualCourses/Ling204b";
import HC16 from "./IndividualCourses/HC16";
const InstructionalMaterials = () => {
  return (
    <div>
      <Text h3 className="py-10 text-left">
        Instructional Materials
      </Text>
      <AllPhoneticsCourses></AllPhoneticsCourses>
      <Ling102></Ling102>
      <Ling103></Ling103>
      <Ling104></Ling104>
      <Ling111></Ling111>
      <Ling422></Ling422>
      <Ling204b></Ling204b>
      <HC16></HC16>
    </div>
  );
};

export default InstructionalMaterials;
