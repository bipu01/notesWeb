import { idNumberOfNote } from "./mainOpenedNoteHub.js";

export let NumOfTabsInSidebar = 0;
export let sideBarOpenedNotesTab = document.getElementById("openedNotesTab");
export let closeTabBtn, newTextNote, header;

export let createSidebarTab = (textInSidebarDiv) => {
  header = document.createElement("h4");
  sideBarOpenedNotesTab = document.getElementById("openedNotesTab");
  newTextNote = document.createTextNode(textInSidebarDiv.textContent);

  header.appendChild(newTextNote);
  header.classList.add("sideTab");
  header.id = `sideTab${idNumberOfNote}1`;
  sideBarOpenedNotesTab.appendChild(header);

  let crossBtn = document.createElement("div");
  crossBtn.innerHTML = "x";
  crossBtn.classList.add("crossBtn");
  crossBtn.id = `crossBtn${idNumberOfNote}1`;

  sideBarOpenedNotesTab.appendChild(crossBtn);
};

export const updateSidebarTab = (textcontent, idNumberOfNote) => {
  let tempTextData = document.createTextNode(textcontent);
  let sidebarHeading = document.getElementById(`sideTab${idNumberOfNote}`);
  sidebarHeading.innerHTML = "";
  sidebarHeading.appendChild(tempTextData);
  console.log(sidebarHeading);
};

export const sendValueToUpdateSidebar = (e) => {
  // newTextNote = document.createTextNode(e.target.value);
  let classname = e.target.classList[0];
  let classNum = parseInt(classname.replace(/\D/g, ""), 10);
  let heading = document.getElementById(`head${classNum}`);
  let tempTextVal = heading.innerHTML;
  updateSidebarTab(tempTextVal, classNum);
};
