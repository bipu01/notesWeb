import {
  animateAddedToFav,
  animateAlreadyFav,
  animateDeleted,
} from "./animations.js";
import { FavNotes, SelectedNote, isMainBodyEmpty } from "./appendNewNote.js";
import { addTofavourateSidebar, isOnFavourates } from "./favTabs.js";
import {
  removeNoteFromFavSidebar,
  removeNoteFromRecents,
} from "./removeNotesFromSidebars.js";
import { OpenedNotes, isOpenInSidebar } from "./sideBarOpenUpdate.js";
import { backVisiblityHandler } from "./visibilityOfComponents.js";

export const handlePreviewPageFeatures = () => {
  // let previewOptions = document.querySelector(".previewOptions");
  let previewPage = document.querySelector(".previewPage");

  let previewOptionsPanel = document.createElement("div");
  previewOptionsPanel.classList.add("previewOptionsPanel");
  previewOptionsPanel.id = `previewOptionsPanel`;
  previewPage.appendChild(previewOptionsPanel);

  createPreviewAddToFav(previewOptionsPanel, SelectedNote.idNum);
  createDeleteBtnForPreviewPage(previewOptionsPanel);
  console.log("Hello from previewPage features");
};
const createDeleteBtnForPreviewPage = (previewOptionsPanel) => {
  let deleteNote = document.createElement("div");
  deleteNote.classList.add("deleteNote");
  //   deleteNote.id = `deleteNote${idNum}`;
  previewOptionsPanel.appendChild(deleteNote);
  let deleteIcon = document.createElement("img");
  deleteIcon.classList.add("deleteNoteIcon");
  deleteIcon.textContent = "Delete";
  deleteIcon.src = "../icons/deleteNoteIcon.svg";
  deleteNote.appendChild(deleteIcon);

  deleteNote.addEventListener("click", deleteFunction);
  deleteIcon.addEventListener("click", deleteFunction);
  function deleteFunction(e) {
    e.stopPropagation();
    let blankPageText = document.querySelector(".blankPageText");
    let previewOptionsPanel = document.getElementById(`previewOptionsPanel`);
    let note = document.getElementById(`note${SelectedNote.idNum}`);
    let mainBody = document.querySelector(".mainBody");
    animateDeleted(SelectedNote.idNum);
    mainBody.removeChild(note);

    makePreviewPageInvisible();
    // closeNote();
    backVisiblityHandler();

    if (isOpenInSidebar(`note${SelectedNote.idNum}`, OpenedNotes)) {
      removeNoteFromRecents(SelectedNote.idNum);
    }

    if (isOnFavourates(`note${SelectedNote.idNum}`, FavNotes)) {
      removeNoteFromFavSidebar(SelectedNote.idNum);
    }

    previewOptionsPanel.style.visibility = "hidden";

    if (isMainBodyEmpty()) {
      blankPageText.style.visibility = "visible";
      console.log("mainBody empty");
    }
  }
};

export const updatePreviewPage = (selectedNote) => {
  previewHeader.textContent = selectedNote.header.textContent;
  previewParagraph.textContent = selectedNote.paragraph.textContent;

  if (previewHeader.textContent == "") {
    previewHeader.textContent = "Title/Heading";
  }
  if (previewParagraph.textContent == "") {
    previewParagraph.textContent = "Add notes and Reminders Here";
  }
};

export const makePreviewPageVisible = () => {};
export const makePreviewPageInvisible = () => {
  let previewPage = document.querySelector(".previewPage");
  previewPage.style.visibility = "hidden";
};

export const createPreviewAddToFav = (previewOptionsPanel, idNum) => {
  let addTofav = document.createElement("div");
  addTofav.classList.add("addToFav");
  addTofav.id = `addToFav${idNum}`;
  previewOptionsPanel.appendChild(addTofav);
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
      let previewOptionsPanel = document.querySelector(`.previewOptionsPanel`);
      FavNotes.push(`note${idNum}`);

      previewOptionsPanel.style.visibility = "hidden";
      addTofavourateSidebar(idNum);
      animateAddedToFav();
      return;
    }
    previewOptionsPanel.style.visibility = "hidden";
    animateAlreadyFav(idNum);
  }
};

export const handleHeadingHighlight = (e) => {
  let selection = window.getSelection().toString();
  console.log("selection", selection);
  if (selection) {
    const range = window.getSelection().getRangeAt(0);
    console.log(range.commonAncestorContainer);
    let highlightedText = range.toString();
    console.log("range", highlightedText);

    // Check if the new selection overlaps with the existing one
    const existingSpan = document.querySelector(".highlitedText");
    if (existingSpan && range.intersectsNode(existingSpan)) {
      // Update the existing span
      let compoundedSpan = document.createElement("span");
      compoundedSpan.className = "highlitedText";

      existingSpan.textContent = highlightedText;
    } else {
      // Create a new span for the selected text
      let newSpan = document.createElement("span");
      newSpan.className = "highlitedText";
      newSpan.textContent = highlightedText;

      // Surround the selected text with the new span element
      range.surroundContents(newSpan);
    }
  }
};
