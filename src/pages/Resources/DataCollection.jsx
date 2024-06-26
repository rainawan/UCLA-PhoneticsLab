import Text from "../../components/Text";
import Soundbooth from "./DataCollection/Soundbooth";
import Labvanced from "./DataCollection/Labvanced";
import MechanicalTurk from "./DataCollection/MechanicalTurk";

const DataCollection = () => {
  return (
    <div className="px-20 md:px-20 lg:px-40 py-20 bg-white text-left text-large">
      <Text h2 className="text-left">
        Data Collection
      </Text>
      <Soundbooth />
      <Labvanced />
      <MechanicalTurk />
    </div>
  );
};

export default DataCollection;
