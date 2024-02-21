import { SelectedNote } from "./appendNewNote.js";

export const updateHeaderIfChanged = (e) => {
  SelectedNote.header.innerHTML = e.target.value;
};
export const updateParagraphIfChanged = (e) => {
  SelectedNote.paragraph.innerHTML = e.target.value;
};
