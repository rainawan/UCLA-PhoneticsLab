import Text from "../../../../components/Text";
import CustomLink from "../../../../components/CustomLink";
import powerpoint from "../Downloads/spex.ppt";
const Ling104 = () => {
  return (
    <div>
      <Text className="text-left">Ling 104</Text>
      <ul className="px-10 list-disc list-outside">
        <li>
          The usual textbook: K. Johnson (2012) Acoustic and Auditory Phonetics
        </li>
        <li>
          optional books sometimes ordered: Kent & Read (1992) The Acoustic
          Analysis of Speech (especially for its chapter on the use of a Klatt
          synthesizer); Ladefoged Elements of Acoustic Phonetics
        </li>
        <li>
          link to our page of{" "}
          <CustomLink href="https://phonetics.linguistics.ucla.edu/facilities/acoustic/praat.html">
            Praat resources{" "}
          </CustomLink>
        </li>
        <li>
          Sensimetrics's CD "Speech Production and Perception I" (copies of
          no-longer-available CD are in the lab's secret teaching materials
          drawer) (this one not in the IML, and copies formerly in the CLICC
          appear to be lost)
        </li>
        <li>
          Automatic Speech Recognition (Kai-Fu Lee/Apple Computer) 1993 video in
          the{" "}
          <CustomLink href="https://media.dymaxion.ca/display/214/wwk770">
            IML
          </CustomLink>
        </li>
        <li>
          Speech Perception, 1997 ASA video by Pat Kuhl on speech perception in
          the{" "}
          <CustomLink href="https://media.dymaxion.ca/display/214/wwk770">
            IML
          </CustomLink>
        </li>
        <li>
          2002 3-DVD set from Caldwell "Human Speech Acoustics", "Human Speech
          Articulation", "Human Speech: source-filter Theory", all in the{" "}
          <CustomLink href="https://media.dymaxion.ca/display/214/wwk770">
            IML
          </CustomLink>
        </li>
        <li>
          "Now Hear This" 1994 video in{" "}
          <CustomLink href="https://media.dymaxion.ca/display/214/wwk770">
            IML
          </CustomLink>{" "}
          on auditory system
        </li>
        <li>
          Sensimetrics's{" "}
          <CustomLink href="https://www.sens.com/products/ai/">
            {" "}
            CD "Auditory Interactivies"
          </CustomLink>{" "}
          (one copy only) - 58 lessons on signal analysis, acoustics, auditory
          perception.
        </li>
        <li>
          "Auditory Demonstrations", 1987CD from IPO/ASA, on the shelf in the
          General Lab
        </li>
        <li>Hartmut Traunmüller's History of speech synthesis</li>
        <li>
          Klatt's sound examples of history of speech synthesis hosted at
          Indiana U. for the Acoustical Society Sami Lemmetty's Text to speech
          demos (including Klatt's illustrations)
        </li>
        <li>
          Larry Rosenblum's{" "}
          <CustomLink href="http://www.faculty.ucr.edu/%7Erosenblu/lab-index.html">
            McGurk demo
          </CustomLink>{" "}
          at UC Riverside
        </li>
        <li>
          Artificial larynx (great for illustrating source-filter theory) is in
          the cabinet in the lab kitchen
        </li>
        <li>
          a{" "}
          <a download href={powerpoint}>
            Powerpoint file
          </a>{" "}
          of spectrograms to be read from Pat Keating
        </li>
      </ul>
    </div>
  );
};

export default Ling104;
