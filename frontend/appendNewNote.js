import { openNote } from "./mainOpenedNoteHub.js";

let mainBody = document.querySelector(".mainBody");
let initialBlankPageInNotes = document.querySelector(".blankPageText");

export const SelectedNote = {
  noteId: "",
  headerId: "",
  paragraphId: "",

  idNum: 0,
  sideTabId: "",
};

export function appendNote(x, y) {
  let idNum = mainBody.dataset.number;
  let newNote = document.createElement("div");
  createNewNote(idNum, newNote);

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
    newNote.style.height = `${18 + 5 / 16}rem`;
  } else if (x <= 9) {
    newNote.style.gridColumn = `span 3`;
    newNote.style.gridRow = `span 3`;
    newNote.style.height = `${27 + (5 * 2) / 16}rem`;
  } else {
    newNote.style.gridColumn = `span ${3}`;
    newNote.style.gridRow = `span ${3}`;
    newNote.style.height = `${27 + (5 * 2) / 16}rem`;
  }
  appendNewNoteToMainBody(newNote);
}

const createNewNote = (idNum, newNote) => {
  newNote.classList.add("notes");
  newNote.id = `note${parseInt(idNum) + 1}`;

  //appendElement(idNum, itsParent)
  appendHeader(idNum, newNote);
  appendParagraph(idNum, newNote);
  appendThreeDotToNewNote(idNum, newNote);

  initialBlankPageInNotes.style.visibility = "hidden";
};

const appendNewNoteToMainBody = (newNote) => {
  mainBody.appendChild(newNote);
  newNote.addEventListener("click", (e) => {
    let idNumber = parseInt(e.target.id.replace(/\D/g, ""), 10);
    openNote(idNumber);
  });

  newNote.style.position = "relative";
  mainBody.dataset.number = parseInt(mainBody.dataset.number) + 1;
};

//Appends h3 and p to note
const appendHeader = (idNum, newNote) => {
  let header = document.createElement("h3");
  header.id = `head${parseInt(idNum) + 1}`;
  newNote.appendChild(header);
};
const appendParagraph = (idNum, newNote) => {
  let paragraph = document.createElement("p");
  paragraph.id = `paragraph${parseInt(idNum) + 1}`;
  newNote.appendChild(paragraph);
};

const appendThreeDotToNewNote = (idNum, newNote) => {
  let threeDotBox = document.createElement("div");
  threeDotBox.classList.add("threeDotBox");

  let threeDot = document.createElement("img");

  threeDot.src = "../icons/notesOptionBlack.svg";
  threeDot.classList.add = "threeDot";
  threeDot.id = `threeDot${idNum}`;
  threeDotBox.appendChild(threeDot);
  newNote.appendChild(threeDotBox);

  threeDotBox.style.position = "absolute";
  threeDotBox.style.top = `${5}%`;
  threeDotBox.style.right = `${0}%`;
  threeDotBox.style.opacity = "0.3";
  threeDotBox.style.transition = "all 0.1s ease-in";

  // Show the threeDot when hovering over the newNote
  threeDotBox.addEventListener("mouseenter", () => {
    threeDotBox.style.opacity = "1";
  });
  // Hide the threeDot when the mouse leaves the newNote
  threeDotBox.addEventListener("mouseleave", () => {
    threeDotBox.style.opacity = "0.3";
  });

  let notesOptions = document.createElement("div");
  notesOptions.classList.add("notesOptions");
  notesOptions.id = `notesOptions${idNum}`;
  newNote.appendChild(notesOptions);

  let deleteNote = document.createElement("div");
  deleteNote.classList.add("deleteNote");
  deleteNote.id = `deleteNote${idNum}`;
  notesOptions.appendChild(deleteNote);
  let deleteIcon = document.createElement("img");
  deleteIcon.classList.add("deleteNoteIcon");
  deleteIcon.textContent = "Delete";
  deleteIcon.src = "../icons/deleteNoteIcon.svg";
  deleteNote.appendChild(deleteIcon);

  let addTofav = document.createElement("div");
  addTofav.classList.add("addToFav");
  addTofav.id = `addToFav${idNum}`;
  notesOptions.appendChild(addTofav);
  let favNoteIcon = document.createElement("img");
  favNoteIcon.classList.add("deleteNoteIcon");
  favNoteIcon.textContent = "Fav";
  favNoteIcon.src = "../icons/favNotesIcon.svg";
  addTofav.appendChild(favNoteIcon);

  let cancel = document.createElement("div");
  cancel.classList.add("cancel");
  cancel.id = `cancel${idNum}`;
  notesOptions.appendChild(cancel);
  cancel.innerHTML = "Back";

  threeDotBox.addEventListener(
    "click",
    (e) => {
      notesOptions.style.visibility = "visible";
    },
    true
  );

  cancel.addEventListener("click", () => {
    notesOptions.style.visibility = "hidden";
  });

  mainBody.addEventListener(
    "click",
    () => {
      notesOptions.style.visibility = "hidden";
    },
    true
  );
};

const appendThreeDotOption = (idNum, newNote) => {};
