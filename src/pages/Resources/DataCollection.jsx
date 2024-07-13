import Text from "../../components/Text";
import Soundbooth from "./DataCollection/Soundbooth";
import Labvanced from "./DataCollection/Labvanced";
import MechanicalTurk from "./DataCollection/MechanicalTurk";
import Prolific from "./DataCollection/Prolific";
import { Divider } from "@nextui-org/react";

const DataCollection = () => {
  return (
    <div className="px-20 md:px-20 lg:px-40 py-20 bg-white text-left text-large">
      <Text h2 className="text-left">
        Data Collection
      </Text>
      <Divider></Divider>
      <Soundbooth />
      <Text h2 className="text-left py-20">
        Online Data Collection
      </Text>
      <Divider></Divider>

      <Labvanced />
      <MechanicalTurk />
      <Prolific />
    </div>
  );
};

export default DataCollection;
