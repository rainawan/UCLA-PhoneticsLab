import Exercise1Handout from "../components/teaching/Ex1--Broad_English.pdf";
// import Exercise1Handout from "../components/teaching/Ex1--Broad_English.zip";

import Exercise2Handout from "../components/teaching/Ex2__Narrow_English.pdf";
import Exercise3Handout from "../components/teaching/Ex3--Tone_drills.pdf";
import Exercise4Handout from "../components/teaching/Ex4--Hindi.pdf";
import Exercise5Handout from "../components/teaching/Ex5--Argentinean Spanish.pdf";
import Exercise6Handout from "../components/teaching/Ex6--Khana.pdf";
import Exercise7Handout from "../components/teaching/Ex7--Tagalog.pdf";
import Exercise8Handout from "../components/teaching/Ex8--Ibibio.pdf";

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
    zip: "",
  },
  {
    key: "2",
    name: "Exercise 2",
    title: "Narrow English",
    handout: Exercise2Handout,
    zip: "",
  },
  {
    key: "3",
    name: "Exercise 3",
    title: "Broad English",
    handout: Exercise3Handout,
    zip: "",
  },
  {
    key: "4",
    name: "Exercise 4",
    title: "Tone Drills",
    handout: Exercise4Handout,
    zip: "",
  },
  {
    key: "5",
    name: "Exercise 5",
    title: "Hindi",
    handout: Exercise5Handout,
    zip: "",
  },
  {
    key: "6",
    name: "Exercise 6",
    title: "Argentinian Spanish",
    handout: Exercise6Handout,
    zip: "",
  },
  {
    key: "7",
    name: "Exercise 7",
    title: "Tagalog",
    handout: Exercise7Handout,
    zip: "",
  },
  {
    key: "8",
    name: "Exercise 8",
    title: "Ibibio",
    handout: Exercise8Handout,
    zip: "",
  },
];
