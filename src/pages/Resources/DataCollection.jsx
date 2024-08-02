import Text from "../../components/Text";
import Soundbooth from "./DataCollection/Soundbooth";
import Labvanced from "./DataCollection/Labvanced";
import MechanicalTurk from "./DataCollection/MechanicalTurk";
import Prolific from "./DataCollection/Prolific";
import { Divider } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const DataCollection = () => {
  return (
    <div className="px-20 md:px-20 lg:px-40 py-20 bg-white text-left text-large">
      <Text h2 className="text-left">
        Data Collection
      </Text>
      <Divider></Divider>
      <Soundbooth />
      <Text h3 className="text-left py-20">
        Online Data Collection
      </Text>

      <Accordion variant="shadow">
        <AccordionItem
          key="1"
          aria-label="Labvanced"
          title={<span className="text-xl">Labvanced</span>}
        >
          <Labvanced />
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="MechanicalTurk"
          title="MechanicalTurk"
        >
          <MechanicalTurk />
        </AccordionItem>
        <AccordionItem key="3" aria-label="Prolific" title="Prolific">
          <Prolific />
        </AccordionItem>
      </Accordion>

      {/* <Labvanced />
      <MechanicalTurk />
      <Prolific /> */}
    </div>
  );
};

export default DataCollection;
