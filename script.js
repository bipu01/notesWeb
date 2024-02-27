import {
  addBtnVisiblityHandler,
  backVisiblityHandler,
  makeNotesVisible,
} from "./visibilityOfComponents.js";
import { closeNote } from "./mainOpenedNoteHub.js";
import {
  updateHeaderIfChanged,
  updateParagraphIfChanged,
} from "./updateHeadAndParagraphIfChanged.js";
import { sendValueToUpdateSidebar } from "./sideBarOpenUpdate.js";
import { sendValueToUpdateFavourates } from "./favTabs.js";
import { showFavTabs, showrecentTabs } from "./animations.js";
import {
  handleHeadingHighlight,
  handlePreviewPageFeatures,
} from "./previewPageFeatures.js";
import { handleSize } from "./noteSizeHandler.js";

export let mainBody = document.querySelector(".mainBody");
let addBtn = document.querySelector(".addBtn");
// let dottedGrid = document.querySelector(".dottedGrid");
let previewHeader = document.getElementById("previewHeader");
let previewParagraph = document.getElementById("previewParagraph");
let homeBackBtn = document.querySelector(".backToHome");
let favTabsIcon = document.getElementById("favTabsIcon");
let recentTabsIcon = document.getElementById("recentTabsIcon");
let previewOption = document.querySelector(".previewOptions");
let noteSizes = document.querySelectorAll(".size");

// dottedGrid.addEventListener("mousedown", handleMouseDown);
noteSizes.forEach((noteSize) => {
  noteSize.addEventListener("click", handleSize);
});

addBtn.addEventListener("click", addBtnVisiblityHandler);
homeBackBtn.addEventListener("click", closeNote);
homeBackBtn.addEventListener("click", backVisiblityHandler);
homeBackBtn.addEventListener("click", makeNotesVisible);
previewHeader.addEventListener("input", updateHeaderIfChanged);
previewHeader.addEventListener("input", sendValueToUpdateSidebar);
previewHeader.addEventListener("input", sendValueToUpdateFavourates);
previewHeader.addEventListener("mouseup", handleHeadingHighlight);
previewParagraph.addEventListener("input", updateParagraphIfChanged);
// previewParagraph.addEventListener("keypress", updateParagraphIfChanged);
favTabsIcon.addEventListener("click", showFavTabs);
recentTabsIcon.addEventListener("click", showrecentTabs);
previewOption.addEventListener("click", handlePreviewPageFeatures);
