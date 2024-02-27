let dottedGrid = document.querySelector(".dottedGrid");
let addBtn = document.querySelector(".addBtn");
let blankPageText = document.querySelector(".blankPageText");
let notesBorder = document.querySelector(".notesBorder");
// let mainBody = document.querySelector(".mainBody");

export const addBtnVisiblityHandler = () => {
  setTimeout(() => {
    dottedGrid.style.visibility = "visible";
    addBtn.style.visibility = "hidden";
    blankPageText.style.visibility = "hidden";
    // mainBody.removeChild(blankPageText);
    makeBackButtonVisible();

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

  makeBackButtonInvisible();
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

let button1 = document.querySelector(".icon");
let button2 = document.querySelector(".backToHome");

export const makeBackButtonInvisible = () => {
  button1.style.visibility = "hidden";
  button2.style.visibility = "hidden";
  button2.animate(
    [
      { left: "15%", opacity: "1" },
      {
        left: "13%",
        opacity: "0",
      },
    ],
    {
      duration: 150,
      easing: "ease-out",
      fill: "forwards",
    }
  );
  // button2.style.left = "17%";
};

export const makeBackButtonVisible = () => {
  button1.style.visibility = "visible";
  button2.style.visibility = "visible";
  button2.animate(
    [
      { left: "17%", opacity: "0" },
      {
        left: "15%",
        opacity: "1",
      },
    ],
    {
      duration: 100,
      easing: "ease-out",
      fill: "forwards",
    }
  );
};

export const addBlankPageText = () => {
  let blankPageText = document.getElementById("blankPageText");
  blankPageText.style.visibility = "visible";
};
