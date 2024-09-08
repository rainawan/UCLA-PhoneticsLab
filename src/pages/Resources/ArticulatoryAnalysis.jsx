import Palatography from "./ArticulatoryAnalysis/Palatography";
import Electropalatography from "./ArticulatoryAnalysis/Electropalatography";
import Aerodynamics from "./ArticulatoryAnalysis/Aerodynamics";
import Electroglottograph from "./ArticulatoryAnalysis/Electroglottograph";
import Ultrasound from "./ArticulatoryAnalysis/Ultrasound";
import Text from "../../components/Text";
const ArticulatoryAnalysis = () => {
  return (
    <div className="bg-white p-20 text-left">
      <Text h2 className="text-left">
        Articulatory Analysis
      </Text>
      {/* <Electropalatography /> */}
      <Aerodynamics />
      <Electroglottograph />
      <Palatography />
      <Ultrasound />
    </div>
  );
};

export default ArticulatoryAnalysis;
