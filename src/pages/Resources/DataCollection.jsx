import Text from "../../components/Text";
import Soundbooth from "./DataCollection/Soundbooth";
import OnlineDataCollection from "./DataCollection/OnlineDataCollection";
import RunningExperiments from "./DataCollection/RunningExperiments";
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
      <OnlineDataCollection></OnlineDataCollection>
      <RunningExperiments></RunningExperiments>
    </div>
  );
};

export default DataCollection;
