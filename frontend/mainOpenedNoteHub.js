import { SelectedNote } from "./appendNewNote.js";
import { OpenedNotes, openInSidebar } from "./sideBarOpenUpdate.js";
import {
  makeBackButtonInvisible,
  makeBackButtonVisible,
  makeNotesInvisible,
} from "./visiblityOfAddNewNotes.js";

export let previewPage = document.querySelector(".previewPage");
export let previewHeader = document.getElementById("previewHeader");
export let previewParagraph = document.getElementById("previewParagraph");
let addBtn = document.querySelector(".addBtn");
//
//
//
//It makes the Opened note "Visible"
export const openNote = (idNumber) => {
  makeBackButtonVisible();
  updateSelectedNote(idNumber);
  makeNotesInvisible();
  setTimeout(() => {
    previewPage.style.transform = "scale(1) translateX(0%)";

    previewPage.style.visibility = "visible";
    addBtn.style.visibility = "hidden";
  }, 100);
};

export const updateSelectedNote = (idNumber) => {
  //Editing Currently Selected note values
  SelectedNote.idNum = idNumber;
  SelectedNote.noteId = `note${idNumber}`;
  SelectedNote.headerId = `head${SelectedNote.idNum}`;
  SelectedNote.paragraphId = `paragraph${SelectedNote.idNum}`;
  SelectedNote.sideTabId = `sideTab${SelectedNote.idNum}`;
  SelectedNote.favTabId = `favTab${SelectedNote.idNum}`;
  SelectedNote.favTab = document.getElementById(SelectedNote.favTabId);

  //Appending new Keys "header" and "paragraph" to SelectedNote
  if (SelectedNote.header) {
    SelectedNote.header = document.getElementById(SelectedNote.headerId);
  }
  {
    SelectedNote["header"] = document.getElementById(SelectedNote.headerId);
  }
  // console.log(SelectedNote.header.innerHTML);
  if (SelectedNote.paragraph) {
    SelectedNote.paragraph = document.getElementById(SelectedNote.paragraphId);
  } else {
    SelectedNote["paragraph"] = document.getElementById(
      SelectedNote.paragraphId
    );
  }
  // console.log(SelectedNote.paragraph.innerHTML);
  updateTextArea(SelectedNote);
  openInSidebar(SelectedNote, OpenedNotes);
};

export const updateTextArea = (selectedNote) => {
  previewHeader.value = selectedNote.header.textContent;
  previewParagraph.value = selectedNote.paragraph.textContent;
};

//
//It makes the Opened note "Invisible"
export const closeNote = (e) => {
  let previewPage = document.querySelector(".previewPage");
  previewPage.style.visibility = "hidden";

  makeBackButtonInvisible();
  // sideBarOpenedNotesTab.removeChild(newDiv);
};
