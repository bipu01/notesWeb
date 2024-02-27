import { SelectedNote } from "./appendNewNote.js";

export const updateHeaderIfChanged = (e) => {
  SelectedNote.header.innerHTML = e.target.textContent;
  // console.log("header Changed");
};
export const updateParagraphIfChanged = (e) => {
  SelectedNote.paragraph.innerHTML = e.target.textContent;
};
