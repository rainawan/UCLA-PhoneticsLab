import Text from "../../components/Text";
import VoiceSauce from "./AcousticAnalysis/VoiceSauce";
import Soundbooth from "./AcousticAnalysis/Soundbooth";
import PraatScript from "./AcousticAnalysis/PraatScript";
import { Divider } from "@nextui-org/react";

const AcousticAnalysis = () => {
  return (
    <div className="bg-white p-20 text-left">
      <Text h2 className="text-left">
        Acoustic Analysis
      </Text>
      <Divider className="my-4 w-full mx-auto border-t-4 border-gray-600" />
      <VoiceSauce />
      {/* <Soundbooth /> */}
      {/* <PraatScript /> */}
    </div>
  );
};

export default AcousticAnalysis;
