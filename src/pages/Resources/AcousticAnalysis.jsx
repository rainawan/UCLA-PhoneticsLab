import Text from "../../components/Text";
import VoiceSauce from "./AcousticAnalysis/VoiceSauce";
import PraatScript from "./AcousticAnalysis/PraatScript";
import { Divider } from "@nextui-org/react";

const AcousticAnalysis = () => {
  return (
    <div className="px-20 md:px-20 lg:px-40 py-20 bg-white text-left text-large">
      <Text h2>Acoustic Analysis</Text>
      <Divider className="w-full mx-auto border-t-2 border-gray-400" />
      <VoiceSauce />
      <Divider className="mt-10 w-full mx-auto border-t-2 border-gray-400" />
      <PraatScript />
    </div>
  );
};

export default AcousticAnalysis;
