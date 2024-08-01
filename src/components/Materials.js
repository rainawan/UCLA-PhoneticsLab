import Exercise1Handout from "../components/teaching/Ex1--Broad_English.pdf";
import Exercise2Handout from "../components/teaching/Ex2__Narrow_English.pdf";
import Exercise3Handout from "../components/teaching/Ex3--Tone_drills.pdf";
import Exercise4Handout from "../components/teaching/Ex4--Hindi.pdf";
import Exercise5Handout from "../components/teaching/Ex5--Argentinean Spanish.pdf";
import Exercise6Handout from "../components/teaching/Ex6--Khana.pdf";
import Exercise7Handout from "../components/teaching/Ex7--Tagalog.pdf";
import Exercise8Handout from "../components/teaching/Ex8--Ibibio.pdf";

import Exercise1Zip from "../components/teaching/Ex1--Broad_English.zip";
import Exercise2Zip from "../components/teaching/Ex2--Narrow_English.zip";
import Exercise3Zip from "../components/teaching/Ex3--Tone_drills.zip";
import Exercise4Zip from "../components/teaching/Ex4--Hindi.zip";
import Exercise5Zip from "../components/teaching/Ex5--Argentinean_Spanish.zip";
import Exercise6Zip from "../components/teaching/Ex6--Khana.zip";
import Exercise7Zip from "../components/teaching/Ex7--Tagalog.zip";
import Exercise8Zip from "../components/teaching/Ex8--Ibibio.zip";

export const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "title",
    label: "TITLE",
  },
  {
    key: "handout",
    label: "HANDOUT",
  },
  {
    key: "zip",
    label: "ZIP",
  },
];

export const rows = [
  {
    key: "1",
    name: "Exercise 1",
    title: "Broad English",
    handout: Exercise1Handout,
    zip: Exercise1Zip,
  },
  {
    key: "2",
    name: "Exercise 2",
    title: "Narrow English",
    handout: Exercise2Handout,
    zip: Exercise2Zip,
  },
  {
    key: "3",
    name: "Exercise 3",
    title: "Tone Drill",
    handout: Exercise3Handout,
    zip: Exercise3Zip,
  },
  {
    key: "4",
    name: "Exercise 4",
    title: "Hindi",
    handout: Exercise4Handout,
    zip: Exercise4Zip,
  },
  {
    key: "5",
    name: "Exercise 5",
    title: "Argentinian Spanish",
    handout: Exercise5Handout,
    zip: Exercise5Zip,
  },
  {
    key: "6",
    name: "Exercise 6",
    title: "Khana",
    handout: Exercise6Handout,
    zip: Exercise6Zip,
  },
  {
    key: "7",
    name: "Exercise 7",
    title: "Tagalog",
    handout: Exercise7Handout,
    zip: Exercise7Zip,
  },
  {
    key: "8",
    name: "Exercise 8",
    title: "Ibibio",
    handout: Exercise8Handout,
    zip: Exercise8Zip,
  },
];
