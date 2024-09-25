import Text from "../../../../components/Text";
import CustomLink from "../../../../components/CustomLink";
import powerpoint from "../Downloads/spex.ppt";
const Ling104 = () => {
  return (
    <div>
      <Text pbold className="text-left">
        Ling C104/C204a
      </Text>
      <ul className="px-10 list-disc list-outside">
        <li>
          The usual textbook: K. Johnson (2012){" "}
          <span class="italic">Acoustic and Auditory Phonetics</span>
        </li>
        <li>
          Optional books sometimes ordered: Kent & Read (1992){" "}
          <span class="italic">The Acoustic Analysis of Speech</span>{" "}
          (especially for its chapter on the use of a Klatt synthesizer);
          Ladefoged <span class="italic">Elements of Acoustic Phonetics</span>
        </li>
        <li>
          Link to our page of{" "}
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
          Klatt's 'History of speech synthesis' archive audio clips, hosted in{" "}
          <CustomLink href="https://acousticstoday.org/klatts-speech-synthesis-d/">
            Acoustics Today
          </CustomLink>
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
          the desk drawer in Room 2101B
        </li>
        <li>
          A{" "}
          <CustomLink download href={powerpoint}>
            Powerpoint file
          </CustomLink>{" "}
          of spectrograms to be read from Pat Keating
        </li>
        <li>
          articles we have read in seminar about measurements:{" "}
          <CustomLink href="https://www.sciencedirect.com/science/article/abs/pii/S0167639301000498">
            Vallabha & Tuller 2002
          </CustomLink>{" "}
          on formants; Francis et al. 2003 on VOT
        </li>
        <li>
          Rob Hagiwara's{" "}
          <CustomLink href="https://home.cc.umanitoba.ca/%7Erobh/howto.html">
            Monthly Mystery Spectrogram page
          </CustomLink>{" "}
          at the U. of Manitoba
        </li>
        <li>
          <CustomLink italic href="https://nascl.rc.nau.edu/gramle/">
            Gramle,
          </CustomLink>{" "}
          online spectrogram reading game; see{" "}
          <CustomLink href="https://nascl.rc.nau.edu/gramle-transcription/">
            Gramle transcription
          </CustomLink>{" "}
          , Nothern Arizona University.
        </li>
      </ul>
    </div>
  );
};

export default Ling104;
