import Text from "../../components/Text";
import VoiceSauce from "./AcousticAnalysis/VoiceSauce";
import Soundbooth from "./AcousticAnalysis/Soundbooth";
import PraatScript from "./AcousticAnalysis/PraatScript";

const AcousticAnalysis = () => {
  return (
    <div className="bg-white p-20 text-left">
      <Text h2 className="text-left">
        Acoustic Analysis
      </Text>
      <VoiceSauce />
      <Soundbooth />
      <PraatScript />
    </div>
  );
};

export default AcousticAnalysis;
