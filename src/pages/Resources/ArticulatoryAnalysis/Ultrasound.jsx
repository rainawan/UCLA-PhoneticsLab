import { Accordion, AccordionItem } from "@nextui-org/react";
import Text from "../../../components/Text";
import demo_setup from "../../../components/resources/ultrasound/demo_setup.jpeg";
import hardware_setup_1 from "../../../components/resources/ultrasound/hardware_setup_1.jpeg";
import hardware_setup_2 from "../../../components/resources/ultrasound/hardware_setup_2.png";
import hardware_setup_3 from "../../../components/resources/ultrasound/hardware_setup_3.png";
import hardware_setup_4 from "../../../components/resources/ultrasound/hardware_setup_4.jpeg";
import imaging_1 from "../../../components/resources/ultrasound/imaging_1.png";
import imaging_2 from "../../../components/resources/ultrasound/imaging_2.png";
import imaging_3 from "../../../components/resources/ultrasound/imaging_3.png";
import imaging_4 from "../../../components/resources/ultrasound/imaging_4.png";

const Ultrasound = () => {
  return (
    <div>
      <div className="pt-10">
        <Text h3>Ultrasound</Text>
        <Accordion variant="shadow">
          <AccordionItem title="Introduction">
            <div className="pb-10 px-4">
              <Text h4>Introduction</Text>
              <Text p>
                Instructions for using the lab's ultrasound facilities are split
                into two parts. This page covers the logistics of what you need
                to set up to collect data or run in-class demos of speech
                articulation as well as the human interaction element: how to
                adjust the stabilization headset and probe to maximize
                participant comfort while ensuring a good view into the oral
                cavity.
                <br />
                <br />
                Our hardware consists of the Telemed MicrUs, the Telemed MC4 or
                MC10 convex probes, a USB audio interface, and a few connector
                cables. This page also serves as a guide to the accompanying
                software Echo Wave II, a license for which is required for full
                functionality of the MicrUs, and gives a brief overview of how
                to change settings in the device using the software.
                <br />
                <br />
              </Text>
              <Text h4>Work Stations</Text>
              <Text p>
                Collecting data or running a demo requires a suitable work
                station. One data acquisition laptop is currently configured to
                communicate with the ultrasound device. If you would like
                another device to be configured for collecting ultrasound data,
                please contact Matt or Henry. If you plan to collect ultrasound
                data or use the device for an in-class demo, be sure to reserve
                the ultrasound device and laptop in addition to whatever lab
                room you need to book.
                <br />
                <br />
              </Text>
              <Text h4>Software Overview</Text>
              <Text p>
                Demos, and some configuration before data collection, are done
                in Echo Wave II, which is proprietary software provided by
                Telemed, the probe manufacturer. This is only installed on the
                data collection laptop at the moment.
                <br />
                <br />
                There are two ways to collect ultrasound data. The Articulate
                Assistant Advanced (AAA) software provided with the ultrasound
                device comes with its{" "}
                <a
                  href="https://www.youtube.com/channel/UCENAa96efGbUDjsiGaQ9PqQ/videos"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  own tutorials
                </a>
                . There are numerous data processing options that are available
                for data collected and stored using AAA. However, the data
                collection process itself is very streamlined and is mainly
                designed with SLP clinicians in mind, so it may not work for all
                experimental designs.
                <br />
                <br />
                The lab's Python utilities are a good deal more flexible since
                they are based on the{" "}
                <a
                  href="https://osdoc.cogsci.nl/"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  OpenSesame
                </a>{" "}
                experiment GUI. OpenSesame is free and open-source, and it has
                the advantage of being written in Python (which is also free),
                which means we can easily define custom code blocks for
                communicating with the ultrasound device based on various
                triggers. A full tutorial for OpenSesame is beyond the scope of
                this documentation, but it has a relatively large user base and
                a lot of useful online discussion of common issues, as well as
                extensive documentation.
                <br />
                <br />
                Several template OpenSesame experiments can be found{" "}
                <a
                  href="https://ucla.account.box.com/login?redirect_url=https%3A%2F%2Fucla.app.box.com%2Fs%2Fzfexhunqf8627id2d7g6s6bj1zfos713"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  here
                </a>
                . In OpenSesame, you can customize these script templates to
                suit your own needs, either using the GUI or by directly editing
                the Python code in various sections. Unfortunately, you will
                only be able to run the script on a Windows computer which the
                ultrasound probes are connected to.
              </Text>
            </div>
          </AccordionItem>
          <AccordionItem title="Data Collection">
            <div className="pb-10 px-4">
              <Text h4>Equipment</Text>
              <Text p>
                To record the ultrasound signal and align it to audio, an
                exchange of information between the ultrasound device, a USB
                audio device, and the computer needs to take place. Once you've
                found a suitable workstation, you'll need to set up your
                hardware and start the communication between the ultrasound
                device and the workstation.
                <br />
                <br />
                For this process you will need these supplies, which are all
                stored in the camera case.
                <div className="pl-10">
                  <ul className="list-disc">
                    <li>Micro unit (small, flat silver box)</li>
                    <li>
                      PStretch unit (stubby silver box with black bumpers)
                    </li>
                    <li>Scarlett 2i2 USB audio interface</li>
                    <li>
                      Three unattached cables: copper-colored and long; red;
                      silver
                    </li>
                    <li>One ultrasound probe of your choice</li>
                  </ul>
                </div>
                <br />
              </Text>
              <Text h4>Hardware Setup</Text>
              <Text p>
                Hardware setup should take place before headset fitting, since
                the speaker's presence is not needed and arranging all the
                materials can be somewhat time consuming. This is documented on
                the other page and has its own material requirements.
                <div className="pl-10">
                  <ul className="list-decimal">
                    <li>
                      Connect the Focusrite Scarlett 2i2 ("Scarlett") to your
                      computer using the red USB cable (port is on back of
                      Scarlett).
                    </li>
                    <li>
                      Connect your microphone to Scarlett using the XLR port
                      (see picture below).
                      <div class="flex justify-center w-full">
                        <img
                          src={hardware_setup_1}
                          alt="hardware_setup_1"
                          className="md:w-1/2 p-2 shadow-md"
                        />
                      </div>
                    </li>
                    <li>
                      Turn on the Scarlett's phantom power by pressing the
                      button next to the XLR port (see picture above). It will
                      light up red when on.
                    </li>
                    <li>
                      Connect the PStretch unit (small box with black "bumpers"
                      on either end; see picture below) to the Scarlett's 1/4"
                      headphone jack using the 1/4" headphone to BNC cable. The
                      BNC end of this cable must be attached to the PStretch's
                      SYNC OUT port (this is labeled on the back of the device;
                      on the left in the image below).
                      <div class="flex justify-center w-full">
                        <img
                          src={hardware_setup_2}
                          alt="hardware_setup_2"
                          className="md:w-1/2 p-2 shadow-md"
                        />
                      </div>
                    </li>
                    <li>
                      Attach the BNC to mini BNC cable (copper-colored and more
                      like a wire) to the PStretch's SYNC IN port. The larger
                      end of the cable attaches to the PStretch; you will need
                      to twist the cable about 90 degrees clockwise to lock it
                      in into place. The cable we use nowadays is longer than
                      the one in the pictures here.
                    </li>
                    <li>
                      Attach the other end of the BNC to mini BNC cable to the
                      Micro's "Frame Strobe" mini BNC port (pictured below).
                      There is a small hex nut attached to the mini BNC end that
                      you have to tighten by hand.
                      <div class="flex justify-center w-full">
                        <img
                          src={hardware_setup_3}
                          alt="hardware_setup_3"
                          className="md:w-1/2 p-2 shadow-md"
                        />
                      </div>
                    </li>
                    <li>
                      Double-check that all connections to and from the PStretch
                      are to and from the correct ports, as shown below, and all
                      connections are fully "clicked" in. This is important!
                      Most problems with data collection are due to bad
                      connections to or from the PStretch, or due to a loose
                      connection in one of the headphone jacks. If something
                      doesn't look right, review steps 5-7 above.
                    </li>
                    <li>
                      Finish making the connections to the laptop: plug the
                      PStretch into another USB port on the computer using the
                      black USB cable that is attached to the unit. Using the
                      silver mini USB to USB cable, connect the Micro's mini USB
                      port to another USB port on your computer. Note that you
                      should use the "first" USB connection on the cable (the
                      one which also has another USB plug coming off of it),
                      which is pointing towards the top of the image below.
                      <div class="flex justify-center w-full">
                        <img
                          src={hardware_setup_4}
                          alt="hardware_setup_4"
                          className="md:w-1/2 p-2 shadow-md"
                        />
                      </div>
                    </li>
                    <li>
                      Finally, take your desired probe out of storage and attach
                      it to the multi-pin socket on the front side of the Micro.
                    </li>
                  </ul>
                </div>
                <br />
                <br />
              </Text>
              <Text h4>Imaging settings</Text>
              <Text p>
                The imaging settings are adjusted in Echo Wave II. We will
                generally load preset combinations of settings into Echo Wave
                II. This is ideally done before you fit the stabilization
                headset and probe to your speaker.
                <div class="flex justify-center w-full">
                  <img
                    src={imaging_1}
                    alt="imaging_1"
                    className="md:w-1/2 p-2 shadow-md"
                  />
                </div>
                <br />
                <div className="pl-10">
                  <ul className="list-decimal">
                    <li>
                      Run Echo Wave II with the desired probe connected. This
                      often takes a few seconds to start up.
                    </li>
                    <li>
                      Check the settings. Echo Wave II automatically uses the
                      settings that were used in the last session for that
                      probe, whether or not they were a preset. Four presets are
                      available, two for each of the two probes. These are
                      available as .dat files stored on the data collection
                      laptop, and which can also be downloaded{" "}
                      <a
                        href="https://ucla.account.box.com/login?redirect_url=https%3A%2F%2Fucla.app.box.com%2Fs%2Fzfexhunqf8627id2d7g6s6bj1zfos713"
                        className="text-blue hover:underline"
                        target="_blank"
                      >
                        here
                      </a>
                      .
                      <div className="pl-10">
                        <ul className="list-disc">
                          <li>
                            Normal setting: records at 82 frames per second;
                            full field of view. Good for most speech sounds and
                            study questions.
                          </li>
                          <li>Large probe (Telemed MC4): telemed-MC4.dat</li>
                          <li>Small probe (Telemed MC10): telemed-MC10.dat</li>
                          <div class="flex justify-center w-full">
                            <img
                              src={imaging_2}
                              alt="imaging_2"
                              className="md:w-1/2 p-2 shadow-md"
                            />
                          </div>
                          <li>
                            Faster setting: about 120 frames per second; smaller
                            field of view (60 percent of normal). Best used for
                            flaps, taps, and other similarly quick
                            (sub)segments, or where especially fine temporal
                            detail is needed for other reasons.
                          </li>
                          <li>
                            Large probe (Telemed MC4): telemed-MC4-60pct.dat
                          </li>
                          <li>
                            Small probe (Telemed MC10): telemed-MC10-60pct.dat
                            <div class="flex justify-center w-full">
                              <img
                                src={imaging_3}
                                alt="imaging_3"
                                className="md:w-1/2 p-2 shadow-md"
                              />
                            </div>
                          </li>
                          <li>
                            Depending on your needs, leave the existing preset
                            in place or load a new preset by importing a .dat
                            file. Click the small fan icon in the upper left of
                            the screen (near the probe name in the upper left
                            corner; see image above). The fan icon will produce
                            a drop-down menu when clicked; click "Presets", then
                            "Apply Settings from File" at bottom left.
                            <div class="flex justify-center w-full">
                              <img
                                src={imaging_4}
                                alt="imaging_4"
                                className="md:w-1/2 p-2 shadow-md"
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                <br />
                If needed, you can also create custom imaging settings and save
                them as a new .dat file. However, the presets generally work
                well and you will probably not need to reinvent the wheel here.
                <br />
                <br />
              </Text>
              <Text h4>Probe stabilization</Text>
              <Text p>
                With Echo Wave II open to check the probe position, you will now
                want to put the stabilization helmet on your speaker, then put
                the probe into position in the stabilization headset. After you
                are satisfied with your probe placement, you must close Echo
                Wave II to collect data using the experiment software. Whatever
                settings you were using here are the ones that will be used
                during recording, even though Echo Wave II is not open.
                <br />
                <br />
              </Text>
              <Text h4>Software 2: the experiment script</Text>
              <Text p>
                To start your OpenSesame session, you will need to do the
                following in order. Before you start you should turn off the
                device's wifi (which makes the connection to the ultrasound more
                stable), and make sure that the computer is not scheduled to
                restart for software updates.
                <br />
                <br />
                <div className="pl-10">
                  <ul className="list-decimal">
                    <li>
                      Open the Anaconda Prompt and type in the following:
                      C:\Users\linguist\Anaconda2\Scripts\opensesame.exe. This
                      will open OpenSesame with the required permissions. Using
                      this command in another terminal will not work.
                    </li>
                    <li>
                      A blank experiment loads by default. Open your experiment
                      file of choice. We keep several template experiments in
                      the Box folder{" "}
                      <a
                        href="https://ucla.account.box.com/login?redirect_url=https%3A%2F%2Fucla.app.box.com%2Fs%2Fzfexhunqf8627id2d7g6s6bj1zfos713"
                        className="text-blue hover:underline"
                        target="_blank"
                      >
                        here
                      </a>
                      ; these can be adapted for your needs.
                    </li>
                    <li>
                      Before running the experiment, open the Windows PowerShell
                      and type in: C:\echobserv.200.exe, which starts up the
                      communication between the ultrasound device and the
                      collection laptop's hard drive.
                    </li>
                    <li>
                      At this point, run your experiment. A small MATLAB console
                      will appear, showing a live video of the ultrasound
                      signal. You cannot close this window, since it will cut
                      off communication with the ultrasound. Since you will need
                      to use this to monitor the swallow task and bite plate
                      task, we suggest clicking on the double, small green arrow
                      (Run in Window) instead of the large green arrow (Run
                      Full-screen). This will open up a moveable window instead
                      of full-screening the experiment. Once the landmark tasks
                      are done, you should cover the MATLAB window up with the
                      experiment window so that the participant can't see their
                      own articulations.
                    </li>
                  </ul>
                </div>
                <br />
                The experiment template contains code which displays "slides" to
                the participant for three types of events. You will generally
                want these to happen in this order:
                <br />
                <br />
                <div className="pl-10">
                  <ul className="list-decimal">
                    <li>
                      Your experiment will probably begin with the swallow task
                      and bite plate task, which we use to get more details on
                      the recording session's physical frame of reference. These
                      each have their own script items which can be repeated a
                      desired number of times. Essentially, each triggers an
                      ultrasound recording that lasts from a starting keypress
                      to an ending keypress, allowing the participant to take as
                      long as needed.
                    </li>
                    <li>
                      Slides familiarizing the participant with the study
                      usually occur after the swallow and bite plate tasks.
                      These advance as the participant clicks through.
                    </li>
                    <li>
                      Finally, most of the runtime is taken up by a loop which
                      runs experiment blocks a specified number of times. Trials
                      can be randomized. These are again self-paced, with the
                      recording restarting whenever the participant clicks
                      through to indicate they have finished reading the
                      presented item.
                    </li>
                  </ul>
                </div>
                <br />
                We suggest providing a break every 10-20 trials, between blocks.
                To avoid fatiguing participants, we also don't suggest trying to
                record more than 500-600 sentence-length trials in total. This
                takes about 30 minutes depending on the participant's speed, and
                spending much longer than that in the headset can be fatiguing.
              </Text>
            </div>
          </AccordionItem>
          <AccordionItem title="In-class Demos">
            <div className="pb-10 px-4">
              <Text p>
                Displaying a live feed of someone's tongue with the ultrasound
                device is much simpler than doing data collection. The Echo Wave
                II software is designed for just this task in clinical or
                diagnostic settings, and the probe usually doesn't need to be
                stabilized. If Echo Wave II is opened full-screen and projected
                at the front of the room or shared over Zoom, students can
                usually make out all the relevant details of lingual
                articulation.
              </Text>
              <Text h4>Setup</Text>
              <Text p>
                <div className="pl-10">
                  <ul className="list-decimal">
                    <li>
                      Connect the ultrasound device (the small, silver box) to
                      the laptop using the silver mini-USB to USB cable. You
                      should use the "first" USB plug rather than the second one
                      branching off it. See picture below.
                      <div class="flex justify-center w-full">
                        <img
                          src={demo_setup}
                          alt="demo_setup"
                          className="md:w-1/2 p-2 shadow-md"
                        />
                      </div>
                    </li>
                    <li>
                      Select the probe you would like to use and connect it to
                      the multi-pin socket on the other end of the ultrasound
                      device.
                    </li>
                    <li>
                      Double-click the Echo Wave II 2.6.2 shortcut on the
                      desktop and allow it to run. Start-up takes a few seconds.
                    </li>
                  </ul>
                </div>
                <br />
                From here, follow the instructions for orienting the probe on
                yourself or a volunteer speaker, minus the stabilization headset
                (which is not usually needed for simple demos).
                <br />
                <br />
              </Text>
              <Text h4>Demo tips</Text>
              <Text p>
                Ultrasound is useful for visualizing lingual articulation but
                cannot visualize much else. Since the probe will probably not be
                stabilized, height or degree of constriction will also be hard
                to eyeball. The most useful demos focus on big, visible
                articulations, which include:
                <br />
                <br />
                <div className="pl-10">
                  <ul className="list-disc">
                    <li>
                      Showing what various complex lingual segments look like,
                      such as flaps, taps, /l/, /ɹ/, or other liquids that
                      volunteer speakers might produce. Vibration of the tongue
                      tip in the trill [r] is also often visible in the signal.
                    </li>
                    <li>
                      If you are demoing for Ling 103, ultrasound is great for
                      troubleshooting students' production of clicks, as well as
                      retroflex, palatal, uvular, and pharyngeal places of
                      articulation. You can produce these yourself to
                      demonstrate or get a native speaker of a language which
                      has these contrasts (Arabic, Tamil, etc) to volunteer.
                    </li>
                    <li>
                      Connected speech is generally fun to watch. Try simply
                      recording yourself while explaining what's going on at a
                      normal speaking rate.
                    </li>
                  </ul>
                </div>
                <br />
                The ultrasound will run continuously unless you hit the "freeze"
                button, which is in the lower left corner of the screen. Freeze
                the signal if you are not recording something in motion, or if
                you need a snapshot of a particular tongue configuration.
              </Text>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Ultrasound;
