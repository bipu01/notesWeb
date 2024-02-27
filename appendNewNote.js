import {
  animateAddedToFav,
  animateAlreadyFav,
  animateDeleted,
} from "./animations.js";
import { addTofavourateSidebar, isOnFavourates } from "./favTabs.js";
import {
  closeNote,
  openNote,
  updateSelectedNote,
} from "./mainOpenedNoteHub.js";
import {
  removeNoteFromFavSidebar,
  removeNoteFromRecents,
} from "./removeNotesFromSidebars.js";
import { OpenedNotes, isOpenInSidebar } from "./sideBarOpenUpdate.js";
import {
  addBlankPageText,
  backVisiblityHandler,
  makeNotesVisible,
} from "./visibilityOfComponents.js";

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
  // newNote.style.gridRow = `span ${x}`;
  newNote.style.gridColumn = `span ${y}`;
  newNote.style.height = `${16}rem`;
  // newNote.style.height = `${5}rem`;
  // newNote.style.width = `${y * 9}rem`;
  //Elongates to X if 'x' is passed ans viseversa

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
    // console.log(newNote.id);
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

export const appendThreeDotToNewNote = (idNum, newNote) => {
  let threeDotBox = document.createElement("div");
  threeDotBox.classList.add("threeDotBox");
  threeDotBox.id = `threeDotBox${idNum}`;

  let threeDot = document.createElement("img");
  threeDot.src = "./icons/notesOptionBlack.svg";
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

export const createNoteOptions = (newNote, idNum) => {
  let notesOptions = document.createElement("div");
  notesOptions.classList.add("notesOptions");
  notesOptions.id = `notesOptions${idNum}`;
  newNote.appendChild(notesOptions);

  createDeleteNote(notesOptions, idNum);
  createAddToFav(notesOptions, idNum);
  createBackOption(notesOptions, idNum);
};

export const createDeleteNote = (notesOptions, idNum) => {
  let deleteNote = document.createElement("div");
  deleteNote.classList.add("deleteNote");
  deleteNote.id = `deleteNote${idNum}`;
  notesOptions.appendChild(deleteNote);
  let deleteIcon = document.createElement("img");
  deleteIcon.classList.add("deleteNoteIcon");
  deleteIcon.textContent = "Delete";
  deleteIcon.src = "./icons/deleteNoteIcon.svg";
  deleteNote.appendChild(deleteIcon);

  deleteNote.addEventListener("click", deleteFunction);
  deleteIcon.addEventListener("click", deleteFunction);
  function deleteFunction(e) {
    e.stopPropagation();
    let idNum = parseInt(e.target.id.replace(/\D/g, ""), 10);

    // let deleteNote = document.getElementById(`deleteNote${idNum}`);
    let blankPageText = document.querySelector(".blankPageText");
    let notesOptions = document.getElementById(`notesOptions${idNum}`);
    let note = document.getElementById(`note${idNum}`);
    let mainBody = document.querySelector(".mainBody");
    animateDeleted(idNum);
    closeNote();
    // makeNotesVisible();
    backVisiblityHandler();

    mainBody.removeChild(note);

    if (isOpenInSidebar(`note${idNum}`, OpenedNotes)) {
      removeNoteFromRecents(idNum);
    }

    if (isOnFavourates(`note${idNum}`, FavNotes)) {
      removeNoteFromFavSidebar(idNum);
    }
    notesOptions.style.visibility = "hidden";

    // console.log("mainBody.children.length", mainBody.children.length);
    // console.log("mainBody.children", mainBody.children);

    if (isMainBodyEmpty()) {
      blankPageText.style.visibility = "visible";
      console.log("mainBody empty");
    }
  }
};

export const createAddToFav = (notesOptions, idNum) => {
  let addTofav = document.createElement("div");
  addTofav.classList.add("addToFav");
  addTofav.id = `addToFav${idNum}`;
  notesOptions.appendChild(addTofav);
  let favNoteIcon = document.createElement("img");
  favNoteIcon.classList.add("favNoteIcon");
  favNoteIcon.id = `favNoteIcon${idNum}`;
  favNoteIcon.textContent = "Fav";
  favNoteIcon.src = "./icons/favNotesIcon.svg";
  addTofav.appendChild(favNoteIcon);

  addTofav.addEventListener("click", handleEvents);
  favNoteIcon.addEventListener("click", handleEvents);

  function handleEvents(e) {
    // let previewOptionsPanel = document.querySelector(`.previewOptionsPanel`);
    let notesOptions = document.querySelector(`.notesOptions`);
    e.stopPropagation();

    let idNum = parseInt(e.target.id.replace(/\D/g, ""), 10);
    if (!isOnFavourates(`note${idNum}`, FavNotes)) {
      let notesOptions = document.querySelector(`.notesOptions`);
      // let previewOptionsPanel = document.querySelector(`.previewOptionsPanel`);
      FavNotes.push(`note${idNum}`);

      notesOptions.style.visibility = "hidden";

      addTofavourateSidebar(idNum);
      animateAddedToFav();
      return;
    }
    notesOptions.style.visibility = "hidden";

    // if (notesOptions) {
    //   if (notesOptions.style.visibility == "visible") {
    //   } else {
    //     notesOptions.style.visibility = "visible";
    //   }
    // }

    // if (previewOptionsPanel) {
    //   if (previewOptionsPanel.style.visibility == "visible") {
    //     previewOptionsPanel.style.visibility = "hidden";
    //   } else {
    //     previewOptionsPanel.style.visibility = "visible";
    //   }
    // }
    animateAlreadyFav(idNum);
  }
};

export const createBackOption = (notesOptions, idNum) => {
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
    if (notesOptions) {
      notesOptions.style.visibility = "hidden";
    }
  });
};

export const isMainBodyEmpty = () => {
  if (mainBody.children.length == 2) {
    return true;
  }
  return false;
};
