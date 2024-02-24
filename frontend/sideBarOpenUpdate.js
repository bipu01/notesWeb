import { SelectedNote } from "./appendNewNote.js";
import {
  closeNote,
  openNote,
  updateSelectedNote,
} from "./mainOpenedNoteHub.js";
import {
  backVisiblityHandler,
  makeNotesInvisible,
  makeNotesVisible,
} from "./visiblityOfAddNewNotes.js";

export let OpenedNotes = [];
export let recentTabsSidebar = document.getElementById("recentTabsSidebar");

//opens Side tab in sidebar
export const openInSidebar = (selectedNote, openedNotes) => {
  if (isOpenInSidebar(selectedNote.noteId, openedNotes)) {
    // console.log("fine till open in sideBar");
    let text = document.createTextNode(selectedNote.header.textContent);
    // console.log("text", text);
    // console.log("SelectedNote", SelectedNote);
    // console.log("OpenedNotes", OpenedNotes);
    updateSidebarTab(text);
    return;
  }
  // console.log("openedNotes", OpenedNotes);
  let newSideTab = document.createElement("div");
  newSideTab.id = `sideTab${selectedNote.idNum}`;
  newSideTab.classList.add("sideTab");
  let text = document.createTextNode(selectedNote.header.innerHTML);

  newSideTab.appendChild(text);
  recentTabsSidebar.appendChild(newSideTab);

  newSideTab.addEventListener("click", (e) => {
    let idNum = parseInt(e.target.id.replace(/\D/g, ""), 10);
    let previewPage = document.querySelector(".previewPage");
    previewPage.style.transform = "scale(0.95) translateX(-3%)";
    previewPage.style.transition = "all 0.15s ease-in-out";

    makeNotesInvisible();
    updateSelectedNote(idNum);
    openNote(idNum);
    changePreviewStyleToRecents();
  });

  OpenedNotes.push(selectedNote.noteId);
  let sideTab = document.getElementById(newSideTab.id);
  sideTab.style.position = "relative";
  // newSideTab.style.position = "relative";

  makeCloseBtnForRecentTabs(selectedNote.idNum, newSideTab);

  newSideTab.addEventListener("mouseover", (e) => {
    let idNum = parseInt(e.target.id.replace(/\D/g, ""), 10);
    let closeBtn = document.getElementById(`closeRecentBtn${idNum}`);
    closeBtn.style.opacity = "1";
  });
  newSideTab.addEventListener("mouseleave", (e) => {
    let idNum = parseInt(e.target.id.replace(/\D/g, ""), 10);
    let closeBtn = document.getElementById(`closeRecentBtn${idNum}`);
    closeBtn.style.opacity = "0";
  });
};

export const updateSidebarTab = (textVal) => {
  console.log("sideTabId", SelectedNote.sideTabId);
  let relatedSideTab = document.getElementById(SelectedNote.sideTabId);
  console.log("relatedSidetab", SelectedNote.sideTabId);
  relatedSideTab.innerHTML = "";
  relatedSideTab.appendChild(textVal);

  makeCloseBtnForRecentTabs(SelectedNote.idNum, relatedSideTab);
};

export const sendValueToUpdateSidebar = (e) => {
  let text = document.createTextNode(e.target.value);
  updateSidebarTab(text);
};

//
export const makeCloseBtnForRecentTabs = (idNum, newSideTab) => {
  let closeBtn = document.createElement("button");
  closeBtn.classList.add("closeBtn");
  closeBtn.classList.add("closeRecentBtn");
  closeBtn.id = `closeRecentBtn${idNum}`;

  newSideTab.appendChild(closeBtn);

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    let parentId = `sideTab${e.target.id.replace(/\D/g, "")}`;
    let parent = document.getElementById(parentId);
    recentTabsSidebar.removeChild(parent);
    let parentIndex = OpenedNotes.indexOf(parentId);
    OpenedNotes.splice(parentIndex, 1);
    closeNote();
    makeNotesVisible();
    backVisiblityHandler();
  });
  let specificallySelfTab = document.getElementById(`closeRecentBtn${idNum}`);
  specificallySelfTab.style.right = "0%";
  specificallySelfTab.style.top = "0%";
};
export const makeCloseBtnForFavTabs = (idNum, newSideTab) => {
  let closeBtn = document.createElement("button");
  closeBtn.classList.add("closeBtn");
  closeBtn.classList.add("closeFavBtn");
  closeBtn.id = `closeFavBtn${idNum}`;
  newSideTab.appendChild(closeBtn);
  let favTabsSidebar = document.getElementById("favTabsSidebar");

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    let parentId = `favTab${e.target.id.replace(/\D/g, "")}`;
    let parent = document.getElementById(parentId);
    favTabsSidebar.removeChild(parent);
    let parentIndex = OpenedNotes.indexOf(parentId);
    OpenedNotes.splice(parentIndex, 1);
    closeNote();
    makeNotesVisible();
    backVisiblityHandler();
  });
  let specificallySelfTab = document.getElementById(`closeFavBtn${idNum}`);
  specificallySelfTab.style.right = "0%";
  specificallySelfTab.style.top = "0%";
};

//Checks if a Note is open in Sidebar
export let isOpenInSidebar = (noteID, openedNotes) => {
  for (let i = 0; i < openedNotes.length; i++) {
    if (openedNotes[i] == noteID) {
      console.log(openedNotes[i]);
      return true;
    }
  }
  return false;
};
