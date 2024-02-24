import { SelectedNote } from "./appendNewNote.js";
import { FavNotes } from "./appendNewNote.js";
import { openNote, updateSelectedNote } from "./mainOpenedNoteHub.js";
import { makeCloseBtnForFavTabs } from "./sideBarOpenUpdate.js";
import { makeNotesInvisible } from "./visiblityOfAddNewNotes.js";

export const showrecentTabs = (e) => {
  let slidesAtSidebar = document.querySelector(".slidesAtSidebar");
  let favTabsSidebar = document.getElementById("favTabsSidebar");
  let recentTabsSidebar = document.getElementById("recentTabsSidebar");
  let recentTabsIcon = document.getElementById("recentTabsIcon");
  let favTabsIcon = document.getElementById("favTabsIcon");

  favTabsIcon.src = "../icons/favsWhite.svg";
  slidesAtSidebar.style.right = "100%";
  setTimeout(() => {
    recentTabsIcon.style.opacity = "1";
    favTabsIcon.style.opacity = "0.7";
    favTabsSidebar.style.visibility = "hidden";
    recentTabsSidebar.style.visibility = "visible";
  }, 200);
};

export const showFavTabs = (e) => {
  let recentTabsSidebar = document.getElementById("recentTabsSidebar");
  let favTabsSidebar = document.getElementById("favTabsSidebar");
  let sidebarSlides = document.querySelector(".slidesAtSidebar");
  //   let icons = document.querySelector(".icons");
  let favTabsIcon = document.getElementById("favTabsIcon");

  favTabsIcon.src = "../icons/favNotesIcon.svg";
  sidebarSlides.style.right = "0%";
  recentTabsSidebar.style.visibility = "hidden";
  setTimeout(() => {
    favTabsIcon.style.opacity = "1";
    recentTabsIcon.style.opacity = "0.7";

    favTabsSidebar.style.visibility = "visible";
  }, 100);
};

export const addTofavourateSidebar = (idNum) => {
  let noteId = `note${idNum}`;
  let note = document.getElementById(noteId);
  let head = document.getElementById(`head${idNum}`);
  let headText = document.createTextNode(head.innerHTML);
  // let text = document.createTextNode(note.textContent);

  let favTabsSlider = document.getElementById("favTabsSidebar");
  let newFavTab = document.createElement("div");
  newFavTab.classList.add("favTab");
  newFavTab.id = `favTab${idNum}`;
  newFavTab.innerHTML = "";
  newFavTab.appendChild(headText);
  favTabsSlider.appendChild(newFavTab);

  newFavTab.style.position = "relative";
  // FavNotes.push(`note${idNum}`);

  makeCloseBtnForFavTabs(idNum, newFavTab);

  newFavTab.addEventListener("click", (e) => {
    console.log("favTab clicked");
    let idNum = parseInt(e.target.id.replace(/\D/g, ""), 10);
    let previewPage = document.querySelector(".previewPage");
    previewPage.style.transform = "scale(0.95) translateX(-3%)";
    previewPage.style.transition = "all 0.15s ease-in-out";

    makeNotesInvisible();
    updateSelectedNote(idNum);
    openNote(idNum);
    changePreviewStyleToFav();
  });

  newFavTab.addEventListener("mouseover", (e) => {
    console.log("favTab mouseOver");
    let idNum = parseInt(e.target.id.replace(/\D/g, ""), 10);
    let closeBtn = document.getElementById(`closeFavBtn${idNum}`);
    closeBtn.style.opacity = "1";
  });
  newFavTab.addEventListener("mouseleave", (e) => {
    console.log("favTab mouseLeave");
    let idNum = parseInt(e.target.id.replace(/\D/g, ""), 10);
    let closeBtn = document.getElementById(`closeFavBtn${idNum}`);
    closeBtn.style.opacity = "0";
  });

  console.log(favTabsSlider);
};

export const updateFavourate = (text, selectedNote) => {
  console.log("text passed to updateFav", text);

  let relatedSideTab = document.getElementById(selectedNote.favTabId);
  console.log("relatedSidetab", relatedSideTab);
  relatedSideTab.textContent = "";
  relatedSideTab.appendChild(text);

  makeCloseBtnForFavTabs(SelectedNote.idNum, relatedSideTab);
};

export const sendValueToUpdateFavourates = (e) => {
  if (isOnFavourates(SelectedNote.noteId, FavNotes)) {
    console.log(`${SelectedNote.noteId}  is on Favourates`);
    let text = document.createTextNode(e.target.value);
    updateFavourate(text, SelectedNote);
    return;
  }
  console.log(`${SelectedNote.noteId}  is not in fav`);
};

export const isOnFavourates = (noteId, FavNotes) => {
  for (let i = 0; i < FavNotes.length; i++) {
    if (FavNotes[i] == noteId) {
      return true;
    }
  }
  return false;
};
