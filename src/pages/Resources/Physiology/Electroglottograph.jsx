import { Accordion, AccordionItem } from "@nextui-org/react";
import Text from "../../../components/Text";
import egg_figure_1 from "../../../components/resources/electroglottograph/egg_figure_1.gif";
import egg_figure_2 from "../../../components/resources/electroglottograph/egg_figure_2.gif";
import egg_title_img from "../../../components/resources/electroglottograph/egg_title_img.jpeg";

const Electroglottograph = () => {
  return (
    <div>
      <div className="pt-10">
        <Text h3>Electroglottograph (EGG)</Text>
        <Accordion variant="shadow">
          <AccordionItem title="Using an EGG">
            <div className="pb-10 px-4">
              <div class="flex justify-center w-full">
                <img
                  src={egg_title_img}
                  alt="egg_title_img"
                  className="md:w-1/2 p-2 shadow-md"
                />
              </div>
              <Text h4>
                <br />
                Introduction
              </Text>
              <Text p>
                An electroglottograph (EGG) is a non-invasive device that
                indexes the contact area between the two vocal folds. A small,
                high-frequency current is passed between two electrodes that are
                secured around the neck at the level of the larynx. The opening
                and closing of the vocal folds causes variation in the
                electrical resistance of the current. These changes in
                resistance are then displayed onscreen.
              </Text>
              <Text h4>How an EGG works</Text>
              <Text p>
                While human tissue is a fairly good conductor of electricity,
                air is not. During phonation, the vocal folds (human tissue)
                are, at times, separated by the glottis (air). As the vocal
                folds move apart, the glottis opens, thereby increasing the
                electrical impedance across the larynx. When the vocal folds
                come closer together, the size of the glottis decreases, thereby
                decreasing the electrical impedance across the larynx. These
                changes in impedance are then displayed in a signal onscreen.
              </Text>
              <Text h4>How to use an EGG</Text>
              <Text p>
                The lab is equipped with a two-channel electroglottograph (Model
                EG2, Glottal Enterprises). The instructions given below are
                based on instructions prepared by{" "}
                <a
                  href="https://www.glottal.com/"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  Glottal Enterprises
                </a>
                , but with additional steps and helpful hints. <br />
                <br />
                Here is what the front panel of the EGG looks like:
              </Text>
              <div class="flex justify-center w-full">
                <img
                  src={egg_figure_1}
                  alt="egg_figure_1"
                  className="md:w-1/2 p-2 shadow-md"
                />
              </div>
              <div className="flex justify-center">
                <Text p className="md:w-1/2">
                  Figure 1: Two-channel EGG
                </Text>
              </div>
              <Text h4>Selecting the Signal</Text>
              <Text p>
                Select one of the four signals, described below, using the
                “Output Signal” (knob #4 in Figure 1).
                <div className="pl-10">
                  <br />
                  <ul className="list-disc">
                    <li>VFCA (Vocal Fold Contact Area)</li>
                    <li>
                      IVFCA (Inverse Vocal Fold Contact Area) The VFCA and IVFCA
                      are the most common EGG signals.
                    </li>
                    <li>
                      DEGG (Differentiated EGG) - This output represents the
                      differentiated EGG signal, in VFCA polarity.
                    </li>
                    <li>
                      Ext LF (Extended Low Frequency response) - This output
                      allows you to observe the lower frequency components of
                      the laryngeal movement.
                    </li>
                  </ul>
                  <br />
                </div>
                In addition, you can also manipulate the low frequency limit
                (#3). According to Glottal Enterprises “the higher cutoff
                frequencies (10 Hz to 40 Hz) will allow the display to be better
                stabilized [but].... a slight waveform distortion...” will
                occur.
              </Text>
            </div>
          </AccordionItem>
          <AccordionItem title="Setting up the EGG">
            <div className="pb-10 px-4">
              <Text p>
                <div className="pl-10">
                  <ul className="list-decimal">
                    <li>
                      Insert the electrodes into the port labeled “ELECTRODES”
                      (#2) on the EGG. Connect the EGG box to the A/D device -
                      usually the XAudio box (connected to the computer), but
                      sometimes in the field a laptop sound card.
                    </li>
                    <li>
                      Turn the EGG on by turning the battery knob (#1) to either
                      “A” or “B”, depending on which battery is currently
                      charged. (If you select battery “A”, then “B” is being
                      charged, or vice versa.) The light above the battery knob
                      should now be green. If it is red, the battery you
                      selected is not fully charged; in that case, just select
                      the other battery. Even if the unit is plugged in, you
                      must select a battery.
                    </li>
                    <li>
                      Cover the gold surface of the electrodes with a thin layer
                      of electrode gel. A Q-tip works well for this. (If the gel
                      is not available, a saline solution can be used to wet the
                      electrodes.)
                    </li>
                    <li>
                      Place the electrodes on the subject's neck at the level of
                      the thyroid cartilage. (According to the directions from
                      Glottal Enterprises, the left electrode (from the
                      subject's point of view) is the one with the black band of
                      wires, though we found that it does not matter.) The white
                      gap separating the gold-plated areas on the electrodes
                      should be roughly horizontal, not vertical.
                    </li>
                    <li>
                      Make sure that the electrodes are positioned at the
                      correct distance apart (on either side of the thyroid
                      cartilage) for your subject.
                    </li>
                    <li>
                      Now that the electrodes are attached, you will need to
                      make sure that they are in the correct positions. While
                      having the subject produce a constant, prolonged vowel
                      sound, in the pitch range to be tested, adjust the
                      vertical position of the electrodes, so that the center
                      green light on the “Electrode Placement/Laryngeal
                      Movement” (#5) indicator is lit. If the electrodes are not
                      in the right place, the bar will indicate whether you
                      should move up or down.
                      <br />
                      Note: The indicator is very sensitive, and small changes
                      in movement cause large changes on the indicator. I found
                      that one (slightly) easier way to center the indicator was
                      to start at an extreme point (e.g., the base of the neck),
                      and then SLOWLY move upwards until the center green light
                      is lit. I also found that positioning the electrodes was
                      much easier to do on myself than on a subject. Remember
                      that changes in pitch will change the position of the
                      larynx, so it is important to keep this factor constant.
                    </li>
                    <li>
                      The subject should try to produce a strong enough signal
                      so that one of the green lights on the “Signal” indicator
                      (#7) is lit.
                    </li>
                  </ul>
                </div>
              </Text>
            </div>
          </AccordionItem>
          <AccordionItem title="Using PCQuirer for the EGG">
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
