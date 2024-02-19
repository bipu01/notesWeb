let dottedGrid = document.querySelector(".dottedGrid");
let addBtn = document.querySelector(".addBtn");

export const visiblityHandler = () => {
  dottedGrid.style.visibility = "visible";
  addBtn.style.visibility = "hidden";
};
export const backVisiblityHandler = () => {
  dottedGrid.style.visibility = "hidden";
  addBtn.style.visibility = "visible";
};
