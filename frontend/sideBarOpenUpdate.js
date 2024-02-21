import { SelectedNote } from "./appendNewNote.js";
import {
  closeNote,
  openNote,
  updateSelectedNote,
} from "./mainOpenedNoteHub.js";

export const OpenedNotes = [];
export let openedNotesTab = document.getElementById("openedNotesTab");

//opens Side tab in sidebar
export const openInSidebar = (selectedNote) => {
  if (isOpenInSidebar(selectedNote.noteId, OpenedNotes)) {
    let text = document.createTextNode(selectedNote.header.innerHTML);
    updateSidebarTab(text);
    return console.log("Is open in sidebar");
  }
  //It adds this "noteId" to the list of opened Notes in sidebar
  OpenedNotes.push(SelectedNote.noteId);
  let newDiv = document.createElement("div");
  newDiv.id = `sideTab${selectedNote.idNum}`;
  newDiv.classList.add("sideTab");
  let text = document.createTextNode(selectedNote.header.textContent);

  newDiv.appendChild(text);
  openedNotesTab.appendChild(newDiv);

  newDiv.addEventListener("click", (e) => {
    let idNumOfSelf = parseInt(e.target.id.replace(/\D/g, ""), 10);
    if (SelectedNote.idNum == idNumOfSelf) {
      return console.log("same note is open");
    }
    openNote(idNumOfSelf);
    updateSelectedNote(idNumOfSelf);
  });

  let sideTab = document.getElementById(newDiv.id);
  sideTab.style.position = "relative";

  makeCloseBtn(selectedNote.idNum, newDiv);
};

export const updateSidebarTab = (textVal) => {
  let relatedSideTab = document.getElementById(SelectedNote.sideTabId);
  relatedSideTab.innerHTML = "";
  relatedSideTab.appendChild(textVal);

  makeCloseBtn(SelectedNote.idNum, relatedSideTab);
};

export const sendValueToUpdateSidebar = (e) => {
  let text = document.createTextNode(e.target.value);
  updateSidebarTab(text);
};

//
const makeCloseBtn = (idNum, newDiv) => {
  let closeBtn = document.createElement("button");
  closeBtn.classList.add("closeBtn");
  closeBtn.id = `closeBtn${idNum}`;

  closeBtn.addEventListener("click", (e) => {
    let parentId = `sideTab${e.target.id.replace(/\D/g, "")}`;
    let parent = document.getElementById(parentId);
    openedNotesTab.removeChild(parent);
    let parentIndex = OpenedNotes.indexOf(parentId);
    OpenedNotes.splice(parentIndex, 1);
    closeNote();
  });
  newDiv.appendChild(closeBtn);

  let closeBtnOfDiv = document.getElementById(closeBtn.id);
  closeBtnOfDiv.style.right = "0%";
  closeBtnOfDiv.style.top = "0%";
};

//Checks if a Note is open in Sidebar
export const isOpenInSidebar = (noteID, openedNotes) => {
  for (let i = 0; i < openedNotes.length; i++) {
    if (openedNotes[i] == noteID) {
      console.log(openedNotes[i]);
      return true;
    }
  }
  return false;
};
