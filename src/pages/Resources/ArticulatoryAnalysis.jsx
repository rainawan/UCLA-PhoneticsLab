import Palatography from "./ArticulatoryAnalysis/Palatography";
import Electropalatography from "./ArticulatoryAnalysis/Electropalatography";
import Aerodynamics from "./ArticulatoryAnalysis/Aerodynamics";
import Electroglottograph from "./ArticulatoryAnalysis/Electroglottograph";
import Ultrasound from "./ArticulatoryAnalysis/Ultrasound";

const ArticulatoryAnalysis = () => {
  return (
    <div className="bg-white p-20 text-left">
      <Palatography />
      {/* <Electropalatography /> */}
      <Aerodynamics />
      <Electroglottograph />
      <Ultrasound />
    </div>
  );
};

export default ArticulatoryAnalysis;
