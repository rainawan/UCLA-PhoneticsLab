import Text from "../../../components/Text";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Eyetracker = () => {
  return (
    <div>
      <Text h3 className="pt-10">
        Eyetracker
      </Text>
      <Accordion variant="shadow">
        <AccordionItem title="Introduction">
          {/* <div className="pb-10 px-4">
            <Text p></Text>
          </div> */}
        </AccordionItem>
        <AccordionItem title="Eyetracker in 2101A">
          {/* <div className="pb-10 px-4">
            <Text p></Text>
          </div> */}
        </AccordionItem>
        <AccordionItem title="Portable Eyetracker">
          {/* <div className="pb-10 px-4">
            <Text p></Text>
          </div> */}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Eyetracker;
