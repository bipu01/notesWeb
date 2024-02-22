// export const enterFunctionHeader = (e) => {
//   let textarea = document.getElementById("previewHeader");
//   if (e.key === "Enter" && !e.shiftKey) {
//     e.preventDefault();

//     const start = textarea.selectionStart;
//     const end = textarea.selectionEnd;

//     // Insert newline character at cursor position
//     textarea.value =
//       textarea.value.substring(0, start) + "\n" + textarea.value.substring(end);

//     // Move cursor to the end of the inserted newline
//     textarea.selectionStart = textarea.selectionEnd = start + 1;
//   }
// };

// export const enterFunctionParagraph = (e) => {
//   let textarea = document.getElementById("previewParagraph");

//   if (e.key === "Enter" && !e.shiftKey) {
//     e.preventDefault();

//     const start = textarea.selectionStart;
//     const end = textarea.selectionEnd;

//     // Insert newline character at cursor position
//     textarea.value =
//       textarea.value.substring(0, start) + "\n" + textarea.value.substring(end);

//     // Move cursor to the end of the inserted newline
//     textarea.selectionStart = textarea.selectionEnd = start + 1;
//   }
// };
