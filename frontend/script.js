import { handleMouseUp, handleMouseDown } from "./mouseUpDownHandler.js";
import {
  visiblityHandler,
  backVisiblityHandler,
} from "./visiblityOfAddNewNotes.js";
import { openNote, closeNote } from "./mainOpenedNoteHub.js";
import {
  updateHeaderIfChanged,
  updateParagraphIfChanged,
} from "./updateHeadAndParagraphIfChanged.js";

export let mainBody = document.querySelector(".mainBody");
// export let nodesNumberHolder = document.querySelector(".dataHolder");
let addBtn = document.querySelector(".addBtn");
let backBtn = document.querySelector(".backBtn");
let dottedGrid = document.querySelector(".dottedGrid");
let notes = document.querySelectorAll(".notes");
let sidebar = document.querySelector(".sidebar");
let previewHeader = document.getElementById("noteHeading");
let previewParagraph = document.getElementById("paragraph");

dottedGrid.addEventListener("mousedown", handleMouseDown);
dottedGrid.addEventListener("mouseup", handleMouseUp);
addBtn.addEventListener("click", visiblityHandler);
backBtn.addEventListener("click", backVisiblityHandler);
sidebar.addEventListener("click", closeNote);
previewHeader.addEventListener("change", updateHeaderIfChanged);
previewParagraph.addEventListener("change", updateParagraphIfChanged);

// notes.forEach((note) => {
//   note.addEventListener("click", () => openNote(note.id));
// });

// let header = document.getElementById("head31");
// console.log(header);
