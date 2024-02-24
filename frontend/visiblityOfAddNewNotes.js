let dottedGrid = document.querySelector(".dottedGrid");
let addBtn = document.querySelector(".addBtn");
let blankPageText = document.querySelector(".blankPageText");
let notesBorder = document.querySelector(".notesBorder");

export const visiblityHandler = () => {
  setTimeout(() => {
    dottedGrid.style.visibility = "visible";
    addBtn.style.visibility = "hidden";
    blankPageText.style.visibility = "hidden";

    addBtn.style.visibility = "hidden";
  }, 100);
  makeNotesInvisible();
};
export const backVisiblityHandler = () => {
  setTimeout(() => {
    dottedGrid.style.visibility = "hidden";
    notesBorder.style.visibility = "visible";
    addBtn.style.visibility = "visible";
  }, 0);
  makeNotesVisible();
};

export const makeNotesVisible = () => {
  let notes = document.querySelectorAll(".notes");
  notesBorder.style.visibility = "visible";
  for (let i = 0; i < notes.length; i++) {
    notes[i].style.visibility = "visible";
  }
};
export const makeNotesInvisible = () => {
  let notes = document.querySelectorAll(".notes");
  notesBorder.style.visibility = "hidden";
  for (let i = 0; i < notes.length; i++) {
    notes[i].style.visibility = "hidden";
  }
};
