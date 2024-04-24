import React from "react";
import { Accordion, AccordionItem, Divider } from "@nextui-org/react";
import Text from "../../components/Text";

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
              <Text p className="pb-10">
                1) To protect the subject, one should use latex type gloves and
                preferably a surgical mask. <br />
                2) Mix the olive oil and the activated charcoal powder. <br />
                3) Apply mixture to the speaker's whole tongue with a paintbrush
                or Q-Tip. NOTE: In case of dripping, one should cover the
                speaker's clothes before applying the mixture. <br />
                4) Ask the speaker to produce a word that contains the target
                sound (The word should not include any other sounds that make
                contact with the palate).
                <br />
                5) Use a mirror (preferably a sterilized inter-oral mirror), and
                place it inside the speaker's mouth at a 45° angle with respect
                to the plane of the teeth. See Figure 1 for more.
                <br />
                6) Use a camera or video camera to photograph the mirror's
                reflection of the place of articulation depicted by the imprint.{" "}
                <br />
                7) If a video camera is used, the image can be transferred
                directly to a computer for further processing. <br />
                8) Once the image has been recorded, have the speaker rinse out
                his/her mouth with lemonade (or lemon juice in water). See
                Figure 2 for more.
                <br />
              </Text>

              <Accordion isCompact variant="bordered">
                <AccordionItem title="View Figures">
                  <div className="flex flex-wrap">
                    <div class="w-full md:w-1/2 p-2">
                      <img
                        src="../../../src/components/resouces/palatogram_fig_1.jpeg"
                        alt="palatogram_fig_1"
                      />
                      <h1 className="pt-4">
                        Figure 1: Diagram showing relative position of the
                        elements required to record the palatogram.
                      </h1>
                    </div>
                    <div class="w-full md:w-1/2 p-2">
                      <img
                        src="../../../src/components/resouces/palatogram_fig_2.gif"
                        alt="palatogram_fig_2"
                      />
                      <h1 className="pt-4">
                        Figure 2: Palatogram; still image digitized from video.
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
              <Text h4>Performing Linguograms</Text>
              <Text p>
                When all the required pictures of the roof of the mouth have
                been obtained, the procedure can be reversed to produce
                linguograms, which are simply records of the areas of the tongue
                that have come in contact with the roof of the mouth.
              </Text>
              <Text p className="font-semibold">
                The process is as follows:
              </Text>
              <Text p className="pb-10">
                1) Paint the upper surface of the mouth with the same mixture
                described in the palatography section. <br />
                2) Have the speaker produce the desired sound and observe (and
                photograph) the part of the tongue that is making the contact.
                It may be necessary to instruct the speaker to move the tongue
                up, down or to the side, to show sublaminal contact, or contact
                on the sides of the tongue. <br />
                3) Once you have finished taking the pictures, have the speaker
                rinse out their mouths with lemonade or lemon juice. See Figure
                3 & 4 for more.
                <br />
                <br />
                NOTE: Speakers' tongues differ in their absorbency to the
                charcoal mixture. For speakers whose tongues begin to collect
                black color despite repeated rinsings, it is preferable to begin
                by painting the roof of the mouth and obtaining the linguograms
                first, since repeatedly painting the tongue can cause loss of
                contrast.
              </Text>
              <Accordion isCompact variant="bordered">
                <AccordionItem title="View Figures">
                  <div className="flex flex-wrap">
                    <div class="w-full md:w-1/2 p-2">
                      <img
                        src="../../../src/components/resouces/palatogram_fig_3.gif"
                        alt="palatogram_fig_3"
                      />
                      <h1 className="pt-4">
                        Figure 3: Linguogram showing tongue blade and body
                        contact.
                      </h1>
                    </div>
                    <div class="w-full md:w-1/2 p-2">
                      <img
                        src="../../../src/components/resouces/palatogram_fig_4.gif"
                        alt="palatogram_fig_4"
                      />
                      <h1 className="pt-4">
                        Figure 4: Linguogram showing tongue tip contact and
                        sublaminal contact (contact under the tongue.)
                      </h1>
                    </div>
                  </div>
                </AccordionItem>
              </Accordion>
            </div>
          </AccordionItem>
          <AccordionItem title="Alginate Impressions">
            <div className="pb-10 px-4">
              <Text h4>How to Make Alginate Impressions</Text>
              <Text p>
                Palatograms and linguograms should always be accompanied by
                diagrams showing the shape of that particular speaker's mouth in
                the form of a traditional sagittal section. Diagrams of this
                kind can be based on dental impressions of the oral cavity made
                in the field. Use chromatic dental alginate (such as Jel-Trate)
                as the impression material. Other substances which set harder
                and cannot be cut are of no use. There is no reason for these
                impressions to be made using a tray of the kind that dentists
                use, which takes an impression of the outer surfaces of the
                teeth. The outer surfaces of the teeth play no role in the
                production of speech, so they can be neglected. All that is
                needed is an impression of the inner surfaces of the teeth and
                roof of the mouth.
              </Text>
              <Text p className="font-semibold">
                One possible process for making impressions:
              </Text>
              <Text p className="pb-10">
                1) Mix the Jel-Trate with water in a bowl using a spatula. Don't
                use when it's still runny. You must be able to pile the mixture.
                If it runs out the sides, you won't get the whole palate and it
                could be unpleasant for the subject. <br />
                2) Heap the mixture on a mirror or other flat surface, or in an
                appropriately sized dental tray. <br />
                3) Have the subject lean forward, so that if the material does
                run out, it will not be swallowed. <br />
                4) Insert the mixture into the mouth, press up against the
                palate and teeth. You want to push up until you feel the bottom
                of the impression material to be on the plane of the teeth.{" "}
                <br />
                5) Hold in this position until set (by color change, if you are
                using color phase dental alginate, or by timing+touch). <br />
                6) Remove the tray from the person's mouth and remove the
                impression from the mirror/tray. See Figure 5 for more. <br />
                7) Trim the base of the impression so that it is flat and in
                line with the plane of the teeth. If necessary, trim the excess
                from the back and sides. See Figure 6 for more. <br />
                8) If you need to store the impression, you can wrap it in a
                wet, moist paper towel.
              </Text>
              <Accordion isCompact variant="bordered">
                <AccordionItem title="View Figures">
                  <div className="flex flex-wrap">
                    <div class="w-full md:w-1/2 p-2">
                      <img
                        src="../../../src/components/resouces/palatogram_fig_5.jpeg"
                        alt="palatogram_fig_5"
                      />
                      <h1 className="pt-4">
                        Figure 5: The dental impression being removed from the
                        mirror used as a molding base.
                      </h1>
                    </div>
                    <div class="w-full md:w-1/2 p-2">
                      <img
                        src="../../../src/components/resouces/palatogram_fig_6.jpeg"
                        alt="palatogram_fig_6"
                      />
                      <h1 className="pt-4">
                        Figure 6: Excess material is trimmed from around the plane
                        of the teeth.
                      </h1>
                    </div>
                  </div>
                </AccordionItem>
              </Accordion>
            </div>
          </AccordionItem>
          <AccordionItem title="Midsaggital Diagrams">
            <div className="pb-10 px-4">
              <Text h4>How to Make Midsaggital Diagrams</Text>
              <Text p className="pb-10">
                In order to obtain a precise diagram of the shape of the
                speaker's palate, the palatal impression must be accurately
                sectioned in three dimensions. The first cut will be through the
                center of the impression to provide an datum line for further
                measurement. To get the most information on the shape of the
                soft tissues, the impression should be cut mid-sagittally before
                trimming around the teeth. Next trace an outline of the palate,
                upper teeth, and upper lip on a sheet of paper. Use a ruler and
                your fingers to brace the impression. Alternatively, put one of
                the halves on the glass of a copy machine, and copy. Either way,
                make several copies of the tracing just in case.
                <br />
                <br />
                Next, bisect the impression halves in the coronal plane, at a
                point about the middle of the impression (usually between the
                second premolar and first molar). The intersection of these
                mid-sagittal and coronal cuts can be used to define x and y axes
                and an origin on a piece of graph paper.
              </Text>
              <Accordion isCompact variant="bordered">
                <AccordionItem title="View Figures">
                  <div className="flex flex-wrap">
                    <div class="w-full md:w-1/2 p-2">
                      <img
                        src="../../../src/components/resouces/palatogram_fig_5.jpeg"
                        alt="palatogram_fig_5"
                      />
                      <h1 className="pt-4">
                        Figure 7: The impression is now sectioned along the
                        saggital plane. Use the central fissure as a guide. One
                        of the resulting halves is used as a pattern to create a
                        paper tracing. The flexible nature of the alginate
                        requires careful support so as not to distort the shape
                        of the palate.
                      </h1>
                    </div>
                  </div>
                </AccordionItem>
              </Accordion>
            </div>
          </AccordionItem>
          <AccordionItem title="Tomographic Slices & Superimposing Photography">
            <div className="pb-10 px-4">
              <Text h4>Tomographic Slices</Text>
              <Text p>
                Slice each of the resulting quadrants horizontally, 5 mm above
                the plane of the teeth (i.e. with the blade of the knife
                parallel to the surface of the impression material corresponding
                to the plane of the teeth). It is then possible to measure the
                distance of this plane from the roof of the mouth, and to draw a
                line round it.
                <br />
                <br />
                In order to assist with the scaling it is also advisable to draw
                round the base of the teeth. Check with your local biology or
                physical anthropology departments for a tomograph with which to
                make the 5 mm horizontal slices. Otherwise, it is relatively
                easy to make a tool to cut the alginate mold parallel to the
                plane of the teeth. On a flat, smooth, 190 x 125 mm wooden board
                paste heavy cardboard strips parallel to each other, 70 mm
                apart, resulting in a two “walls” of height 5mm. On top of, and
                perpendicular to the cardboard walls place an 80 mm long razor
                blade, creating a wide slicing area. Push each quadrant of the
                dental impression through this tool so as to cut off the bottom
                5 mm of impression material in the occlusal plane. Place the
                quadrants back together at the origin on the graph paper, trace
                them, and repeat the process until all of the impression
                material is drawn in this way.
                <br />
                <br />
                Alternatively, you can use a cast to get the contour lines: fill
                the cast with liquid to depths of 5, 10, and 15 mm,
                photographing each depth.
              </Text>
              <Divider className="my-4 w-full mx-auto border-t-2 border-gray-400" />
              <Text h4>Superimposing on Photographs</Text>
              <Text p>
                To superimpose the contour lines and the marks of the teeth
                accurately on the photograph, it is first necessary to be
                certain that the photographs are not distorted. They will be
                foreshortened, if the mirror was not at a 45° angle to the plane
                of the teeth. The scaling can be done quite easily if the
                photograph has been entered into a computer, either by scanning
                it, or by conversion from the video. The contour lines, location
                of the teeth and the tracing of the sagittal section can also be
                scanned in, and then the image of the roof of the mouth scaled
                independently in each direction so that obvious landmarks, such
                as the distance between certain teeth are adjusted
                appropriately.
                <br />
                <br />
                For a detailed illustration of this process please refer to
                Ladefoged's chapter on static palatography in his 2003 book,
                Phonetic Data Analysis.
              </Text>
            </div>
          </AccordionItem>
          <AccordionItem title="Practical Points">
            <div className="pb-10 px-4">
              <Text h4>Practical Points</Text>
              <Text p>
                There are some practical points in connection with palatography
                that should be noted. Firstly, care should be taken in selecting
                appropriate words. We are often interested in comparing the
                places of articulation of different sounds. Accordingly words
                must be chosen that contain these articulations, and do not
                contain any other similar articulations that might overlap with
                them. Thus when investigating the difference between s and sh in
                English one should use words such as "sop-shop" rather than
                "sot-shot." Similarly one should use either a range of vowels
                ("seep-sheep, sip-ship, same-shame, Sam-sham, sop-shop, etc.")
                or, if this is not possible, just open vowels which might be
                expected to have less effect on the consonant articulation. As
                with all instrumental phonetic investigations, time spent
                selecting suitable words is a good investment.
                <br />
                <br />
                When doing palatography, one should allow the speaker to
                practice the task extensively. It is important to get the
                speakers to relax after the tongue or upper surface of the mouth
                have been painted, so that when they say the word being
                investigated they do so naturally. It also requires practice to
                stick the tongue out of the mouth the same way every time. It is
                obviously important to date and label the photographs as soon as
                they are taken. In addition, again as with all instrumental
                data, it is preferable to make records of several different
                speakers saying a few utterances rather than one or two speakers
                repeating a large number of different utterances. Ideally one
                would like to get a dozen speakers of the same dialect each
                repeating a dozen times all the contrasts to be investigated.
                But making palatographic records is fairly time consuming, and
                in a world in which time and effort are limited one may have to
                be satisfied with half a dozen speakers saying each word once.
                We hope, however that gone are the days when phoneticians such
                as Ladefoged made general statements about some West African
                languages based on the palatographic records of a single speaker
                of each language. We need to find out the properties of the
                language that a group of speakers have in common, rather than
                the details of an individual's pronunciation.
              </Text>
            </div>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="pt-10">
        <Text h3>Aerodynamics</Text>
        <Accordion variant="shadow">
          <AccordionItem title="1) Recording Air Pressure and Airflow">
            <div className="pb-10 px-4">
              <Text h4>Air Pressure and Airflow</Text>
              <Text p className="pb-10">
                The UCLA Phonetics Lab has equipment to record the airflow from
                the mouth and nose. In addition, it can record the pressure of
                the air in the front of the mouth and in the pharynx. The system
                is illustrated in Figure 1. It consists of a data acquisition
                system (small box at the bottom left of the picture) connected
                to a laptop or desktop computer (bottom right), and an assembly
                with oral and nasal masks and pressure tubes held by the
                speaker, together with a microphone that records the sound.At
                the UCLA Phonetics Lab, we have the equipment shown in Figure 1
                (oral and nasal masks, analysis box, and tubing), as well as a
                Rothenberg mask.Any of these masks can also be used with the
                4-channel CSL box, but this set-up will not be discussed here.{" "}
                <br />
                <br />
                The mask for capturing the oral airflow fits around the mouth
                and below the jaw. The nasal airflow mask is fastened over the
                nose by a band that goes around the head. Both masks are joined
                to the assembly by small tubes. The masks can be used either
                together or independently (though the oral airflow apparatus
                must be present, over the mouth or not, in any set-up, since it
                contains the pressure transducers).
              </Text>
              <Accordion isCompact variant="bordered">
                <AccordionItem title="View Figure 1">
                  <div className="flex flex-wrap">
                    <div class="w-full md:w-1/2 p-2">
                      <img
                        src="../../../src/components/resouces/aerodynamics_fig_1.jpeg"
                        alt="aerodynamics_fig_1"
                      />
                      <h1 className="pt-4">
                        Figure 1: The system for recording air pressure and air
                        flow described in the text
                      </h1>
                    </div>
                  </div>
                </AccordionItem>
              </Accordion>
            </div>
          </AccordionItem>
          <AccordionItem title="2) Setting up the assembly">
            <div className="pb-10 px-4">
              <Text h4>header</Text>
              <Text p>desc</Text>
            </div>
          </AccordionItem>
          <AccordionItem title="3) Using the airflow equipment">
            <div className="pb-10 px-4">
              <Text h4>header</Text>
              <Text p>desc</Text>
            </div>
          </AccordionItem>
          <AccordionItem title="4) Analyzing the Data">
            <div className="pb-10 px-4">
              <Text h4>header</Text>
              <Text p>desc</Text>
            </div>
          </AccordionItem>
          <AccordionItem title="5) Measuring air pressure and airflow">
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

export default Physiology;
