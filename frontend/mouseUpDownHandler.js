import { backVisiblityHandler } from "./visiblityOfAddNewNotes.js";
import { appendNote } from "./appendNewNote.js";

let x1, y1, x2, y2;
export const handleMouseDown = (e) => {
  x1 = e.screenX;
  y1 = e.screenY;
};

export const handleMouseUp = (e) => {
  x2 = e.screenX;
  y2 = e.screenY;
  let boxesOnX = 0;
  let boxesOnY = 0;

  let boxes = document.querySelectorAll(".dashedBoxes");
  boxes.forEach((box) => {
    let rect = box.getBoundingClientRect();

    if (
      rect.right >= x1 &&
      rect.left <= x2 &&
      rect.top <= y2 &&
      rect.bottom >= y1
    ) {
      boxesOnX++;
    }
  });
  console.log("boxesOnX", boxesOnX);
  console.log("boxesOnY:", boxesOnY);

  appendNote(boxesOnX, boxesOnX);
  backVisiblityHandler();
};
