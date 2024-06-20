import Text from "../../components/Text";
import Eyetracker from "./Perception/Eyetracker";
import Matlab from "./Perception/Matlab";
import Eprime from "./Perception/Eprime";

const Perception = () => {
  return (
    <div className="px-20 md:px-20 lg:px-40 py-20 bg-white text-left text-large">
      <Text h2 className="text-left">
        Perception
      </Text>
      <Eyetracker />
      <Matlab />
      <Eprime />
    </div>
  );
};

export default Perception;
