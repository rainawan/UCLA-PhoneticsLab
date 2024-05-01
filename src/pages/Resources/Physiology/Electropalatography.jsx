import { Accordion, AccordionItem, Divider } from "@nextui-org/react";
import Text from "../../../components/Text";

const Electropalatography = () => {
  return (
    <div>
      <div className="pt-10">
        <Text h3>Electropalatography</Text>
        <Accordion variant="shadow">
          <AccordionItem title="I. Basic Experimental Steps to Follow">
            <div className="pb-10 px-4">
              <Text h4>1) Get Used to Psuedo-Palate.</Text>
              <Text p>
                We usually have our speaker wear his or her pseudo-palate to get
                used to it; the more the better, but usually for an hour of
                normal activity to accommodate and diminish any salivation
                response (Byrd et al. 1995).
              </Text>
              <Text h4>2) Perform the Experiment.</Text>
              <Text p>
                For recording, we need two pieces of hardware, CSL (for audio)
                and the Palatometer, at the same time, which is the normal setup
                on Jasmine now in the Physiology Lab (2101E).
              </Text>
              <Text p className="font-semibold">
                Detailed procedures of data collection:
              </Text>
              <Text p>
                • Have your subject wear his/her pseudo-palate.
                <br />
                • Turn off the Palatometer, attach a grounding electrode to the
                speaker (which can be found in 2101P, the 'cool' room), connect
                the pseudo-palate to the Palatometer, and turn on the
                Palatometer.
                <br />
                • When ready to collect the data, run "pal.exe" (by typing "pal"
                - you don't have to be in the directory where the program is,
                which is also "pal"), and do three steps under the 'setup' menu
                on the screen: <br />
                <br />
                (1) Choose the number of users
                <br />
                (2) Choose a user name (a user file such as PKEATNG1.USR,
                THCHO.USR) for each user (back-ups of these files are on a disk
                kept near the computer, and Pat and Henry both have copies);
                <br />
                (3) Check the sensitivity, by turning the small knob while
                subject talks until the peak value is in the preferred range.
              </Text>
              <Text p className="font-semibold">
                Note about choosing a channel:
              </Text>
              <Text p>
                There are two channels to which two pseudo-palates can be
                connected at the same time. (This normally allows the clinician
                to demonstrate a particular articulatory action for the client
                to imitate.) The default setting is to use Channel 1 when there
                is only one speaker (which is our normal case), but it is
                possible that some older pseudo-palates may work better with the
                Channel 2 connetion pins. If you want to use Channel 2, you have
                to go to the 'setup' menu and choose it, using the 2 users/large
                views.
              </Text>
              <Text p className="font-semibold">
                Record prepared speech materials:
              </Text>
              <Text p>
                Caution: Since the "pal" program runs under DOS, it can capture
                data for only about 3 seconds. So, researchers should design
                their speech corpus accordingly.
              </Text>
              <Text p className="font-semibold">
                Two options for the audio signal:
              </Text>
              <Text p>
                One is to use a close-talking head-mounted mike in the
                Physiology Lab (not kept there, but ask Henry). With this set-up
                you can run an experiment at any time without special
                preparation or extra help. It should be remembered that this
                room is not sound-treated in any way. Thus, it is recommended to
                use a close-talking head-mounted mike. <br />
                <br />
                The other option is to have the speaker in the sound booth. This
                gives the best sound, but you must arrange it in advance with
                Henry, since all the equipment needs to be moved to the general
                lab. The Palatometer also must go into the booth, and the booth
                microphone must be connected to Jasmine's CSL. Also, it may
                require an additional experimenter: one person to operate the
                program on Jasmine, and one person who can see and signal to the
                subject in the sound booth.
              </Text>
              <Text h4>3) Analyze the Data</Text>
              <Text p>
                The Palatometer manual contains plenty of information on
                displaying data frames, etc., and on its interactive version of
                the region definition/percent analysis routine. But the DOS
                version of this routine, developed here, is what we mostly use,
                because it allows batch processing and ASCII, as well as binary,
                output. Experienced people include: Pat K., Taehong C., Sahyang
                K.. For a description of indices defined on percent-contact
                data, see Byrd, Flemming, Mueller & Tan (1995), Using regions
                and indices in EPG data reduction, J. Sp. Hear. Res. 38,
                821-827.
              </Text>
              <Text p className="font-semibold">
                Steps to Analyzing EPG data:
              </Text>
              <Text p className="font-semibold">
                1) Obtain 'Percent.exe' file.
              </Text>
              <Text p>
                This software, commissioned by Dani Byrd, calculates contact
                profiles for user-defined regions of the palate. On Jasmine, it
                is in the pal\output\ directory FORMAT: PERCENT [.nsp file name]
                [.def file name] [.usr file name]
              </Text>
              <Text p className="font-semibold">
                2) Create a .DEF file
              </Text>
              <Text p>
                First, Define regions as needed. The figure below, for example,
                shows three regions defined: Front Region, Back region, and the
                entire region (Front + Back). Note that you can define as many
                regions (up to 10) as needed, using different and/or overlapping
                areas of the palate. There are 96 electrodes and each electrode
                is assigned its unique number from 1 to 96. Assign electrodes
                regions.
              </Text>
              <div className="flex flex-wrap">
                <div class="w-full md:w-1/3 p-2">
                  <img
                    src="../../../src/components/resouces/EPG_default.gif"
                    alt="epg_default"
                  />
                </div>
                <div class="w-full md:w-1/3 p-2">
                  <img
                    src="../../../src/components/resouces/EPG_special.gif"
                    alt="epg_special"
                  />
                </div>
              </div>
              <Text p className="font-semibold">
                3) Make a .BAT file (batch file)
              </Text>
              <Text p className="font-semibold">
                4) Do Batch Processing
              </Text>
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

export default Electropalatography;
