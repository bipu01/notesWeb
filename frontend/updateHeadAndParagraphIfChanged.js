import { divHeaderId, divParagraphId } from "./mainOpenedNoteHub.js";

export const updateHeaderIfChanged = (e) => {
  let header = document.getElementById(divHeaderId);
  header.innerHTML = e.target.value;
};
export const updateParagraphIfChanged = (e) => {
  let paragraph = document.getElementById(divParagraphId);
  paragraph.innerHTML = e.target.value;
};
