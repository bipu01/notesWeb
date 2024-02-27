export const showrecentTabs = () => {
  let slidesAtSidebar = document.querySelector(".slidesAtSidebar");
  let favTabsSidebar = document.getElementById("favTabsSidebar");
  let recentTabsSidebar = document.getElementById("recentTabsSidebar");
  let recentTabsIcon = document.getElementById("recentTabsIcon");
  let favTabsIcon = document.getElementById("favTabsIcon");

  favTabsIcon.src = "../icons/favsWhite.svg";
  slidesAtSidebar.style.right = "100%";
  setTimeout(() => {
    recentTabsIcon.style.opacity = "1";
    favTabsIcon.style.opacity = "0.7";
    favTabsSidebar.style.visibility = "hidden";
    recentTabsSidebar.style.visibility = "visible";
  }, 200);
};

export const showFavTabs = () => {
  let recentTabsSidebar = document.getElementById("recentTabsSidebar");
  let favTabsSidebar = document.getElementById("favTabsSidebar");
  let sidebarSlides = document.querySelector(".slidesAtSidebar");
  //   let icons = document.querySelector(".icons");
  let favTabsIcon = document.getElementById("favTabsIcon");

  favTabsIcon.src = "../icons/favNotesIcon.svg";
  sidebarSlides.style.right = "0%";
  recentTabsSidebar.style.visibility = "hidden";
  setTimeout(() => {
    favTabsIcon.style.opacity = "1";
    recentTabsIcon.style.opacity = "0.7";

    favTabsSidebar.style.visibility = "visible";
  }, 100);
};

export const animateAddedToFav = () => {
  let fabList = document.getElementById("favTabsSidebar");
  let latestFavTab = document.getElementById(fabList.childNodes[1].id);

  latestFavTab.animate(
    [
      {
        height: "12vw",
        marginTop: "18%",
        filter: "saturate(8)",
      },
      //   { height: "12vw", marginTop: "10%" },
      //   { height: "12vw", marginTop: "10%" },
      {
        height: "6vw",
        marginTop: "32%",
        filter: "saturate(8)",
      },
      //   { height: "12vw", marginTop: "7%" },
      {
        height: "12vw",
        marginTop: "18%",
        filter: "saturate(5)",
      },
      {
        height: "7vw",
        marginTop: "5%",
        filter: "saturate(5)",
      },
      {
        height: "9vw",
        marginTop: "10%",
      },
      { height: "clamp(5rem, 7vw, 10rem)", marginTop: "clamp(2px, 5%, 1rem)" },
    ],
    {
      duration: 700,
      fill: "forwards",
      easing: "linear",
    }
  );
  showFavTabs();
  //   latestFavTab.style.transform = "scale(1.3)";
  //   let addTab = document.getElementById();
};

export const animateDeleted = (idNum) => {
  //   console.log(noteId);
  let note = document.getElementById(`note${idNum}`);
};

export const animateAlreadyFav = (idNum) => {
  let favTab = document.getElementById(`favTab${idNum}`);
  favTab.animate(
    [
      { border: "2px solid blue" },
      { border: "" },
      { border: "2px solid blue" },
      { border: "" },
      { border: "2px solid blue" },
      { border: "" },
    ],
    {
      fill: "forwards",
      duration: 1000,
      easing: "ease-in",
    }
  );
};
