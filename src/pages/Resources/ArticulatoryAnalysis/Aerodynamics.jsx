import { Accordion, AccordionItem } from "@nextui-org/react";
import Text from "../../../components/Text";
import aerodynamics_fig_1 from "../../../components/resources/aerodynamics/aerodynamics_fig_1.jpeg";
import aerodynamics_fig_2 from "../../../components/resources/aerodynamics/aerodynamics_fig_2.gif";
import computer from "../../../components/resources/aerodynamics/computer.png";
import figure2 from "../../../components/resources/aerodynamics/figure2.png";
import figure3 from "../../../components/resources/aerodynamics/figure3.png";

import CustomLink from "../../../components/CustomLink";

const Aerodynamics = () => {
  return (
    <div>
      <div>
        <Text h3>Aerodynamics</Text>
        <Accordion variant="shadow">
          <AccordionItem
            title={<span className="text-xl">1) Introduction</span>}
          >
            <div className="pb-10 px-4">
              <Text h4>Recording</Text>
              <Text p className="pb-10">
                The UCLA Phonetics Lab has equipment to record the airflow from
                the mouth and nose. In addition, it can record the air pressure
                in the oral cavity. To measure oral and nasal airflow (measured
                in mL/s (milliliters per second)) and air pressure, you can use
                the aerodynamic equipment and software made by Glottal
                Enterprises (the equipment is located in the Room F cabinet in
                the Phonetics Lab). This page provides the steps needed to
                collect aerodynamic data, how to calibrate airflow and air
                pressure, and how to troubleshoot potential issues. (This manual
                is prepared by Nicholas Guymon, Atlas Boulom, and Jian-Leat
                Siah.)
                <br />
                <br />
                <Text h4>Equipment Required</Text>
                <p>☐ A computer compatible with windows software</p>
                <p>
                  ☐ Transducer and Analog Data Computer Interface Model MS-100
                </p>
                <p>
                  ☐ (Up to) two Glottal Enterprises PT-series pressure
                  transducers
                </p>
                <p>☐ PC-1 pressure calibrator</p>
                <p>
                  ☐ At least one OroNasal mask, available in two standard sizes:
                  adult size and child size
                </p>
                <p>
                  ☐ Red plastic plugs for plugging any open transducer-mounting
                  holes in an OroNasal mask
                </p>
                <p>
                  ☐ Replacement stainless steel mesh screen rings and solid
                  discs for OroNasal masks
                </p>
                <p>☐ A microphone for audio collection</p>
                <p>☐ An EGG unit for vocal fold measurements (optional)</p>
                <p>
                  ☐ AeroView software or Berkeley Wiki page for data
                  post-processing{" "}
                  <CustomLink href="https://linguistics.berkeley.edu/plab/guestwiki/index.php?title=EGG-D800">
                    (link)
                  </CustomLink>
                </p>
              </Text>
              {/* <Accordion isCompact variant="bordered">
                <AccordionItem title="View Figure 1">
                  <div className="flex flex-wrap">
                    <div class="w-full md:w-1/2 p-2">
                      <img src={aerodynamics_fig_1} alt="aerodynamics_fig_1" />
                      <h1 className="pt-4">
                        Figure 1: The system for recording air pressure and air
                        flow described in the text
                      </h1>
                    </div>
                  </div>
                </AccordionItem>
              </Accordion> */}
            </div>
          </AccordionItem>
          <AccordionItem
            title={<span className="text-xl">2) Equipment Setup</span>}
          >
            <div className="pb-10 px-4">
              <Text h4>
                Transducer and Analog Data Computer Interface (Model MS-110):
              </Text>
              <Text p>
                <div className="pl-10">
                  <ul className="list-disc">
                    <li>
                      Connect the Model MS-110 to a computer with a USB cable or
                      a separate 5Vdc power pack and switch the power switch on
                      the rear panel to “USB” or “EXT,” respectively.
                    </li>
                    <li>
                      The Model MS-110 can operate two PT-series pressure
                      transducers simultaneously with a connection through a DIN
                      jack port located on the center of the front panel.
                    </li>
                  </ul>
                  <br></br>
                  <div className="flex flex-col items-center justify-center">
                    <img src={computer} alt="computer" className="shadow" />
                    <p className="pt-4 text-center italic">
                      Figure 1: Connections between MS-110 unit, computer, and
                      transducers
                    </p>
                  </div>
                </div>
              </Text>
              <br></br>

              <Text h4>Maintenance and Preparation of OroNasal Masks:</Text>
              <Text p>
                <div className="pl-10">
                  <ul className="list-disc">
                    <li>
                      Before use, visibly inspect the mask to ensure that it is
                      not dirty, obstructed, or damaged.
                    </li>
                    <li>
                      Clean dirty and/or obstructed area(s) with soap and water
                      and dry with a stream of cleanair.
                    </li>
                    <li>
                      Extensively damaged and/or perforated components and masks
                      should be replaced
                    </li>
                    <li>
                      Before application, sterilize the surfaces of the mask
                      with alcohol wipes.
                      <div>
                        - Repeat this procedure between acquisitions to minimize
                        contact between consultants and surfaces contaminated
                        with human saliva, mucus, etc. which may result from
                        use.
                      </div>
                    </li>
                    <li>
                      After inspection and cleaning, attach up to two pressure
                      transducers to the mask through two transducer-mounting
                      holes found on the mask (see Figure 2 on next page)
                    </li>
                    <li>
                      Dimples around the mask can be opened with a scalpel for
                      mounting additional transducers.
                    </li>
                    <li>
                      Any open, unused transducer-mounting holes should be
                      sealed with red plastic plugs provided, including the hole
                      in the grommet in the handle if it is not used (see Figure
                      3 below).
                    </li>
                  </ul>
                  <br></br>
                  <div className="flex flex-col items-center justify-center">
                    <img src={figure2} alt="figure2" className="shadow" />
                    <p className="pt-4 text-center italic">
                      Figure 2: Front view of adult-sized Oro- Nasal mask with
                      attached transducers
                    </p>
                  </div>
                </div>
              </Text>
              <br></br>
              <Text h4>Mask Application</Text>
              <Text p>
                <div className="pl-10">
                  <ul className="list-disc">
                    <li>
                      Place the mask snugly over the nose and mouth with the
                      rubber partition which divides the mask into nasal and
                      oral chambers firmly pressed against the face above the
                      vermilion border, forming a tight seal.
                    </li>
                    <li>
                      There should be no gaps around the mouth, cheeks, nose,
                      lips, and chin, preventing the exchange of airflow between
                      the oral and nasal chambers of the mask and any leakage
                      through gaps between the periphery of the mask and skin
                    </li>
                    <li>
                      To maintain a tight seal, hold the rubber handle in one
                      hand and apply pressure against the face.
                    </li>
                  </ul>
                  <br></br>
                  <div className="flex flex-col items-center justify-center">
                    <img src={figure3} alt="figure3" className="shadow" />
                    <p className="pt-4 text-center italic">
                      Figure 3: Application of OroNasal mask with unused hole
                      sealed by plug
                    </p>
                  </div>
                </div>
              </Text>
              <br></br>
              <Text h4>Windows Operating System (Vista):</Text>
              <Text p>
                <div className="pl-10">
                  <ul className="list-disc">
                    <li>
                      Right-click on the speaker icon at the bottom right of the
                      desktop.
                    </li>
                    <li>Select “Recording devices” from the options.</li>
                    <li>
                      Select “Advanced” {">"} “2 channel, 16 bit, 22050 Hz”
                      “Apply” on the bottomright
                    </li>
                  </ul>
                </div>
              </Text>
            </div>
          </AccordionItem>
          <AccordionItem
            title={<span className="text-xl">3) Calibration</span>}
          >
            <div className="pb-10 px-4">
              <Text h4>Recording the Airflow</Text>
              <Text p>
                First, ensure that the rear-panel switches are set to “Modulator
                On.”
                <Text pbold className="pl-4">
                  Airflow Calibrator
                </Text>
                <div className="pl-10">
                  <ul className="list-disc">
                    <p>
                      ➢ Plug airflow transducer into Channel A connector using Y
                      input cable of MS-110.
                    </p>
                    <p>
                      ➢ Open Aeroview and set Airflow low pass filter to 400 Hz.
                    </p>
                    <p>
                      ➢ Select “Calibration” {">"} “Record Airflow Calibration
                      Signal” from the menu.
                    </p>
                    <p>
                      ➢ Turn on Channel A’s Demodulation box and set the record
                      level to 40.
                    </p>
                    <Text className="pl-12">1a. Setting the Zero Level:</Text>
                  </ul>
                </div>
              </Text>
              <br />
            </div>
          </AccordionItem>
          <AccordionItem
            title={<span className="text-xl">4) Data Collection Steps</span>}
          >
            <div className="pb-10 px-4">
              <Text h4>Data Analysis</Text>
              <Text p className="pb-10 pl-4 ">
                <br></br>
                <ol>
                  <li>
                    1. Calibrate both the airflow (Channel A) and pressure
                    (Channel B) as detailed above.{" "}
                  </li>
                  <li>
                    2. Have the subject place the OroNasal mask over his/her
                    nose and mouth.
                  </li>
                  <li>
                    3. Seal any unused transducer-mounting holes with red
                    plastic plugs.
                  </li>
                  <li>
                    4. Initiate recording by selecting “Record” in the “File”
                    pull-down menu or by clicking onthe microphone icon.
                  </li>
                  <li>
                    5. Check if the parameters “Demod Ch A,” “Demod Ch B,” and
                    “Close Recordings” onthe bottom right corner are selected.
                  </li>
                  <li>
                    6. Click on “Set Zero” and the Record button will become
                    active after one or two seconds.
                  </li>
                  <li>
                    7. Click “Record” (or tap on the spacebar) and begin
                    speaking
                  </li>
                  <li>
                    8. When the recording is done, click on Stop (or tap on the
                    spacebar again)
                  </li>
                  <li>9. Repeat Steps 5-7 to collect additional data.</li>
                </ol>
              </Text>
            </div>
          </AccordionItem>
          <AccordionItem
            title={
              <span className="text-xl">
                5) Potential Issues and Troubleshooting
              </span>
            }
          >
            <div className="pb-4 px-4">
              <Text h4>Poor Mask Fit</Text>
              <Text p>
                <div className="pl-10">
                  <ul className="list-disc">
                    <li>
                      Airflow leakage between the mask and participant can
                      result in inaccurate airflow measurements. Refer back to
                      “Mask Application” on p. 2 to ensure proper application
                    </li>
                  </ul>
                </div>
              </Text>
            </div>

            <div className="pb-10 px-4">
              <Text h4>Environment Changes</Text>
              <Text p>
                <div className="pl-10">
                  <ul className="list-disc">
                    <li>
                      Changes in elevation, temperature, and humidity can affect
                      air pressure, mass, volume, density, viscosity, and flow
                      which can impact the pressure sensors of recording
                      instruments and may cause signal drift over the course of
                      an experiment.
                    </li>
                    <li>
                      Calibrate equipment before experiments, especially if
                      environment conditions change significantly between
                      acquisitions, and note ambient conditions before and after
                      recordings.
                    </li>
                    <li>
                      Whenever possible, record in a climate-controlled
                      environment and allow equipment to reach room temperature
                      before calibration.
                    </li>
                  </ul>
                  <br></br>
                </div>
                <Text h4>No Signal on Aeroview Software:</Text>
                <Text p>
                  <div className="pl-10">
                    <ul className="list-disc">
                      <li>
                        This is likely an issue with newer Windows operating
                        systems like Windows 11
                      </li>
                      <li>
                        Go to Settings {">"} System {">"} Sound {">"} Properties
                      </li>
                      <li>Turn off “Audio enhancements”</li>
                    </ul>
                  </div>
                </Text>
              </Text>
              <br></br>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Aerodynamics;
