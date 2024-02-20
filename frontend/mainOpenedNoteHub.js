import {
  createSidebarTab,
  sideBarOpenedNotesTab,
  updateSidebarTab,
} from "./sideBarOpenUpdate.js";

export let idNumberOfNote, divHeaderId, divParagraphId, divHeader, divParagraph;

let previewPage = document.querySelector(".previewPage");
//
//
//
//It makes the Opened note "Visible"
export const openNote = (divId) => {
  previewPage.style.visibility = "visible";

  idNumberOfNote = parseInt(divId.replace(/\D/g, ""), 10); //Id of opened Note
  console.log("idNum of note", idNumberOfNote);

  divHeaderId = "head" + idNumberOfNote + "1"; //Id of h3 of Note
  divParagraphId = "paragraph" + idNumberOfNote + "1"; //Id of p of Note
  console.log("divHeaderId:", divHeaderId);

  divHeader = document.getElementById(divHeaderId); //<h3> element
  divParagraph = document.getElementById(divParagraphId); //<p> element

  //preview page components
  let previewHeader = document.getElementById("previewHeader"); //<textArea> "header" of preview
  let previewParagraph = document.getElementById("previewParagraph"); //<textArea> "paragraph" of  preview

  previewPage.classList.add(`previewPage${idNumberOfNote}1`); //Adding unique className to previewPage
  previewHeader.classList.add(`previewHeader${idNumberOfNote}1`); //Adding unique className to previewHeader
  previewParagraph.classList.add(`previewParagraph${idNumberOfNote}1`); //Adding unique className to previewParagraph

  let sidebarDivId = `sideTab${idNumberOfNote}1`; //Id of <div> in Sidebar

  // console.log(previewPage);
  if (sideBarOpenedNotesTab.querySelector(`#${sidebarDivId}`) == null) {
    let textInNoteDiv = document.createTextNode(divHeader.textContent);
    createSidebarTab(textInNoteDiv);
    console.log("has no child ie Sidebar created");
  } else {
    updateSidebarTab(divHeader.innerHTML, `${idNumberOfNote}1`);
    console.log("has child ie no Sidebar created");
  }

  previewHeader.value = divHeader.innerHTML;
  previewParagraph.value = divParagraph.innerHTML;
};

//
//
//
//It makes the Opened note "Invisible"
export const closeNote = (e) => {
  let previewPage = document.querySelector(".previewPage");
  previewPage.style.visibility = "hidden";

  previewPage.classList.remove(`previewPage${idNumberOfNote}1`);
  previewHeader.classList.remove(`previewHeader${idNumberOfNote}1`);
  previewParagraph.classList.remove(`previewParagraph${idNumberOfNote}1`);
  // sideBarOpenedNotesTab.removeChild(newDiv);
};
