import { Accordion, AccordionItem } from "@nextui-org/react";
import Text from "../../../components/Text";

const Electroglottograph = () => {
  return (
    <div>
      <div className="pt-10">
        <Text h3>Electroglottograph (EGG)</Text>
        <Accordion variant="shadow">
          <AccordionItem title="title">
            <div className="pb-10 px-4">
              <Text h4>header</Text>
              <Text p>desc</Text>
            </div>
          </AccordionItem>
          <AccordionItem title="title">
            <div className="pb-10 px-4">
              <Text h4>header</Text>
              <Text p>desc</Text>
            </div>
          </AccordionItem>
          <AccordionItem title="title">
            <div className="pb-10 px-4">
              <Text h4>header</Text>
              <Text p>desc</Text>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Electroglottograph;
