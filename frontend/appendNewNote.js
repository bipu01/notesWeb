import { animateAddedToFav, animateDeleted } from "./animations.js";
import { addTofavourateSidebar, isOnFavourates } from "./favTabs.js";
import { openNote, updateSelectedNote } from "./mainOpenedNoteHub.js";
import {
  removeNoteFromFavSidebar,
  removeNoteFromRecents,
} from "./removeNotesFromSidebars.js";
import { OpenedNotes, isOpenInSidebar } from "./sideBarOpenUpdate.js";

let mainBody = document.querySelector(".mainBody");
let initialBlankPageInNotes = document.querySelector(".blankPageText");

export const SelectedNote = {
  noteId: "",
  headerId: "",
  paragraphId: "",
  header: "",
  paragraph: "",
  idNum: 0,
  sideTabId: "",
  favTabId: "",
  favTab: "",
};

export const FavNotes = [];

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
  let newIdNum = parseInt(idNum) + 1;
  newNote.classList.add("notes");
  newNote.id = `note${newIdNum}`;

  //appendElement(idNum, itsParent)
  appendHeader(newIdNum, newNote);
  appendParagraph(newIdNum, newNote);
  appendThreeDotToNewNote(newIdNum, newNote);

  initialBlankPageInNotes.style.visibility = "hidden";
};

const appendNewNoteToMainBody = (newNote) => {
  mainBody.appendChild(newNote);

  newNote.addEventListener("click", (e) => {
    let idNumber = parseInt(e.target.id.replace(/\D/g, ""), 10);

    if (isOpenInSidebar(idNumber, OpenedNotes)) {
      updateSelectedNote(idNumber);
      return console.log("already open in sidebar");
    }
    console.log(newNote.id);
    openNote(idNumber);
    // openInSidebar();
  });

  newNote.style.position = "relative";
  mainBody.dataset.number = parseInt(mainBody.dataset.number) + 1;
};

//Appends h3 and p to note
const appendHeader = (idNum, newNote) => {
  let header = document.createElement("h3");
  header.id = `head${parseInt(idNum)}`;
  newNote.appendChild(header);
};
const appendParagraph = (idNum, newNote) => {
  let paragraph = document.createElement("p");
  paragraph.id = `paragraph${parseInt(idNum)}`;
  newNote.appendChild(paragraph);
};

const appendThreeDotToNewNote = (idNum, newNote) => {
  let threeDotBox = document.createElement("div");
  threeDotBox.classList.add("threeDotBox");
  threeDotBox.id = `threeDotBox${idNum}`;

  let threeDot = document.createElement("img");
  threeDot.src = "../icons/notesOptionBlack.svg";
  threeDot.classList.add("threeDot");
  threeDot.id = `threeDot${idNum}`;
  threeDotBox.appendChild(threeDot);
  newNote.appendChild(threeDotBox);
  threeDotBoxStyles(threeDotBox);
  handleEvents(threeDot);
  handleEvents(threeDotBox);
  createNoteOptions(newNote, idNum);

  function threeDotBoxStyles(threeDotBox) {
    threeDotBox.style.position = "absolute";
    threeDotBox.style.top = `${5}%`;
    threeDotBox.style.right = `${0}%`;
    threeDotBox.style.opacity = "0.3";
    threeDotBox.style.transition = "all 0.1s ease-in";
  }

  function handleEvents(object) {
    object.addEventListener("mouseenter", () => {
      object.style.opacity = "1";
    });
    object.addEventListener("mouseleave", () => {
      object.style.opacity = "0.3";
    });
    object.addEventListener("click", (e) => {
      e.stopPropagation();
      console.log("threedot reached");
      console.log(e.target.id);
      let idNum = parseInt(e.target.id.replace(/\D/g, ""), 10);
      let notesOptions = document.getElementById(`notesOptions${idNum}`);
      notesOptions.style.visibility = "visible";
    });
  }
};

//

const createNoteOptions = (newNote, idNum) => {
  let notesOptions = document.createElement("div");
  notesOptions.classList.add("notesOptions");
  notesOptions.id = `notesOptions${idNum}`;
  newNote.appendChild(notesOptions);

  createDeleteNote(notesOptions, idNum);
  createAddToFav(notesOptions, idNum);
  createBackOption(notesOptions, idNum);
};

const createDeleteNote = (notesOptions, idNum) => {
  let deleteNote = document.createElement("div");
  deleteNote.classList.add("deleteNote");
  deleteNote.id = `deleteNote${idNum}`;
  notesOptions.appendChild(deleteNote);
  let deleteIcon = document.createElement("img");
  deleteIcon.classList.add("deleteNoteIcon");
  deleteIcon.textContent = "Delete";
  deleteIcon.src = "../icons/deleteNoteIcon.svg";
  deleteNote.appendChild(deleteIcon);

  deleteNote.addEventListener("click", deleteFunction);
  deleteIcon.addEventListener("click", deleteFunction);
  function deleteFunction(e) {
    e.stopPropagation();
    let idNum = parseInt(e.target.id.replace(/\D/g, ""), 10);
    // let deleteNote = document.getElementById(`deleteNote${idNum}`);
    let notesOptions = document.getElementById(`notesOptions${idNum}`);
    let note = document.getElementById(`note${idNum}`);
    let mainBody = document.querySelector(".mainBody");
    animateDeleted(idNum);
    mainBody.removeChild(note);
    removeNoteFromRecents(idNum);
    removeNoteFromFavSidebar(idNum);

    notesOptions.style.visibility = "hidden";

    if (mainBody.children.length == 1) {
      let emptypageText = document.createElement("div");
      emptypageText.classList.add("notesBorder");
      mainBody.appendChild(emptypageText);
    }
  }
};

const createAddToFav = (notesOptions, idNum) => {
  let addTofav = document.createElement("div");
  addTofav.classList.add("addToFav");
  addTofav.id = `addToFav${idNum}`;
  notesOptions.appendChild(addTofav);
  let favNoteIcon = document.createElement("img");
  favNoteIcon.classList.add("favNoteIcon");
  favNoteIcon.id = `favNoteIcon${idNum}`;
  favNoteIcon.textContent = "Fav";
  favNoteIcon.src = "../icons/favNotesIcon.svg";
  addTofav.appendChild(favNoteIcon);

  addTofav.addEventListener("click", handleEvents);
  favNoteIcon.addEventListener("click", handleEvents);

  function handleEvents(e) {
    e.stopPropagation();
    let idNum = parseInt(e.target.id.replace(/\D/g, ""), 10);
    if (!isOnFavourates(`note${idNum}`, FavNotes)) {
      FavNotes.push(`note${idNum}`);
      let notesOptions = document.getElementById(`notesOptions${idNum}`);
      notesOptions.style.visibility = "hidden";
      addTofavourateSidebar(idNum);
      animateAddedToFav();
    }
  }
};

const createBackOption = (notesOptions, idNum) => {
  let back = document.createElement("div");
  back.classList.add("back");
  back.id = `back${idNum}`;
  notesOptions.appendChild(back);
  back.innerHTML = "Back";

  back.addEventListener("click", (e) => {
    e.stopPropagation();
    let idNum = parseInt(e.target.id.replace(/\D/g, ""), 10);
    let notesOptions = document.getElementById(`notesOptions${idNum}`);
    notesOptions.style.visibility = "hidden";
  });
  mainBody.addEventListener("click", () => {
    let notesOptions = document.getElementById(`notesOptions${idNum}`);
    notesOptions.style.visibility = "hidden";
  });
};
