export const removeNoteFromRecents = (idNum) => {
  let tab = document.getElementById(`sideTab${idNum}`);
  let recentTabsSidebar = document.getElementById(`recentTabsSidebar`);
  recentTabsSidebar.removeChild(tab);
};

export const removeNoteFromFavSidebar = (idNum) => {
  let tab = document.getElementById(`favTab${idNum}`);
  let favTabsSidebar = document.getElementById(`favTabsSidebar`);
  favTabsSidebar.removeChild(tab);
};
