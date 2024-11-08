export const elements = {
  //portfolio items
  porfolioItemsList: document.querySelectorAll("#portfolio-item"),
  comingSoonItemList: document.querySelectorAll("#coming-soon-item"),
  activePortfolioItemOverlay: document.querySelector("[portfolio-item-active]"),
  // overlay items
  closeOverlayBtn: document.querySelector("[portfolio-item-close]"),
  portfolioInformation: document.querySelector("#information"),
  portfolioItemImage: document.querySelector("[portfolio-item-image]"),
  portfolioItemLink: document.querySelector("[portfolio-item-subtitle]"),
  portfolioItemDesc: document.querySelector("[portfolio-item-description]"),
};

export const projectsArray = [
  {
    index: 0,
    title: "Kanban App",
    desc: `A simple todo esque app that relies on local storage 
          and a data file to persist tasks`,
    link: "https://dane-kanban.netlify.app",
    imgPath: "./img/dane-kanban.png",
  },
  {
    index: 1,
    title: "Dashboard extention",
    desc: `A custom dashboard extention that uses API's and JavaScript to give 
      live data on weather, Dogecoin and the current time. The background changes
      everytime the page loads`,
    link: "https://dane-dashboard-extention.netlify.app/",
    imgPath: "./img/dashboard-extention.png",
  },
  {
    index: 2,
    title: "Fictional bank Landing page",
    desc: `A bank Landing page for a fictional Bank catering for
      software developers specifically. It makes use of HTML/CSS and 
      JavaScript`,
    link: "https://dane-bank-landingpage.netlify.app/",
    imgPath: "./img/dane-bank-landingpage.png",
  },
];

export const comingSoonArray = [
  {
    title: "Podcast app",
    description: `A website that functions the same as a generic podcast
    app using API's State Store and otheer higher level programming concepts`,
    //estimated time of completion
    ETC: "First Week of December 2024",
    imgPath: "./img/coming-soon-1.png",
  },
];
