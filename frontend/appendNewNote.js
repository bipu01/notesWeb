import { openNote } from "./mainOpenedNoteHub.js";

let mainBody = document.querySelector(".mainBody");

export function appendNote(x, y) {
  let numOfNotes = mainBody.dataset.number;
  let newNote = document.createElement("div");
  handleCreatingNewNote(numOfNotes, newNote);

  //Elongates to X if 'x' is passed ans viseversa
  if (x <= 1 && y <= 1) {
    newNote.style.gridColumn = `span 1`;
    newNote.style.gridRow = `span 1`;
    newNote.style.height = `9rem`;
  } else if (x <= 2) {
    newNote.style.gridColumn = `span ${x}`;
    newNote.style.gridRow = `span 1`;
    newNote.style.height = `9rem`;
  } else if (x <= 3) {
    newNote.style.gridColumn = `span 3`;
    newNote.style.gridRow = `span 1`;
    newNote.style.height = `9rem`;
  } else if (x <= 4) {
    newNote.style.gridColumn = `span ${2}`;
    newNote.style.gridRow = `span ${2}`;
    newNote.style.height = `${18}rem`;
  } else if (x <= 6) {
    newNote.style.gridColumn = `span 3`;
    newNote.style.gridRow = `span ${2}`;
    newNote.style.height = `${18 + (5 * 2) / 16}rem`;
  } else if (x <= 9) {
    newNote.style.gridColumn = `span 3`;
    newNote.style.gridRow = `span 3`;
    newNote.style.height = `${27 + (5 * 2) / 16}rem`;
  } else {
    newNote.style.gridColumn = `span ${3}`;
    newNote.style.gridRow = `span ${3}`;
    newNote.style.height = `${27 + (5 * 2) / 16}rem`;
  }
  handleCommonAppending(newNote);
}

const handleCreatingNewNote = (numOfNotes, newNote) => {
  newNote.classList.add("notes");
  newNote.id = `note${parseInt(numOfNotes) + 1}`;

  //It appends h3 to the div with id->note${num}
  let header = document.createElement("h3");
  header.id = `head${parseInt(numOfNotes) + 1}1`;

  let paragraph = document.createElement("p");
  paragraph.id = `paragraph${parseInt(numOfNotes) + 1}1`;

  newNote.appendChild(header);
  newNote.appendChild(paragraph);
};

const handleCommonAppending = (newNote) => {
  mainBody.appendChild(newNote);
  newNote.addEventListener("click", () => openNote(newNote.id));
  // console.log(newNote, newNote.id);
  mainBody.dataset.number = parseInt(mainBody.dataset.number) + 1;
};
