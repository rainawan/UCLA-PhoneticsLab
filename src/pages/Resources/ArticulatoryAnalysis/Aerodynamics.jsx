import { Accordion, AccordionItem } from "@nextui-org/react";
import Text from "../../../components/Text";
import figure1 from "../../../components/resources/aerodynamics/figure1.png";
import figure2 from "../../../components/resources/aerodynamics/figure2.png";
import figure3 from "../../../components/resources/aerodynamics/figure3.png";
import figure4 from "../../../components/resources/aerodynamics/figure4.png";
import figure5 from "../../../components/resources/aerodynamics/figure5.png";

import CustomLink from "../../../components/CustomLink";

const Aerodynamics = () => {
  return (
    <div>
      <div>
        <Text h3>Aerodynamics</Text>
        <Accordion variant="shadow" selectionMode="multiple">
          <AccordionItem
            title={<span className="text-xl">1) Introduction</span>}
          >
            <div className="pb-10 px-4">
              <Text h4>Introduction</Text>
              <Text p>
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
                <div className="pl-4">
                  <Text pbold>Equipment Required</Text>
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
                    ☐ At least one OroNasal mask, available in two standard
                    sizes: adult size and child size
                  </p>
                  <p>
                    ☐ Red plastic plugs for plugging any open
                    transducer-mounting holes in an OroNasal mask
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
                </div>
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
                  <div class="flex justify-center w-full">
                    <img
                      src={figure1}
                      alt="figure1"
                      className="md:w-1/2 p-2 shadow-md"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Text p className="md:w-1/2 text-center italic">
                      Figure 1: Connections between MS-110 unit, computer, and
                      transducers
                    </Text>
                  </div>
                </div>
              </Text>

              <Text h4>Maintenance and Preparation of OroNasal Masks:</Text>
              <Text p>
                <div className="pl-10">
                  <ul className="list-disc">
                    <li>
                      Before use, visibly inspect the mask to ensure that it is
                      not dirty, obstructed, or damaged.
                    </li>
                    <li>
                      Clean, dirty and/or obstructed area(s) with soap and water
                      and dry with a stream of clean air.
                    </li>
                    <li>
                      Extensively damaged and/or perforated components and masks
                      should be replaced.
                    </li>
                    <li>
                      Before application, sterilize the surfaces of the mask
                      with alcohol wipes.
                      <div className="pl-4">
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
                      One transducer is laterally located which records oral
                      pressure measurements.
                    </li>
                    <li>
                      One is located in the handle whose orientation can be
                      modified to record oral or nasal airflow.
                      <div className="pl-4">
                        - If the handle is oriented over the transducer, it will
                        record oral airflow. The opposite orientation will
                        record nasal airflow.
                      </div>
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

                  <div class="flex justify-center w-full">
                    <img
                      src={figure2}
                      alt="figure2"
                      className="md:w-1/2 p-2 shadow-md"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Text p className="md:w-1/2 text-center italic">
                      Figure 2: Front view of adult-sized Oro- Nasal mask with
                      attached transducers
                    </Text>
                  </div>
                </div>
              </Text>
              <br></br>
              <Text h4>Mask Application: </Text>
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
                      through gaps between the periphery of the mask and skin.
                    </li>
                    <li>
                      To maintain a tight seal, hold the rubber handle in one
                      hand and apply pressure against the face.
                    </li>
                  </ul>
                  <br></br>

                  <div class="flex justify-center w-full">
                    <img
                      src={figure3}
                      alt="figure3"
                      className="md:w-1/2 p-2 shadow-md"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Text p className="md:w-1/2 text-center italic">
                      Figure 3: Application of OroNasal mask with unused hole
                      sealed by plug
                    </Text>
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
                    <li>Double-left-click on the iMic USB audio system</li>

                    <li>
                      Select “Advanced” {">"} “2 channel, 16 bit, 22050 Hz”
                      “Apply” on the bottom right window.
                    </li>
                  </ul>
                </div>
              </Text>
            </div>
          </AccordionItem>
          <AccordionItem
            title={<span className="text-xl">3) Calibration</span>}
          >
            <div className=" px-4">
              <Text p>
                First, ensure that the rear-panel switches are set to “Modulator
                On.”
                <Text pbold className="pl-4">
                  Airflow Calibrator
                </Text>
                <div className="pl-10">
                  <ul className="pl-10">
                    <li>
                      ➢ Plug airflow transducer into Channel A connector using Y
                      input cable of MS-110.
                    </li>
                    <li>
                      ➢ Open Aeroview and set Airflow low pass filter to 400 Hz.
                    </li>
                    <li>
                      ➢ Select “Calibration” {">"} “Record Airflow Calibration
                      Signal” from the menu.
                    </li>
                    <li>
                      ➢ Turn on Channel A’s Demodulation box and set the record
                      level to 40.
                      <ul className="pl-10">
                        <li>
                          <Text pbold>1a. Setting the Zero Level:</Text>
                        </li>
                        <ul className="pl-10">
                          <li>- Check the signal levels:</li>
                          <ul className="pl-10">
                            - The red bar should cover just less than half of
                            the window and the green meter should have four
                            bars.
                          </ul>
                        </ul>
                      </ul>
                      <ul className="pl-10">
                        <li>
                          <Text pbold>1b. Setting the Gain Adjust:</Text>
                        </li>
                        <ul className="pl-10">
                          <li>
                            -{" "}
                            <span className="underline">
                              Check the red bar:
                            </span>{" "}
                            When speaking, the bar should retain its red color
                            and not reach the top and bottom of the record
                            window. Refer to Figure 4 below:
                          </li>
                        </ul>
                      </ul>
                    </li>
                  </ul>

                  <div class="flex justify-center w-full py-4">
                    <img
                      src={figure4}
                      alt="figure4"
                      className=" p-2 shadow-md"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Text p className="md:w-1/2 text-center italic">
                      Figure 4: Gain Adjust Levels
                    </Text>
                  </div>
                </div>
                <Text pbold className="pl-4">
                  Pressure Calibrator
                </Text>
                <div className="pl-10">
                  <ul className="pl-10">
                    <li>
                      ➢ Plug the pressure transducer into Channel B using the Y
                      input cable of MS-110.
                    </li>
                    <li>
                      ➢ Open Aeroview and select “Record Pressure Calibration”
                      under the “Calibration” top-down menu. Ensure the record
                      level is 35.
                    </li>
                    <li>➢ Set the MS-100 front panel controls for offset.</li>
                    <li>
                      ➢ Lift the syringe plunger with the “Pressure Release”
                      button depressed.
                    </li>
                    <li>
                      ➢ Click on “Set Zero” in the Record window until the
                      Record button is highlighted.
                    </li>
                    <li>
                      ➢ Release the Pressure Release button and depress the
                      plunger until the pressure meter reaches 10 cm H20.
                    </li>
                    <li>
                      ➢ Click “Record” and after one second press and hold the
                      “Pressure Release” button.
                    </li>
                    <li>
                      ➢ Close the Record window after the recording stops.
                    </li>
                    <li>
                      ➢ The airflow after calibration should look similar to
                      that depicted in Figure 5 below:
                    </li>
                  </ul>

                  <div class="flex justify-center w-full py-4">
                    <img
                      src={figure5}
                      alt="figure5"
                      className="md:w-1/2 p-2 shadow-md"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Text p className="md:w-1/2 text-center italic">
                      Figure 5: Airflow display after pressure calibration
                    </Text>
                  </div>
                </div>
              </Text>
            </div>
          </AccordionItem>
          <AccordionItem
            title={<span className="text-xl">4) Data Collection Steps</span>}
          >
            <div className="pb-10 px-4">
              <Text p className="pl-4 ">
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
                    pull-down menu or by clicking on the microphone icon.
                  </li>
                  <li>
                    5. Check if the parameters “Demod Ch A,” “Demod Ch B,” and
                    “Close Recordings” on the bottom right corner are selected.
                  </li>
                  <li>
                    6. Click on “Set Zero” and the Record button will become
                    active after one or two seconds.
                  </li>
                  <li>
                    7. Click “Record” (or tap on the spacebar) and begin
                    speaking.
                  </li>
                  <li>
                    8. When the recording is done, click on Stop (or tap on the
                    spacebar again).
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
                      “Mask Application” on p. 2 to ensure proper application.
                    </li>
                  </ul>
                </div>
              </Text>
            </div>

            <div className="px-4">
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
                        systems like Windows 11.
                      </li>
                      <li>
                        Go to Settings {">"} System {">"} Sound {">"} Properties
                      </li>
                      <li>Turn off “Audio enhancements”.</li>
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
