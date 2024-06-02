export const sound_files = [
  {
    href: "http://phonetics.linguistics.ucla.edu/facilities/acoustic/get-files.praat",
    text: "get-files",
    author: "Kevin Ryan",
    desc: "Open multiple files from the specified directory at once.",
  },
  {
    href: "http://phonetics.linguistics.ucla.edu/facilities/acoustic/openlist.txt",
    text: "get-files-from-list",
    author: "Bert Remijsen",
    desc: "Open multiple files enumerated in a list in the specified text file.",
  },
  {
    href: "http://phonetics.linguistics.ucla.edu/facilities/acoustic/remove-all.praat",
    text: "remove-all",
    author: "Kevin Ryan",
    desc: "Remove all objects from object list.",
  },
  {
    href: "http://phonetics.linguistics.ucla.edu/facilities/acoustic/change_sample_rate_of_sound_files.txt",
    text: "change-sample-rate-or-format",
    author: "Mietta Lennes",
    desc: "Resample and/or change the format of a set of sound files (ML's description).",
  },
  {
    href: "http://phonetics.linguistics.ucla.edu/facilities/acoustic/Concatenator.txt",
    text: "concatenate-sounds",
    author: "Chad Vicenik",
    desc: "Concatenate (daisy-chain) two or more selected Sound objects into one Sound object.",
  },
  {
    href: "http://phonetics.linguistics.ucla.edu/facilities/acoustic/Duplicator.txt",
    text: "duplicate-sound",
    author: "Chad Vicenik",
    desc: "Concatenate (daisy-chain) a Sound object with itself the specified number of times.",
  },
  {
    href: "http://phonetics.linguistics.ucla.edu/facilities/acoustic/Add2_variable.txt",
    text: "combine-sounds",
    author: "Chris Darwin",
    desc: "Combine (merge) two Sounds with specified gains.",
  },
  {
    href: "http://phonetics.linguistics.ucla.edu/facilities/acoustic/install.txt",
    text: "script-installation-script",
    author: "Niels Petersen",
    desc: "An example of a script used to install several scripts to the Praat menus.",
  },
  {
    href: "http://phonetics.linguistics.ucla.edu/facilities/acoustic/wave-maker.praat",
    text: "wave-maker",
    author: "Kevin Ryan",
    desc: "Create multiple varied sine waves at once in the object list and/or a directory (useful for testing scripts).",
  },
];

export const text_grids = [
  {
    href: "http://phonetics.linguistics.ucla.edu/facilities/acoustic/open_many_textgrids.txt",
    text: "open-multiple-textgrids",
    author: "John Tøndering",
    desc: "Open multiple text grids from a directory at once.",
  },
  {
    href: "http://phonetics.linguistics.ucla.edu/facilities/acoustic/mark_pauses.txt",
    text: "mark-pauses",
    author: "Mietta Lennes",
    desc: "Mark pauses in a LongSound (can then run segmenter to get separate files).",
  },
  {
    href: "http://phonetics.linguistics.ucla.edu/facilities/acoustic/total_duration_of_labeled_segments.txt",
    text: "total-duration-of-labeled-segments",
    author: "Mietta Lennes",
    desc: "Total the duration of labeled segments of a TextGrid.",
  },
  {
    href: "http://phonetics.linguistics.ucla.edu/facilities/acoustic/align_boundaries_in_two_interval_tiers.txt",
    text: "align-textgrid-markers",
    author: "Mietta Lennes",
    desc: "Align TextGrid interval markers in tier one to those in tier two if they are sufficiently close.",
  },
];

export const noise_and_speech = [
  {
    href: "http://phonetics.linguistics.ucla.edu/facilities/acoustic/FlatIntonationSynthesizer.txt",
    text: "flat-intonation-resynthesizer",
    author: "Chad Vicenik",
    desc: "Resynthesizes all files in a directory to have flat pitch of a given frequency.",
  },
  {
    href: "http://phonetics.linguistics.ucla.edu/facilities/acoustic/adjust_intensity_whole_file.txt",
    text: "adjust-intensity",
    author: "Katherine Crosswhite",
    desc: "Scale a set of sounds so that their peak amplitudes are identical.",
  },
  {
    href: "http://phonetics.linguistics.ucla.edu/facilities/acoustic/IntensityScaler.txt",
    text: "intensity-scaler",
    author: "Chad Vicenik",
    desc: "Scales the intensity of all files in a directory to the same value.",
  },
  {
    href: "http://phonetics.linguistics.ucla.edu/facilities/acoustic/IntensityNeutralizer.txt",
    text: "intensity-neutralizer",
    author: "Chad Vicenik",
    desc: "Flattens the intensity curve of all files in a directory.",
  },
  {
    href: "http://phonetics.linguistics.ucla.edu/facilities/acoustic/resampler.txt",
    text: "file-resampler",
    author: "Chad Vicenik",
    desc: "Resamples all the files in a directory.",
  },
  {
    href: "http://phonetics.linguistics.ucla.edu/facilities/acoustic/LowPassFilter.txt",
    text: "low-pass-filter",
    author: "Chad Vicenik",
    desc: "Low-pass filters all files in a directory.",
  },
  {
    href: "http://phonetics.linguistics.ucla.edu/facilities/acoustic/create_sustained_vowel_lpc.txt",
    text: "create-sustained-vowel",
    author: "Niels Petersen",
    desc: "Create a sustained vowel of the specified type using the LF source model.",
  },
  {
    href: "http://phonetics.linguistics.ucla.edu/facilities/acoustic/create_waveforms.txt",
    text: "create-waveforms",
    author: "Niels Petersen",
    desc: "Create various kinds of waveforms (sawtooth, square, sine, white noise, pink noise, etc.).",
  },
  {
    href: "http://phonetics.linguistics.ucla.edu/facilities/acoustic/comb_filter.txt",
    text: "comb-filter-noise",
    author: "Chris Darwin",
    desc: "Generate and comb-filter white noise.",
  },
  {
    href: "http://phonetics.linguistics.ucla.edu/facilities/acoustic/Shannon.txt",
    text: "shannon-am-noise",
    author: "Chris Darwin",
    desc: "Produce Shannon-type AM noise from a selected Sound file using four bands.",
  },
  {
    href: "http://phonetics.linguistics.ucla.edu/facilities/acoustic/SWS.txt",
    text: "sine-wave-speech",
    author: "Chris Darwin",
    desc: "Create three-formant sine-wave speech using selected Sound object.",
  },
  {
    href: "http://phonetics.linguistics.ucla.edu/facilities/acoustic/VTchange.txt",
    text: "vocal-tract-change",
    author: "Chris Darwin",
    desc: "Change size of vocal tract (formants, but not duration/pitch)",
  },
  {
    href: "http://phonetics.linguistics.ucla.edu/facilities/acoustic/metronomeL000.txt",
    text: "metronome",
    author: "Hugo Quené",
    desc: "Simple one-beat metronome. Careful: the default durations are very long; they should be set shorter before testing, lest Praat be tied up for minutes. Also, references to mywhoosh.wav should be changed to some extant WAV or removed.",
  },
];

export const sound_analysis = [
  {
    href: "",
    text: "",
    author: "",
    desc: "",
  },
];
