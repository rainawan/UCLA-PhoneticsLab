import Text from "../../../components/Text";
import { Accordion, AccordionItem } from "@nextui-org/react";
import {
  links_and_collections,
  noise_and_speech,
  sound_analysis,
  sound_files,
  text_grids,
} from "../../../components/PraatScript";

const PraatScript = () => {
  return (
    <div>
      <div className="pt-10">
        <Text h3 className="text-blue">
          Praat Script Resources
        </Text>
        <Accordion variant="shadow">
          <AccordionItem title="How to Use This Page">
            <div className="pb-10 px-4">
              <Text pbold>How to run a script</Text>
              <Text p>
                Scripts save{" "}
                <a
                  href="https://www.fon.hum.uva.nl/praat/"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  Praat
                </a>{" "}
                users time and effort by automating a sequence of operations. To
                run a Praat script, go to the "Control" menu in the "Praat
                objects" window and select "New Praat script". Then pull up the
                code for the desired script by clicking on one of the links
                below. Copy all the code there (e.g. highlight and Ctrl-C on a
                PC) and paste it into the new "untitled script" window. Finally,
                select Run {">"} Run (or type Ctrl-R) in the untitled script
                window to execute the script.
              </Text>
              <Text pbold>How to save a script or add it to the menu</Text>
              <Text p>
                In the open "untitled script" window with the new script pasted
                in the text box, go to the "File" menu to "Save" the script to a
                convenient location. The "Add to fixed menu..." command under
                "File" can be used to add the current script to one of the head
                menus in the "Praat objects" window. Menus can be edited (e.g.
                to remove previously added scripts) by going to "Control {">"}{" "}
                Preferences {">"} Buttons" and clicking on the desired command.
              </Text>
              <Text pbold>How to script in Praat</Text>
              <Text p>
                See the "Scripting tutorial" under "Help" in "Praat objects" or
                try any of the many online tutorials.
              </Text>
            </div>
          </AccordionItem>
          <AccordionItem title="Sound File Management">
            <div className="pb-10 px-4">
              <Text p>
                <div className="pl-10">
                  <ul className="list-disc">
                    {sound_files.map((sound_file, index) => (
                      <li key={index}>
                        <a
                          href={sound_file.href}
                          className="text-blue hover:underline"
                          target="_blank"
                        >
                          {sound_file.text}
                        </a>{" "}
                        ({sound_file.author})
                        <br />
                        {sound_file.desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </Text>
            </div>
          </AccordionItem>

          <AccordionItem title="Text grid management">
            <div className="pb-10 px-4">
              <Text p>
                <div className="pl-10">
                  <ul className="list-disc">
                    <li>
                      <a
                        href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/grid-maker.praat"
                        className="text-blue hover:underline"
                        target="_blank"
                      >
                        grid-maker
                      </a>{" "}
                      (Kevin Ryan)
                      <br />
                      Make or edit text grids for a set of sound files.
                      <br />
                      See also K. Crosswhite's amply commented grid{" "}
                      <a
                        href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/text_grid_maker.txt"
                        className="text-blue hover:underline"
                        target="_blank"
                      >
                        maker
                      </a>{" "}
                      and{" "}
                      <a
                        href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/text_grid_reviewer.txt"
                        className="text-blue hover:underline"
                        target="_blank"
                      >
                        reviewer
                      </a>{" "}
                      scripts {"("}and their{" "}
                      <a
                        href="https://web.archive.org/web/20030620172734/ling.rochester.edu/people/cross/scripts.html"
                        className="text-blue hover:underline"
                        target="_blank"
                      >
                        descriptions
                      </a>
                      {")"}.
                    </li>
                    <li>
                      <a
                        href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/label_from_text_file.txt"
                        className="text-blue hover:underline"
                        target="_blank"
                      >
                        label-from-text-file
                      </a>{" "}
                      (Mietta Lennes)
                      <br />
                      Replace interval labels in selected TextGrid with labeled
                      text from a file {"("}ML's{" "}
                      <a
                        href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/label_quickly_from_text_file.txt"
                        className="text-blue hover:underline"
                        target="_blank"
                      >
                        streamlined version
                      </a>
                      {")"}.
                    </li>

                    {text_grids.map((text_grid, index) => (
                      <li key={index}>
                        <a
                          href={text_grid.href}
                          className="text-blue hover:underline"
                          target="_blank"
                        >
                          {text_grid.text}
                        </a>{" "}
                        ({text_grid.author})
                        <br />
                        {text_grid.desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </Text>
            </div>
          </AccordionItem>

          <AccordionItem title="title">
            <div className="pb-10 px-4"></div>
          </AccordionItem>

          <AccordionItem title="title">
            <div className="pb-10 px-4"></div>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="pt-10">
        <Text h4 className="pt-6 pb-4">
          Analysis of sounds using text grids
        </Text>
        <Text p>
          <div className="pl-10">
            <ul className="list-disc">
              <li>
                <a
                  href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/calculate_segment_durations.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  calculate-segment-durations
                </a>{" "}
                (Mietta Lennes)
                <br />
                Log durations between labeled markers in a set of text grids.
                See also Katherine Crosswhite's{" "}
                <a
                  href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/duration_logger.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  duration-logger
                </a>
                .
              </li>
              <li>
                <a
                  href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/save_interval_data_to_text_file.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  startpoint-logger
                </a>{" "}
                (Mietta Lennes)
                <br />
                Similar to the above script, but make file with startpoint of
                each labeled interval.
              </li>
              <li>
                <a
                  href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/formant_logging.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  formant-logger
                </a>{" "}
                (Katherine Crosswhite)
                <br />
                Log midpoint F0-F3 and duration of vowels delimited by labeled
                markers in a set of text grids {"("}KC's{" "}
                <a
                  href="https://web.archive.org/web/20030620172734/ling.rochester.edu/people/cross/scripts.html"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  description
                </a>
                {")"}.
              </li>
              <li>
                <a
                  href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/collect_formant_data_from_files.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  formant-logger
                </a>{" "}
                (Mietta Lennes)
                <br />
                Log midpoint F1-F3 of text grid labeled intervals for a set of
                Sound/TextGrid pairs.
              </li>
              <li>
                <a
                  href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/draw_formant_chart.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  draw-formant-chart
                </a>{" "}
                (Mietta Lennes)
                <br />
                Reports and logs midpoint F1-F2 of vowels delimited by labeled
                markers in a set of text grids.
              </li>
              <li>
                <a
                  href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/collect_pitch_data_from_files.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  log-pitch-maxima
                </a>{" "}
                (Mietta Lennes)
                <br />
                Get F0 maxima of all text grid labeled intervals for a number of
                Sound-TextGrid pairs. See also ML's{" "}
                <a
                  href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/collect_data_from_two_tiers_in_files.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  log-data-from-two-tiers
                </a>
                , which gets pitch maxima and corresponding syllable durations.
              </li>
              <li>
                <a
                  href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/momel_modif.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  log-f0-extrema-using-momel
                </a>{" "}
                (Bert Remijsen)
                <br />
                Use the MOMEL (Hirst & Espesser) algorithm to log pitch turning
                points to TextGrid.
              </li>
              <li>
                <a
                  href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/PraatVoiceSauceImitator.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  phonation-measurements
                </a>{" "}
                (Chad Vicenik)
                <br />
                Makes various measurements, including H1-H2, H1-A1, H1-A2, and
                H1-A3.
              </li>
            </ul>
          </div>
        </Text>
        <Text h4 className="pt-6 pb-4">
          Segmentation and extraction
        </Text>
        <Text p>
          <div className="pl-10">
            <ul className="list-disc">
              <li>
                <a
                  href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/Segmenter.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  segmenter
                </a>{" "}
                (Katherine Crosswhite)
                <br />
                Extract clips demarcated by labeled markers into individual AIFF
                or WAV files {"("}KC's{" "}
                <a
                  href="http://web.archive.org/web/20030620172734/ling.rochester.edu/people/cross/scripts.html"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  description
                </a>
                {")"}.
              </li>
              <li>
                <a
                  href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/word_chomper.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  word-chomper
                </a>{" "}
                (Joe Toscano)
                <br />
                Take a WAV file and split it into smaller files corresponding to
                utterances.
              </li>
              <li>
                <a
                  href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/save_intervals_to_aiff_sound_files.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  segment-to-aiffs-and-log
                </a>
                {" | "}
                <a
                  href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/save_intervals_to_wav_sound_files.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  segment-to-wavs-and-log
                </a>{" "}
                (Mietta Lennes)
                <br />
                Extract textgrid-demarcated clips from LongSound into numbered
                files and log markers.
              </li>
              <li>
                <a
                  href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/save_labeled_intervals_to_aiff_sound_files.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  segment-to-labeled-aiffs
                </a>
                {" | "}
                <a
                  href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/save_labeled_intervals_to_wav_sound_files.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  segment-to-labeled-wavs
                </a>{" "}
                (Mietta Lennes)
                <br />
                Extract textgrid-demarcated clips from LongSound into files
                named after textgrid markers.
              </li>
              <li>
                <a
                  href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/voiced_extract_auto.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  extract-voiced-portions
                </a>{" "}
                (John Tøndering)
                <br />
                Extract and concatenate voiced portions of selected Sound to
                create new voiced-portions-only Sound.
              </li>
              <li>
                <a
                  href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/save_selection_to_sound_and_textgrid.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  save-selection-to-sound-and-textgrid
                </a>{" "}
                (Mietta Lennes) From an open LongSound TextGrid, save selected
                portion of LongSound and its TextGrid.
              </li>
              <li>
                <a
                  href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/make_textgrid_from_segment_data.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  from-segmentation-data-files-to-text-grids
                </a>{" "}
                (Mietta Lennes)
                <br />
                Convert data files listing segment startpoints and labels to
                TextGrids; cf.{" "}
                <a
                  href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/make_textgrid_from_segment_data_endpoints.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  endpoint
                </a>{" "}
                version.
              </li>
            </ul>
          </div>
        </Text>
        <Text h4 className="pt-6 pb-4">
          Drawing pictures
        </Text>
        <Text p>
          <div className="pl-10">
            <ul className="list-disc">
              <li>
                <a
                  href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/figure.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  draw-sample-figure
                </a>{" "}
                (Hugo Quené)
                <br />
                Demonstrates how to draw a figure (graph) using a script {"("}
                HQ's{" "}
                <a
                  href="https://hugoquene.nl/quene.nl.html"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  scripts
                </a>
                {")."}
              </li>
              <li>
                <a
                  href="https://www.fon.hum.uva.nl/paul/diss/"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  Functional phonology
                </a>{" "}
                (Paul Boersma)
                <br />
                1998 dissertation including a number of sophisticated figure
                drawing scripts.{" "}
                <a
                  href="https://www.fon.hum.uva.nl/paul/diss/ch2/lungs.draw"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  draw-lungs
                </a>
                {" and "}
                <a
                  href="https://www.fon.hum.uva.nl/paul/diss/ch2/muscles.draw"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  draw-muscle-effects
                </a>
                {" in "}
                <a
                  href="https://www.fon.hum.uva.nl/paul/diss/ch2/"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  Chapter 2: Articulation model
                </a>
                .
              </li>
              <li>
                <a
                  href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/draw_distribution_bar_from_data_file.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  draw-distribution-bar
                </a>{" "}
                (Mietta Lennes)
                <br />
                Draw a makeshift bar showing distribution of labeled intervals
                from a file of timepoint, label pairs.
              </li>
              <li>
                <a
                  href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/draw_source_filter_model.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  draw-source-filter-model
                </a>{" "}
                (Niels Petersen)
                <br />
                Draw the components of the source-filter model of vowel
                production to the Picture window.
              </li>
              <li>
                <a
                  href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/draw_formant_point_to_Bark_chart.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  draw-formant-point-to-bark-chart
                </a>{" "}
                (Mietta Lennes)
                <br />
                Draw a one-Bark vowel circle from given formant values (Hz) on a
                Bark-scale F1/F2 chart. Cf.{" "}
                <a
                  href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/draw_formant_point_to_ERB_chart.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  draw-formant-point-to-erb-chart
                </a>
                : same as above script except Erb-scale chart.
              </li>
              <li>
                <a
                  href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/mxn_plot.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  make-matrix-of-plots
                </a>{" "}
                (Chris Darwin)
                <br />
                Create a matrix of plots; format these plots by changing the
                script code (try it with the defaults).
              </li>
            </ul>
          </div>
        </Text>
        <Text h4 className="pt-6 pb-4">
          Noise and speech manipulation
        </Text>
        <Text p>
          <div className="pl-10">
            <ul className="list-disc">
              {noise_and_speech.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-blue hover:underline"
                    target="_blank"
                  >
                    {item.text}
                  </a>{" "}
                  ({item.author})
                  <br />
                  {item.desc}
                </li>
              ))}
            </ul>
          </div>
        </Text>
        <Text h4 className="pt-6 pb-4">
          More sound analysis
        </Text>
        <Text p>
          <div className="pl-10">
            <ul className="list-disc">
              {sound_analysis.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-blue hover:underline"
                    target="_blank"
                  >
                    {item.text}
                  </a>{" "}
                  ({item.author})
                  <br />
                  {item.desc}
                </li>
              ))}
            </ul>
            <ul className="list-disc">
              <li>
                <a
                  href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/vowelonset_v3_praat.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  mark-vowel-onsets
                </a>{" "}
                (Hugo Quené)
                <br />
                Find the vowel onsets in a selected Sound and log their
                timepoints in a new PointProcess; can then use HQ's{" "}
                <a
                  href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/writePP.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  write-pp
                </a>{" "}
                to record the PointProcess timepoints in a data file.
              </li>
              <li>
                <a
                  href="http://phonetics.linguistics.ucla.edu/facilities/acoustic/mxn_plot.txt"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  annotate-using-manpage
                </a>{" "}
                (John Tøndering)
                <br />
                Annotate a TextGrid with phonetic symbols using ManPage {"("}see
                JT's{" "}
                <a
                  href="http://web.archive.org/web/20080104122516/http://www.cphling.dk/pers/johtnd/praat/my_praat.htm"
                  className="text-blue hover:underline"
                  target="_blank"
                >
                  description
                </a>
                {")."}
              </li>
            </ul>
          </div>
        </Text>
        <Text h4 className="pt-6 pb-4">
          Praat Scripts: Links and Online Collections
        </Text>
        <Text p>
          <div className="pl-10">
            <ul className="list-disc">
              {links_and_collections.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-blue hover:underline"
                    target="_blank"
                  >
                    {item.text}
                  </a>
                  : {item.desc}
                </li>
              ))}
            </ul>
          </div>
        </Text>
      </div>
    </div>
  );
};

export default PraatScript;
