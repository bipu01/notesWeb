import { backVisiblityHandler } from "./visibilityOfComponents.js";
import { appendNote } from "./appendNewNote.js";

export const handleSize = (e) => {
  let size = e.target.id.replace(/\D/g, "");
  let rows = size[0];
  let columns = size[1];
  appendNote(rows, columns);
  backVisiblityHandler();
  console.table(rows, columns);
};
