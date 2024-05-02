import Palatography from "./Physiology/Palatography";
import Electropalatography from "./Physiology/Electropalatography";
import Aerodynamics from "./Physiology/Aerodynamics";
import Electroglottograph from "./Physiology/Electroglottograph";
import Ultrasound from "./Physiology/Ultrasound";

const Physiology = () => {
  return (
    <div className="bg-white p-20 text-left">
      <Palatography />
      <Electropalatography />
      <Aerodynamics />
      <Electroglottograph />
      <Ultrasound />
    </div>
  );
};

export default Physiology;
