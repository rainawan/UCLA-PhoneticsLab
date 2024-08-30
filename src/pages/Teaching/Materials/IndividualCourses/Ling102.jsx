import Text from "../../../../components/Text";
import CustomLink from "../../../../components/CustomLink";

const Ling102 = () => {
  return (
    <div>
      <Text className="text-left">Ling 102/103</Text>
      <ul className="px-10 list-disc list-outside">
        <li>
          Textbook: We use{" "}
          <span class="italic">
            A Course in Phonetics or The Sounds of Language
          </span>
        </li>
        <li>
          Optional books sometimes ordered: Pullum & Ladusaw (1996){" "}
          <span class="italic">Phonetic Symbol Guide</span> 2nd edition;
          <span class="italic">
            {" "}
            Handbook of the International Phonetic Association
          </span>{" "}
          (1999)
        </li>
        <li>
          <CustomLink href="https://phonetics.ucla.edu/">
            UCLA Phonetics Lab Data
          </CustomLink>{" "}
          (descended from the old "Sounds of the World's Languages" hypercard
          stacks), sound materials compiled by Peter and Jenny Ladefoged as a
          general resource, and to supply examples for the textbooks (5th
          edition of A Course in Phonetics and 1st edition of Vowels and
          Consonants) - archival teaching materials
        </li>
        <li>
          IPA Soundsearch application for searching for segments simultaneously
          in the Phonetics Lab Data and the Illustrations of the IPA. Gives you
          links to all the languages in these sources that contain a requested
          sound; if the language is in the Phonetics Lab Data, it takes you
          directly to the clickable webpage. Currently not available.
        </li>
        <li>
          Normal Speech Articulation (the "Iowa movie") VHS, DVD and film in the{" "}
          <CustomLink href="https://media.dymaxion.ca/display/214/wwk770">
            IML
          </CustomLink>{" "}
          (retired film copy is in cabinet in General Lab) - but now freely
          available online at the{" "}
          <CustomLink href="https://archive.org/details/normalspeecharticulation">
            Internet Archive
          </CustomLink>
        </li>
        <li>
          "Human Speech Articulation" (Caldwell), 2002 DVD in the{" "}
          <CustomLink href="https://media.dymaxion.ca/display/214/wwk770">
            IML
          </CustomLink>
          , is meant to replace "Normal Speech Articulation" but we prefer the
          original
        </li>
        <li>
          "Vocal Parts Module" and "The Ear": CDs and laminated cards about the
          larynx and the ear, on the shelf in the General Lab
        </li>
        <li>
          Bruce Hayes's program to generate non-word production tests of
          equivalent difficulty (ask him for it)
        </li>
        <li>
          Pat Keating's use of Apple's text to speech in a{" "}
          <CustomLink href="https://phonetics.linguistics.ucla.edu/teaching/Assigment%203-TTS.pdf">
            class assignment
          </CustomLink>
        </li>
        <li>
          Transcription: Phonetics Lab's downloadable transcription exercises,
          see below
        </li>
        <li>
          IPA:{" "}
          <CustomLink href="https://www.internationalphoneticassociation.org/">
            IPA homepage
          </CustomLink>{" "}
          (including links to Sound files for Illustrations of the IPA)
        </li>
        <li>
          IPA: IPA's page for the{" "}
          <CustomLink href="https://www.internationalphoneticassociation.org/content/full-ipa-chart">
            IPA chart{" "}
          </CustomLink>
          ;{" "}
          <CustomLink href="https://www.internationalphoneticassociation.org/sites/default/files/IPA_Kiel_2015.pdf">
            1-page pdf of chart (2015 Kiel version)
          </CustomLink>
        </li>
        <li>
          IPA symbol pickers:{" "}
          <CustomLink href="https://westonruter.github.io/ipa-chart/keyboard/">
            westonruter;
          </CustomLink>{" "}
          <CustomLink href="https://www.lexilogos.com/keyboard/ipa.htm">
            lexilogos;
          </CustomLink>{" "}
          <CustomLink href="https://r12a.github.io/pickers/ipa/">
            r12a;
          </CustomLink>{" "}
          <CustomLink href="https://ipa.typeit.org/full/">typeit</CustomLink>
        </li>
        <li>
          IPA: CD <CustomLink href="">"The Phonicon 1.0"</CustomLink> by M.
          Stanley Whitley; an entire course and reference materials but the
          license does not permit putting it on the CLICC server for general
          student use; on the shelf in the General Lab
        </li>
        <li>
          IPA: Cascadilla's{" "}
          <CustomLink href="https://www.cascadilla.com/eyechart.pdf">
            "IPA eyechart"
          </CustomLink>{" "}
          (for fun)
        </li>
        <li>
          English:{" "}
          <CustomLink href="https://accent.gmu.edu/">
            Speech Accent Archive
          </CustomLink>{" "}
          at George Mason University
        </li>
        <li>
          David Crystal's{" "}
          <CustomLink href="https://originalpronunciation.com/GBR/Home">
            Original Pronunciation
          </CustomLink>{" "}
          of Shakespeare site
        </li>
        <li>Link to Esling's IPA chart iOS app</li>
        <li>
          Link to Glasgow U's IPA chart with vocal tract ultrasound videos; USC
          real-time MRI IPA charts
        </li>
        <li>Link to U. Iowa app on English, Spanish, Korean, Chinese</li>
        <li>Daniel Hall's interactive midsagittal section at the U Toronto</li>
        <li>
          Bruce Hayes's{" "}
          <CustomLink href="https://linguistics.ucla.edu/people/hayes/103/SpectrogramReading/index.htm">
            practice spectrogram reading
          </CustomLink>
        </li>
      </ul>
    </div>
  );
};

export default Ling102;
