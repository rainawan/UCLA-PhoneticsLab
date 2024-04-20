import React from "react";
import { Link, Accordion, AccordionItem } from "@nextui-org/react";
import Text from "../../components/Text";
// import { Accordion } from "@material-tailwind/react";

const Physiology = () => {
  return (
    <div className="bg-white p-20">
      <Text h2 className="text-left">
        Physiology
      </Text>
      <div>
        <Text h3>Palatography</Text>
        <Accordion variant="shadow">
          <AccordionItem title="Introduction">
            <div className="pb-10">
              <Text h4>Static Palatography Introduction</Text>
              <Text p>
                Static palatography is a well-known traditional method of
                obtaining articulatory data. It is a low-tech, inexpensive tool
                that can be easily used in the field for phonetic description,
                both qualitative and quantitative. It records contact with one,
                sometimes two, articulatory surfaces. A palatogram is a record
                of contact on the palate. A linguogram is a record of contact by
                the tongue. Less common is the dentogram, labiogram, gingogram,
                ad lib. The basic principle is that an articulator either
                deposits dark material onto, or wipes it off of, the contacted
                surface.
              </Text>
              <Text p>
                The method presented here is what is currently used here at the
                UCLA Phonetics Lab. It is a much improved process developed from
                an earlier method that had many drawbacks. The previous way of
                doing palatography involved chocolate powder dusted onto the
                surface of the palate, creating both a palatogram and linguogram
                at the same time. While the present method requires that the
                palatogram and linguogram be created separately, it is much less
                messy and creates high-contrast images that photograph well.
                Also, the absence of chocolate powder in the current method
                eliminates the possibility of increased salivation which
                decreased the contrast of the earlier palatograms.
              </Text>
              <Text p className="font-semibold">
                Material presented here has been adapted from:
              </Text>
            </div>
          </AccordionItem>
          <AccordionItem title="Palatograms">
            <div className="pb-10">Content for Accordion 0</div>
          </AccordionItem>
          <AccordionItem title="Linguograms">
            <div className="pb-10">Content for Accordion 0</div>
          </AccordionItem>
          <AccordionItem title="Alginate Impressions">
            <div className="pb-10">Content for Accordion 0</div>
          </AccordionItem>
          <AccordionItem title="Midsaggital Diagrams">
            <div className="pb-10">Content for Accordion 0</div>
          </AccordionItem>
          <AccordionItem title="Tomographic Slices">
            <div className="pb-10">Content for Accordion 0</div>
          </AccordionItem>
          <AccordionItem title="Practical Points">
            <div className="pb-10">Content for Accordion 0</div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Physiology;
