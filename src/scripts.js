const elements = {
  porfolioItemsList: document.querySelectorAll("#portfolio-item"),
  activePortfolioItem: document.querySelector("[portfolio-item-active]"),
  closeOverlayBtn: document.querySelector("[portfolio-item-close]"),
  // overlay items
};

const projectsArray = [
  {
    title: "Kanban App",
    desc: `A simple todo esque app that relies on local storage 
        and a data file to persist tasks`,
    link: "https://dane-kanban.netlify.app",
    imgPath: "./img/dane-kanban.png",
  },
  {
    title: "Dashboard extention",
    desc: `A custom dashboard extention that uses API's and JavaScript to give 
    live data on weather, Dogecoin and the current time. The background changes
    everytime the page loads`,
    link: "https://dane-dashboard-extention.netlify.app/",
    imgPath: "./img/dashboard-extention.png",
  },
  {
    title: "Fictional bank Landing page",
    desc: `A bank Landing page for a fictional Bank catering for
    software developers specifically. It makes use of HTML/CSS and 
    JavaScript`,
    link: "https://dane-bank-landingpage.netlify.app/",
    imgPath: "./img/dane-bank-landingpage.png",
  },
];

elements.closeOverlayBtn.addEventListener("click", () => {
  elements.activePortfolioItem.open = false;
});

for (const item of elements.porfolioItemsList) {
  item.addEventListener("click", (event) => {
    elements.activePortfolioItem.open = true;
  });
}
