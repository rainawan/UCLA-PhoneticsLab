import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Text from "../../components/Text";
import Img1 from "../../../src/components/resouces/palatogram_fig_1.jpeg";
// import Img2 from "../../../src/"

const Physiology = () => {
  return (
    <div className="bg-white p-20 text-left">
      <Text h2 className="text-left">
        Physiology
      </Text>
      <div>
        <Text h3>Palatography</Text>
        <Accordion variant="shadow">
          <AccordionItem title="Introduction">
            <div className="pb-10 px-4">
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
              <Text p>
                Ladefoged, P. (2003). Phonetic Data Analysis. Oxford:
                Blackwells. (due out summer 2003)
                <br />
                Anderson, V. (2000) Giving Weight to Phonetic Principles: The
                Case of Place of Articulation in Western Arrente. UCLA Ph.D.
                dissertation. Keating, P. (2002). Class Handout for Linguistics
                251 Phonetics Seminar, Spring 2002.
              </Text>
            </div>
          </AccordionItem>
          <AccordionItem title="Palatograms">
            <div className="pb-10 px-4">
              <Text h4>What are Palatograms?</Text>
              <Text p>
                A palatogram is an image of the region of the upper surface of
                the vocal tract contacted by the tongue due to a consonant. The
                best way to obtain such an image is to coat the tongue with a
                mixture of equal parts olive oil and activated charcoal powder
                and record the resulting transfer of pigment.
              </Text>
              <Text p className="font-semibold">
                The process is as follows:
              </Text>
              <Text p>
                1) To protect the subject, one should use latex type gloves and
                preferably a surgical mask. <br />
                2) Mix the olive oil and the activated charcoal powder. <br />
                3) Apply mixture to the speaker's whole tongue with a paintbrush
                or Q-Tip. NOTE: In case of dripping, one should cover the
                speaker's clothes before applying the mixture. <br />
                4) Ask the speaker to produce a word that contains the target
                sound (The word should not include any other sounds that make
                contact with the palate). <br />
                5) Use a mirror (preferably a sterilized inter-oral mirror), and
                place it inside the speaker's mouth at a 45° angle with respect
                to the plane of the teeth. <br />
                6) Use a camera or video camera to photograph the mirror's
                reflection of the place of articulation depicted by the imprint.{" "}
                <br />
                7) If a video camera is used, the image can be transferred
                directly to a computer for further processing. <br />
                8) Once the image has been recorded, have the speaker rinse out
                his/her mouth with lemonade (or lemon juice in water). <br />
              </Text>

              <Accordion isCompact variant="bordered">
                <AccordionItem title="View Figures">
                  <div className="flex flex-wrap">
                    <div class="w-full md:w-1/2 p-2">
                      <img
                        src="../../../src/components/resouces/palatogram_fig_1.jpeg"
                        alt="palatogram_fig_1"
                      />
                      <h1>
                        Fig 1: Diagram showing relative position of the elements
                        required to record the palatogram.
                      </h1>
                    </div>
                    <div class="w-full md:w-1/2 p-2">
                      <img
                        src="../../../src/components/resouces/palatogram_fig_2.gif"
                        alt="palatogram_fig_2"
                      />
                      <h1>
                        Fig 2: Palatogram; still image digitized from video.
                        Orientation: Upper teeth are shown at top and reflected
                        in the mirror at bottom.
                      </h1>
                    </div>
                  </div>
                </AccordionItem>
              </Accordion>
            </div>
          </AccordionItem>
          <AccordionItem title="Linguograms">
            <div className="pb-10 px-4">
              <Text h4>Header</Text>
              <Text p>description</Text>
            </div>
          </AccordionItem>
          <AccordionItem title="Alginate Impressions">
            <div className="pb-10 px-4">
              <Text h4>Header</Text>
              <Text p>description</Text>
            </div>
          </AccordionItem>
          <AccordionItem title="Midsaggital Diagrams">
            <div className="pb-10 px-4">
              <Text h4>Header</Text>
              <Text p>description</Text>
            </div>
          </AccordionItem>
          <AccordionItem title="Tomographic Slices">
            <div className="pb-10 px-4">
              <Text h4>Header</Text>
              <Text p>description</Text>
            </div>
          </AccordionItem>
          <AccordionItem title="Practical Points">
            <div className="pb-10 px-4">
              <Text h4>Header</Text>
              <Text p>description</Text>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Physiology;
