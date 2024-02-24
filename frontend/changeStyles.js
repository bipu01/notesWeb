export const changePreviewStyleToFav = () => {
  let previewPage = document.querySelector(".previewPage");
  previewPage.style.backgroundColor = "var(--favTabs-previewPage-bg-color)";
};
export const changePreviewStyleToRecents = () => {
  let previewPage = document.querySelector(".previewPage");
  previewPage.style.backgroundColor = "var(--recentTabs-previewPage-bg-color)";
};

// let sidebar = document.querySelector(".sidebar");
// let notesBorder = document.querySelector(".notesBorder");
// let previewPage = document.querySelector(".previewPage");
// let backToHome = document.querySelector(".backToHome");

// export const handleSidebarMouseOver = (e) => {
//   sidebar.style.width = "calc((1/7)*100vw)";
//   notesBorder.style.left = "16%";
//   notesBorder.style.width = "83vw";
//   previewPage.style.width = "clamp(10rem, 84vw, 90rem)";
//   backToHome.style.left = "11%";
//   backToHome.style.top = "2%";
// };
// export const handleSidebarMouseLeave = (e) => {
//   let sidebar = document.querySelector(".sidebar");
//   sidebar.style.width = "6rem";
//   notesBorder.style.left = "9%";
//   notesBorder.style.width = "90vw";
//   previewPage.style.width = "clamp(10rem, 91vw, 90rem)";
//   backToHome.style.left = "10%";
//   backToHome.style.top = "1%";
// };
