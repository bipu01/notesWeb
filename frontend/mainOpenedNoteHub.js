export let idNumberOfNote, divHeaderId, divParagraphId;
//
//
//
//It makes the Opened note "Visible"
export const openNote = (divId) => {
  let previewPage = document.querySelector(".previewPage");
  previewPage.style.visibility = "visible";

  //It replaces everything in the string except integers and stores number in idNumberOfNote
  idNumberOfNote = parseInt(divId.replace(/\D/g, ""), 10);
  divHeaderId = "head" + idNumberOfNote + 1; //They store the Haeder ID of the Selected Note
  divParagraphId = "paragraph" + idNumberOfNote + 1; //They store the Paragraph I of the Selected Note

  let divHeader = document.getElementById(divHeaderId);
  let divParagraph = document.getElementById(divParagraphId);

  let previewHeader = document.getElementById("noteHeading");
  let previewParagraph = document.getElementById("paragraph");

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
};
