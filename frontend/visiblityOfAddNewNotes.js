let dottedGrid = document.querySelector(".dottedGrid");
let addBtn = document.querySelector(".addBtn");
let blankPageText = document.querySelector(".blankPageText");

export const visiblityHandler = () => {
  let notes = document.querySelectorAll(".notes");
  dottedGrid.style.visibility = "visible";
  addBtn.style.visibility = "hidden";
  blankPageText.style.visibility = "hidden";

  for (let i = 0; i < notes.length; i++) {
    notes[i].style.visibility = "hidden";
  }
  addBtn.style.visibility = "hidden";
};
export const backVisiblityHandler = () => {
  let notes = document.querySelectorAll(".notes");
  dottedGrid.style.visibility = "hidden";
  addBtn.style.visibility = "visible";

  for (let i = 0; i < notes.length; i++) {
    notes[i].style.visibility = "visible";
  }
};
