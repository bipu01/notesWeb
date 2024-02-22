import { handleMouseUp, handleMouseDown } from "./mouseUpDownHandler.js";
import {
  visiblityHandler,
  backVisiblityHandler,
} from "./visiblityOfAddNewNotes.js";
import { closeNote } from "./mainOpenedNoteHub.js";
import {
  updateHeaderIfChanged,
  updateParagraphIfChanged,
} from "./updateHeadAndParagraphIfChanged.js";
import { sendValueToUpdateSidebar } from "./sideBarOpenUpdate.js";
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

dottedGrid.addEventListener("mousedown", handleMouseDown);
dottedGrid.addEventListener("mouseup", handleMouseUp);
addBtn.addEventListener("click", visiblityHandler);
homeBackBtn.addEventListener("click", closeNote);
homeBackBtn.addEventListener("click", backVisiblityHandler);
previewHeader.addEventListener("change", updateHeaderIfChanged);
previewHeader.addEventListener("change", sendValueToUpdateSidebar);
// previewHeader.addEventListener("keydown", enterFunctionHeader);
previewParagraph.addEventListener("change", updateParagraphIfChanged);
// previewParagraph.addEventListener("keydown", enterFunctionParagraph);
