import Text from "../../../components/Text";
import { Link, Divider } from "@nextui-org/react";
import AllPhoneticsCourses from "./IndividualCourses/AllPhoneticsCourses";
import Ling102 from "./IndividualCourses/Ling102";
import Ling103 from "./IndividualCourses/Ling103";
import Ling104 from "./IndividualCourses/Ling104";
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
    </div>
  );
};

export default InstructionalMaterials;
