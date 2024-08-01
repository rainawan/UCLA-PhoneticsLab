import bu_radio from "../../src/components/databases/bu_radio.jpeg";
import buckeye from "../../src/components/databases/buckeye.png";
import celex from "../../src/components/databases/celex.jpeg";
import coraal from "../../src/components/databases/coraal.jpeg";
import ktobi from "../../src/components/databases/k-tobi.gif";
import lab_archive from "../../src/components/databases/lab_archive.png";
import lab_data from "../../src/components/databases/lab_data.png";
import phonation from "../../src/components/databases/phonation.gif";
import RBecker_diss from "../../src/components/databases/RBecker_diss.pdf";
import timit from "../../src/components/databases/timit.jpeg";
import upsid from "../../src/components/databases/upsid.png";
import voice_quality from "../../src/components/databases/voice_quality.jpeg";
import vowels from "../../src/components/databases/vowels.jpeg";
import becker from "../../src/components/databases/BeckerVowelCorpus.xls";

export const within_ucla = [
  {
    title: "UCLA Phonetics Lab Data",
    desc: "(formerly Sounds of the World's Languages, organized for teaching)",
    imgSrc: lab_data,
    link: "https://phonetics.ucla.edu/",
  },
  {
    title: "UCLA Phonetics Lab Archive",
    desc: "(raw data files not structured for teaching)  (NOTE: These files have been digitized at very high sampling rates. It is often useful to downsample before acoustic analysis. See Henry for a Matlab routine to do this; or check out Praat scripts to do this.)",
    imgSrc: lab_archive,
    link: "http://archive.phonetics.ucla.edu/",
  },
  {
    title: "Roy Becker's Vowel Corpus",
    desc: "(an .xlsx file, see his 2010 dissertation for a description of the database)",
    imgSrc: vowels,
    link: "https://www.proquest.com/docview/861321787?parentSessionId=zb9Ei5nAQFT15tH3GrfIypF4rg3IEP3n8zc1f79%2FQ8A%3D&sourcetype=Dissertations%20&%20Theses",
  },
  {
    title: "Linguistic Voice Quality project archive",
    desc: "(audio and EGG recordings, spreadsheet of measurements) BU Radio News corpus and Buckeye corpus are available on the internal T: drive",
    imgSrc: voice_quality,
    link: "https://phonetics.ucla.edu/voiceproject/voice.html",
  },
  {
    title: "UPSID (UCLA Phonological Segment Inventory Database)",
    desc: "Data on the phonological systems of 451 languages, with programs to access it, by Ian Maddieson and Kristin Precoda. This is an elderly DOS program (Windows only), neither of whose developers are still at UCLA, and no support is offered.",
    imgSrc: upsid,
    link: "http://web.phonetik.uni-frankfurt.de/upsid.html",
  },
  {
    title: "K-ToBI (Korean Tones & Break Indices)",
    desc: "K-ToBI (Korean TOnes and Break Indices) is a prosodic transcription convention for standard (Seoul) Korean.",
    imgSrc: ktobi,
    link: "https://linguistics.ucla.edu/people/jun/ktobi/k-tobi.html",
  },
  {
    title: "CELEX",
    desc: "The lab's copy of the CELEX database, used for calculating lexical statistics, is on the T: server, along with some scripts for doing searches.",
    imgSrc: celex,
    link: "http://phonetics.linguistics.ucla.edu/facilities/databases/databases.html#celex",
  },
  {
    title: "Phonation Database",
    desc: "(languages with contrastive phonation)",
    imgSrc: phonation,
    link: "http://phonetics.linguistics.ucla.edu/facilities/databases/databases.html",
  },
];

export const outside_ucla = [
  {
    title: "Buckeye",
    desc: "The Buckeye Corpus of conversational speech contains high-quality recordings from 40 speakers in Columbus OH conversing freely with an interviewer. The speech has been orthographically transcribed and phonetically labeled.",
    imgSrc: buckeye,
    link: "https://buckeyecorpus.osu.edu/",
  },
  {
    title: "CORAAL",
    desc: "The Corpus of Regional African American Language (CORAAL) is the first public corpus of AAL data. CORAAL features recorded speech from regional varieties of AAL and includes the audio recordings along with time-aligned orthographic transcription from over 220 sociolinguistic interviews from speakers born between 1888 and 2005.",
    imgSrc: coraal,
    link: "https://oraal.uoregon.edu/coraal",
  },
  {
    title: "TIMIT",
    desc: "The TIMIT corpus of read speech is designed to provide speech data for acoustic-phonetic studies and for the development and evaluation of automatic speech recognition systems. TIMIT contains broadband recordings of 630 speakers of eight major dialects of American English, each reading ten phonetically rich sentences.",
    imgSrc: timit,
    link: "https://catalog.ldc.upenn.edu/LDC93s1",
  },
  {
    title: "BU Radio Speech Corpus",
    desc: "The Boston University Radio Speech Corpus was collected primarily to support research in text-to-speech synthesis, particularly generation of prosodic patterns. The corpus consists of professionally read radio news data, including speech and accompanying annotations, suitable for speech and language research.",
    imgSrc: bu_radio,
    link: "https://catalog.ldc.upenn.edu/LDC96S36",
  },
];
