import { SelectedNote } from "./appendNewNote.js";
import { openInSidebar } from "./sideBarOpenUpdate.js";

export let previewPage = document.querySelector(".previewPage");
export let previewHeader = document.getElementById("previewHeader");
export let previewParagraph = document.getElementById("previewParagraph");
//
//
//
//It makes the Opened note "Visible"
export const openNote = (idNumber) => {
  // let idNumber = parseInt(e.target.id.replace(/\D/g, ""), 10);
  updateSelectedNote(idNumber);
  previewPage.style.visibility = "visible";
};

export const updateSelectedNote = (idNumber) => {
  //Editing Currently Selected note values
  SelectedNote.noteId = `note${idNumber}`;
  SelectedNote.idNum = idNumber;
  SelectedNote.headerId = `head${SelectedNote.idNum}`;
  SelectedNote.paragraphId = `paragraph${SelectedNote.idNum}`;
  SelectedNote.sideTabId = `sideTab${SelectedNote.idNum}`;

  //Appending new Keys "header" and "paragraph" to SelectedNote
  SelectedNote["header"] = document.getElementById(SelectedNote.headerId);
  SelectedNote["paragraph"] = document.getElementById(SelectedNote.paragraphId);

  updateTextArea(SelectedNote);
  //Need to pass "Noteid" and it's "headerId" to prevent double tabs in sidebar
  openInSidebar(SelectedNote);
};

export const updateTextArea = (selectedNote) => {
  console.log(selectedNote.header.innerHTML);
  previewHeader.value = selectedNote.header.innerHTML;
  previewParagraph.value = selectedNote.paragraph.innerHTML;
};

//
//It makes the Opened note "Invisible"
export const closeNote = () => {
  let previewPage = document.querySelector(".previewPage");
  previewPage.style.visibility = "hidden";
  // sideBarOpenedNotesTab.removeChild(newDiv);
};
