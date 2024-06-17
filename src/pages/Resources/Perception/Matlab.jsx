import Text from "../../../components/Text";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Matlab = () => {
  return (
    <div>
      <div className="pt-10">
        <Text h3>Matlab</Text>
        <Accordion variant="shadow">
          <AccordionItem title="Introduction">
            <div className="pb-10 px-4">
              <Text p>
                For the benefit of future users, we ask that a brief description
                of working scripts used in the lab be sent to the Lab Director for posting
                here.
                <br />
                <br />
                Many of the perception experiments run in the lab are scripted
                in Matlab. Henry can provide you with custom scripts for your
                experiments. In addition, this page archives a few past scripts
                that can be used as models. Be aware that these scripts include
                path information and filenames that may need to be adjusted by
                new users, and they often call for text files listing the
                stimulus files to be used in the experiment. Descriptions of
                other experimental scripts are being added as they become
                available. Important update in 2013: There is a new version of
                PsychToolbox which is not compatible with most of our existing
                scripts. Gradually, all the computers in the lab are being
                updated with the new version of PsychToolbox. Existing scripts
                need to be updated before they can be used with the new version.
                <br />
                <br />
              </Text>
            </div>
          </AccordionItem>
          <AccordionItem title="Downloadable Scripts">
            <div className="pb-10 px-4">
              <Text pbold>Scripts:</Text>
              <Text p>
                Stephen Wilson's{" "}
                <a
                  href="/vsr.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  script for a visual sort experiment
                </a>
                , for Christina Esposito and Jody Kreiman. This experiment has
                subjects sort 25 audio files into 2 bins, after practicing with
                10 practice audio files. Subjects must listen to and sort every
                file.
                <br />
                <br />
                The audio filenames (practice and real) are listed inside the
                script itself, so either name your files accordingly, or edit
                the script. The output file for each subject reports how each
                file was sorted, and how many times the subject listened to it.
                To run this script, the PsychToolbox must be installed along
                with Matlab.
                <br />
                <br />
                An identification task with on-screen picture responses: "
                <a
                  href="/dlxexp1a.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  dlxexp1a.m
                </a>
                " (by Stephen Wilson, for Pat Keating and Frank Manis).This
                script was for use with child subjects, so it includes some
                visual reinforcement along the way. It assumes a file of
                pictures and a file of WAV audio stimuli.
                <br />
                <br />A discrimination task for children: "
                <a
                  href="/dlxexp1b.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  dlxexp1b.m
                </a>
                " (again by Stephen Wilson, for Pat Keating and Frank Manis) .
                Again, for use with child subjects. The calls to the audio
                stimulus files are specific to those filenames.
                <br />
                <br />A gating task for children: "
                <a
                  href="/dlxexp4.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  dlxexp4.m
                </a>
                " ( again by Stephen Wilson, for Pat Keating and Frank Manis),
                along with its associated{" "}
                <a
                  href="/stimulus_list.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  stimulus list text file
                </a>
                .<br />
                <br />A target-word recognition task (is this stimulus an
                instance of the target word, or not?) for children: "
                <a
                  href="/dlxexp5.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  dlxexp5.m
                </a>
                " (again by Stephen Wilson, for Pat Keating and Frank Manis),
                along with its associated{" "}
                <a
                  href="/stimulus_list2.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  stimulus list text file
                </a>
                .
              </Text>
            </div>
          </AccordionItem>
          <AccordionItem title="Descriptions">
            <div className="pb-10 px-4">
              <Text pbold>
                Descriptions of existing scripts available from Henry (to be
                modified for your needs):
              </Text>
              <Text p>
                <div className="pl-10">
                  <ul className="list-disc">
                    <li>
                      Display a sentence in a fixed-rate moving window and
                      record the subject saying the sentence back
                    </li>
                    <li>
                      A phoneme monitoring task, during which listeners hear a
                      sequence of words and are asked to press a button whenever
                      they hear a specific sound (here, [t]). The experiment is
                      preceded by a practice round with feedback.
                    </li>
                    <li>
                      A word-learning study, including exposure phase (alien
                      pictures and auditory nonwords) and test phases (auditory
                      lexical decision, nonword repetition, picture
                      identification, picture naming w/ and w/o feedback)
                    </li>
                    <li>A passive listening task and reading words aloud</li>
                    <li>A gating task for adults</li>
                    <li>
                      Subjects hear a sentence (audio file) that has a topic
                      word in various conditions, they rank the feasibility of
                      the sentence, and if they think it's feasible, they are
                      asked to produce the sentence, which is recorded. The
                      program does a random ordering of sentences for each
                      subject and returns the ranking of each sentence, the
                      timing of the response, and the audio file of the
                      production
                    </li>
                    <li>
                      A forced-choice identification task, with RTs measured
                      from onset of auditory stimuli
                    </li>
                    <li>
                      An auditory lexical decision task (preceded by priming
                      stimuli) for adults
                    </li>
                  </ul>
                </div>
                <br />
                More archival scripts, some of them quite preliminary, along
                with audio and picture files for those experiments, are
                available on the{" "}
                <a
                  href="https://linguistics.ucla.edu/people/keating/dyslexia/dysweb2.htm"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  archival page
                </a>{" "}
                for the dyslexia project.
              </Text>
            </div>
          </AccordionItem>
        </Accordion>

       
      </div>
    </div>
  );
};

export default Matlab;
