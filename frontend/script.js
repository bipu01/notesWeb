import { handleMouseUp, handleMouseDown } from "./mouseUpDownHandler.js";
import {
  visiblityHandler,
  backVisiblityHandler,
  makeNotesVisible,
} from "./visiblityOfAddNewNotes.js";
import { closeNote } from "./mainOpenedNoteHub.js";
import {
  updateHeaderIfChanged,
  updateParagraphIfChanged,
} from "./updateHeadAndParagraphIfChanged.js";
import { sendValueToUpdateSidebar } from "./sideBarOpenUpdate.js";
import {
  sendValueToUpdateFavourates,
  showFavTabs,
  showrecentTabs,
} from "./favTabs.js";
// import {
//   handleSidebarMouseLeave,
//   handleSidebarMouseOver,
// } from "./changeStyles.js";
// import {
//   enterFunctionHeader,
//   enterFunctionParagraph,
// } from "./preventingDefaultBehavour.js";

export let mainBody = document.querySelector(".mainBody");
// export let nodesNumberHolder = document.querySelector(".dataHolder");
let addBtn = document.querySelector(".addBtn");
let dottedGrid = document.querySelector(".dottedGrid");
let previewHeader = document.getElementById("previewHeader");
let previewParagraph = document.getElementById("previewParagraph");
let homeBackBtn = document.querySelector(".backToHome");
let favTabsIcon = document.getElementById("favTabsIcon");
let recentTabsIcon = document.getElementById("recentTabsIcon");
let sidebar = document.querySelector(".sidebar");

dottedGrid.addEventListener("mousedown", handleMouseDown);
dottedGrid.addEventListener("mouseup", handleMouseUp);
addBtn.addEventListener("click", visiblityHandler);
homeBackBtn.addEventListener("click", closeNote);
homeBackBtn.addEventListener("click", backVisiblityHandler);
homeBackBtn.addEventListener("click", makeNotesVisible);
previewHeader.addEventListener("change", updateHeaderIfChanged);
previewHeader.addEventListener("change", sendValueToUpdateSidebar);
previewHeader.addEventListener("change", sendValueToUpdateFavourates);
previewParagraph.addEventListener("change", updateParagraphIfChanged);
favTabsIcon.addEventListener("click", showFavTabs);
recentTabsIcon.addEventListener("click", showrecentTabs);

// sidebar.addEventListener("mouseover", handleSidebarMouseOver);
// sidebar.addEventListener("mouseleave", handleSidebarMouseLeave);
