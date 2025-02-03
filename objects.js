export const elements = {
  //portfolio items
  porfolioItemsList: document.querySelectorAll("#portfolio-item"),
  comingSoonItemList: document.querySelectorAll("#coming-soon-item"),
  activePortfolioItemOverlay: document.querySelector(
    "[data-portfolio-item-active]"
  ),
  // overlay items
  closeOverlayBtn: document.querySelector("[data-portfolio-item-close]"),
  portfolioInformation: document.querySelector("#information"),
  portfolioItemImage: document.querySelector("[data-portfolio-item-image]"),
  portfolioItemLink: document.querySelector("[data-portfolio-item-subtitle]"),
  portfolioItemDesc: document.querySelector(
    "[data-portfolio-item-description]"
  ),
};

export const projectsArray = [
  {
    index: 0,
    title: "Kanban App",
    desc: `A simple todo esque app that relies on local storage 
          and a data file to persist tasks. Makes use of Local Storage, JS/HTML/CSS and Modal windows to achieve a suitable UI design`,
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
  {
    index: 3,
    title: "Podcast app",
    desc: `A website that functions the same as a generic podcast
    app using API's State Store and otheer higher level programming concepts`,
    link: "https://dane-podcast-app.netlify.app/",
    imgPath: "./img/dane-podcast-app.png",
  },
  {
    index: 4,
    title: "TicTacToe WPF",
    desc: `A Windows Presentation foundation that functions the same as a traditional TicTacToe game. 
    It makes use of the Grid elements and C# for it's logic and functionality`,
    link: "https://github.com/DaneVN/TicTacToe/tree/main",
    imgPath: "./img/tictactoe-wpf.png",
  },
];

export const comingSoonArray = [
  {
    title: "Wedding Invitation",
    description: `A website that displays the needed information to be sent out to guests as a link. 
    It can serve as a 'save the date' or an invitation card`,
    //estimated time of completion
    ETC: "End of February",
    imgPath: "./img/coming-soon-1.png",
  },
];
