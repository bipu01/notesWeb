export const changePreviewStyleToFav = () => {
  let previewPage = document.querySelector(".previewPage");
  previewPage.style.backgroundColor = "var(--favTabs-previewPage-bg-color)";
};
export const changePreviewStyleToRecents = () => {
  let previewPage = document.querySelector(".previewPage");
  previewPage.style.backgroundColor = "var(--recentTabs-previewPage-bg-color)";
};
