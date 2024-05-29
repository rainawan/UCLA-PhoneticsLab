import Text from "../../components/Text";
import VoiceSauce from "./AcousticAnalysis/VoiceSauce";
import Soundbooth from "./AcousticAnalysis/Soundbooth";
import PraatScript from "./AcousticAnalysis/PraatScript";
import { Divider } from "@nextui-org/react";

const AcousticAnalysis = () => {
  return (
    <div className="px-20 md:px-40 lg:px-60 py-20 bg-white text-left text-large">
      <Text h2>Acoustic Analysis</Text>
      <Divider className="w-full mx-auto border-t-2 border-gray-400" />
      <VoiceSauce />
      <Divider className="mt-6 w-full mx-auto border-t-2 border-gray-400" />
      <Soundbooth />
      {/* <PraatScript /> */}
    </div>
  );
};

export default AcousticAnalysis;
