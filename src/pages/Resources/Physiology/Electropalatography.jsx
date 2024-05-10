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
            </div>
          </AccordionItem>
          <AccordionItem title="Normal Data Analysis">
            <div className="pb-10 px-4">
              <Text h4>Steps to Analyzing EPG data:</Text>
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
                is assigned its unique number from 1 to 96.
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
              <Text p>
                Assign electrodes regions. For example, if you want to examine
                the contact for the coronal [t] in [to] context but want to
                exclude the contact caused by the coarticulation with the
                following [o], you first make control tokens with the [o]
                articulation (e.g., with [po]) and subtract the [o] contact from
                the [t] contact in the [to] context. This allows you to define a
                region just for [t] exclusively. This kind of process is usually
                done by marking contacted electrodes in the printout of the
                layout of numbered electrodes. Using a text editor, make a DEF
                file.
              </Text>
              <div class="w-full md:w-1/2 p-2">
                <img
                  src="../../../src/components/resouces/EGP_picture.jpeg"
                  alt="epg_picture"
                />
              </div>
              <div class="w-full md:w-1/2 p-2">
                <h1 className="pt-4">
                  Figure 1: Layout of EPG pseudo-palate. An example of regions
                  defined. One can define as many regions (up to 10) as needed,
                  using different or overlapping areas of the palate.
                </h1>
              </div>
              <Text p className="font-semibold">
                3) Make a .BAT file (batch file)
              </Text>
              <Text p>
                A batch file can run 'Percent.exe' for all the .NSP files you
                specify. On Jasmine, samples are in the the pal\output
                directory.
              </Text>
              <Text p className="font-semibold">
                4) Do Batch Processing
              </Text>
              <Text p>
                For batch processing, the following files should be included in
                the same directory (folder) (or, give appropriate path to each
                file on every line of the batch file):
                <br />
                <br />
                <div className="pl-10">
                  Percent.exe
                  <br />
                  A user file (e.g., Sample.USR)
                  <br />
                  A def file (e.g., Sample.DEF)
                  <br />
                  A batch file (e.g., Sample.BAT)
                  <br />
                  All the NSP files specified in the batch file (X.nsp, Y.nsp,
                  Z.nsp)
                </div>
              </Text>
              <Text p>
                Run the batch file (simply type the name of the batch file in
                the DOS mode inside the directory where the above files are) The
                batch processing will generate two types of files, in the same
                directory as the NSP data files:
                <br />
                <br />
                <div className="pl-10">
                  ASCII files (.EXP files)
                  <br />
                  EXP file for each .nsp file (e.g., X.exp, Y.exp, Z.exp)
                  <br />
                  Numerics of the percent-contact for each regions specified in
                  the course of time
                  <br />
                  Binary files (.TR0, TR1, TR2, TR3.. files)
                  <br />
                  TR0 files: Percent-contact profiles for the FIRST REGION
                  defined
                  <br />
                  TR1 files: Percent-contact profiles for the SECOND REGION
                  defined
                  <br />
                  TR2 files: Percent-contact profiles for the THIRD REGION
                  defined
                  <br />
                  TRn files: Percent-contact profiles for the N+1th REGION
                  defined
                  <br />
                </div>
              </Text>
              <Text p className="font-semibold">
                5) Make a configuration file for CSL (.cfg file)
              </Text>
              <Text p>
                A special configuration file should be used for the display of
                PALATE and Percent-contact Profiles
              </Text>
              <Text p className="font-semibold">
                6) Analyze the data using CSL
              </Text>
              <Text p>
                Place .cfg and key files in the folder together with other files
                (.nsp, tr0, exp...) <br />
                Run CSL (type 'CSL' inside the working folder) <br />
                Type 'run ThreeTR.cfg' (for example); this will bring you the
                screen for EPG analysis <br />
                <br />
                Note that EPG data can be analyzed using MultiSpeech, but we
                have usually used CSL due to the convenience of the settings
                that have already been made for CSL. But certainly one can use
                MultiSpeech.
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
        </Accordion>
      </div>
    </div>
  );
};

export default Electropalatography;
