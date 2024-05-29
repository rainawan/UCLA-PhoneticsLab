import Text from "../../../components/Text";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

import voicesauce from "../../../components/resources/acoustic_analysis/voicesauce.gif";
import changelog from "../../../components/resources/acoustic_analysis/changelog.txt";
// import voicesaucezip from "../../../components/resources/acoustic_analysis/VoiceSauce.zip";

const VoiceSauce = () => {
  return (
    <div>
      <div className="pt-10">
        <Text h3 className="pb-0">
          VoiceSauce
        </Text>
        <Text h4 className="pb-4">
          A program for voice analysis
        </Text>
        <div class="flex justify-center w-full">
          <img
            src={voicesauce}
            alt="voicesauce"
            className="md:w-1/2 p-2 shadow-md"
          />
        </div>
        <Text p>
          VoiceSauce is an application, implemented in Matlab, which provides
          automated voice measurements over time from audio recordings. Inputs
          are standard wave (*.wav) files and the measures currently computed
          are:
          <div class="md:w-2/3 container mx-auto p-4">
            <div class="flex flex-col md:flex-row">
              <div class="pl-10 md:w-1/2">
                <ul class="list-disc">
                  <li>F0</li>
                  <li>Formants F1-F4</li>
                  <li>H1(*)</li>
                  <li>H2(*)</li>
                  <li>H4(*)</li>
                  <li>A1(*)</li>
                  <li>A2(*)</li>
                  <li>A3(*)</li>
                  <li>2K(*)</li>
                  <li>5K</li>
                  <li>H1(*)-H2(*)</li>
                </ul>
              </div>
              <div class="pl-10 md:w-1/2">
                <ul class="list-disc">
                  <li>H2(*)-H4(*)</li>
                  <li>H1(*)-A1(*)</li>
                  <li>H1(*)-A2(*)</li>
                  <li>H1(*)-A3(*)</li>
                  <li>H4(*)-2K(*)</li>
                  <li>2K(*)-5K</li>
                  <li>Energy</li>
                  <li>Cepstral Peak Prominence</li>
                  <li>Harmonic to Noise Ratios</li>
                  <li>Subharmonic to Harmonic Ratio</li>
                  <li>Strength of Excitation</li>
                </ul>
              </div>
            </div>
          </div>
          where (*) indicates that the harmonic/spectral amplitudes are reported
          with and without corrects for formant frequencies and bandwidths. More
          parameters to be added soon.
        </Text>
        <Text pbold>Requirements:</Text>
        <Text p>
          VoiceSauce requires Matlab versions 2015 and up. VoiceSauce has been
          successfully run under Windows (7/10) and Mac. Other operating systems
          may also work but have not been tested. If you are attempting to run
          VoiceSauce on a system other than Windows or Mac, you may need to
          install Tcl/Tk first; this can be obtained on{" "}
          <a
            href="https://www.activestate.com/products/tcl/"
            className="text-blue hover:underline"
            target="_blank"
          >
            ActiveState's website
          </a>
          .
        </Text>
        <Text pbold>Limitations:</Text>
        <Text p>
          Since many of the parameters estimated by VoiceSauce depend on F0,
          meaningful results are only valid for voiced speech. Noisy speech may
          affect the accuracy of the F0 estimations and hence the values of the
          voice measurements.
          <br />
          <br />
          The correction formula for the effects of the formant frequencies on
          harmonic amplitudes works best when there are accurate estimates of
          the formants. For example, speech produced by a high-pitched voice
          saying high vowels, with similar F0 and F1 values, may give a poor
          estimate of F1 and so return inaccurate results for H1*. It is
          recommended to inspect the formant frequency estimates to verify their
          validity. Not only the formant frequencies, but also their bandwidths,
          can cause errors in the corrections; see the documentation for more
          information.
          <br />
          <br />
          It has been reported that wav files contained in folder names which
          consist of non-English characters may cause the formant estimator to
          fail. Equally, textgrid files from Praat encoded with "UCS-2 Big
          Endian" cannot be read by Matlab and will cause it to crash. Such
          textgrid files need to be re-saved as ANSI or UTF-8, which can be done
          in e.g. Notepad (Open -{">"} Save As, under encoding select ANSI)
          before they can be used with VoiceSauce.
          <br />
          <br />
          Computer memory can be an issue. Very long files for which all
          parameters are to be estimated may cause VoiceSauce to hang up, or to
          give an Insufficient Memory message. Computing fewer parameters at
          once, or dividing the files into smaller files, should help. The April
          2015 version addresses one cause of such problems - the resources
          needed by SHR and shrF0.
        </Text>
        <Text pbold>Download:</Text>
        <Text p>
          Distribution is currently in two forms: (1) m-code for systems with
          Matlab, and (2) compiled executables for systems without Matlab. Note
          that the compiled executables requires the installation of the Matlab
          Component Runtime (only needs to be installed once).
          <br />
          <br />
          Currently compiled executables are only available for Windows systems.
          We welcome assistance from anyone who would like to provide a legal
          compiled executable for Macs.
          <br />
          <br />
          Version changelog is available{" "}
          <a
            href={changelog}
            className="text-blue hover:underline"
            target="_blank"
          >
            here
          </a>
          . Please let us know about any problems.
          <br />
          <br />
          The p-code file format was changed from Matlab 2015 onwards. For this
          reason, support for pre-Matlab 2015 versions have been deprecated. The
          p-code only affects the Straight F0 estimator.
        </Text>
        <Text pbold>Current active development version:</Text>
        <Text p>
          Note 1: Due to a licensing issue, Praat has been removed from the
          package. To install Praat, go to Settings, and under Praat, press
          "Install". Or to install manually, follow the instructions in
          /Praat/README.txt
          <br />
          <br />
          Note 2: Snack is working again on OSX - thanks to Sam Gregory for
          providing a compatible binary version.
        </Text>

        {/* <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Matlab m-code (v1.37 - Jun 2, 2020)</TableColumn>
            <TableColumn>
              Compiled Matlab executables - Windows 7/10 (v1.37 - Jun 2, 2020)
            </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>
                Instructions: Unzip and run VoiceSauce.m from Matlab.
                <br />
                <br />
                Note: Requires Matlab 2015a or later.
              </TableCell>
              <TableCell>
                Instructions: Run MCRInstaller (only needs to be done once).
                Unzip VoiceSauce_bin.zip and run VoiceSauce.exe.
                <br />
                <br />
                Note: Running VoiceSauce.exe for the first time may take a few
                minutes to load.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table> */}

        <Text pbold>Documentation:</Text>
        <Text p>
          Documentaton is available{" "}
          <a
            href="https://phonetics.ucla.edu/voicesauce/documentation/index.html"
            className="text-blue hover:underline"
            target="_blank"
          >
            here
          </a>
          . Originally written by Chad Vicenik and later expanded by Spencer
          Lin, this manual is now maintained by Pat Keating, with expert input
          from Yen Shue. Requests for additions are always welcome. To cite this
          manual: Chad Vicenik, Spencer Lin, Patricia Keating, and Yen-Liang
          Shue (current year). Online documentation for VoiceSauce. Available at
          http://www.phonetics.ucla.edu/voicesauce/documentation/index.html.
        </Text>
        <Text pbold>Note about running VoiceSauce:</Text>
        <Text p>
          VoiceSauce's Matlab console provides various run-time messages about
          its dealings with individual input files. These are not necessarily
          error messages! Unless VoiceSauce actually crashes, or hangs up, while
          running, you should be able to find .mat output files in the folder
          you specified, and you should be able to produce a .txt output file
          from these. Most notably, "Multicue failed: switching to
          exstraightsource" is not an error message and does not mean that
          VoiceSauce has crashed. See the documentation for more information
          about this message.
        </Text>
        <Text pbold>Companion software:</Text>
        <Text p>
          EggWorks: A free program by Henry Tehrani, created for the NSF Voice
          project to analyze EGG signals (closing quotients, peak increase in
          contact) in batch mode; also includes utilities for splitting .pmf
          files into separate .wav files, for inverting .wav files, and for
          converting .wav files from 32- to 16-bit.
        </Text>
        <Text pbold>Acknowledgements:</Text>
        <Text p>
          This work was supported in part by grants from the NSF to UCLA.
        </Text>
        <Text pbold>How to cite:</Text>
        <Text p>
          The original reference for VoiceSauce is Yen Shue's dissertation:
          Y.-L. Shue (2010), The voice source in speech production: Data,
          analysis and models. UCLA dissertation. <br />
          VoiceSauce is described in this paper: Shue, Y.-L., P. Keating , C.
          Vicenik, K. Yu (2011) VoiceSauce: A program for voice analysis,
          Proceedings of the ICPhS XVII, 1846-1849. <br />
          Note: Do not be fooled by the bogus citation that Google Scholar has
          somehow concocted (a supposed 2010 paper in the supposed journal
          "Energy", with pages H1-A1!).
        </Text>
      </div>
    </div>
  );
};

export default VoiceSauce;
