const frontEndProjects = [
  {
    index: 0,
    name: "Kanban App",
    desc: `A simple laptop-only todo website that relies on local storage and a data file to persist tasks. Makes use of Local Storage, 
    JS/HTML/CSS and Modal windows to achieve a suitable UI design`,
    link: "https://dane-kanban.netlify.app",
    imgPath: "/assets/dane-kanban.png",
  },
  {
    index: 1,
    name: "Dashboard extention",
    desc: `A custom dashboard extention that uses API's and JavaScript to give live data on weather, Dogecoin and the current time. 
    The background changes everytime the page loads`,
    link: "https://dane-dashboard-extention.netlify.app/",
    imgPath: "/assets/dashboard-extention.png",
  },
  {
    index: 2,
    name: "Fictional bank Landing page",
    desc: `A bank Landing page for a fictional Bank catering for software developers specifically. It makes use of HTML/CSS 
    and JavaScript`,
    link: "https://dane-bank-landingpage.netlify.app/",
    imgPath: "/assets/dane-bank-landingpage.png",
  },
  {
    index: 3,
    name: "Podcast app",
    desc: `A website that functions the same as a generic podcast app using API's State Store and other higher level 
    programming concepts`,
    link: "https://dane-podcast-app.netlify.app/",
    imgPath: "/assets/dane-podcast-app.png",
  },
  {
    index: 4,
    name: "RE/MAX Tracking app",
    desc: `A mobile-based webpage that helps agents keep track of all their monthly activities, and provide stats on the data 
    collected in the current and previous month`,
    link: "https://remax-tracking-app.netlify.app/",
    imgPath: "/assets/REMAXTrackingApp.png",
  },
];

const backEndProjects = [
  {
    index: 0,
    name: "TicTacToe WPF",
    desc: `A Windows Presentation foundation that functions the same as a traditional TicTacToe game. It makes use of the 
    Grid elements and C# for it's logic and functionality`,
    link: "https://github.com/DaneVN/TicTacToe/tree/main",
    imgPath: "/assets/tictactoe-wpf.png",
  },
  {
    index: 1,
    name: "Fruit ninja Clone Game",
    desc: `A cloned version of the popular moblie game Fruit Ninja. It makes use of Unity engine to render and control the game environment,
    and the behaviour is dictated by the C# Scripts used. (For more information take a look at the Unity6 + C# Skill card for code snippets)`,
    link: "https://danevn.itch.io/fruitninjaclone",
    imgPath: "/assets/fruitNinjaClone.png",
  },
  {
    index: 2,
    name: "Ping Pong 2 Player Game",
    desc: `A cloned 2-player version of the popular arcade style ping pong game, made using Unity engine's 2D Universal project template for 
    environmental control and entity rendering. The behaviour of the game objects are dictated by the C# scripts individually applied to the objects.`,
    link: "https://danevn.itch.io/pingpong2d",
    imgPath: "/assets/pingPongClone.png",
  },
  {
    index: 3,
    name: "Zig Zag 3D Clone Game",
    desc: `A cloned 3D version of the (brain-rot) endless Zigzag mobile game. This Project makes use of the Unity engine for environment control and 
    game object rendering. Behaviour is dictated by a C# Script applied to the respective gameobjects themselves.`,
    link: "https://danevn.itch.io/zig-zag-3d",
    imgPath: "/assets/zigZagClone.png",
  },
];

const backEndSkill = [
  {
    title: "C#",
    desc: "Powering back-end logic like a pro.",
    link: "",
  },
  {
    title: "LINQ",
    desc: "Making data queries efficient and seamless.",
    link: "",
  },
  {
    title: "WPF",
    desc: "Crafting desktop applications with C#.",
    link: "",
  },
  {
    title: "Unity6  + C#",
    desc: "Bringing games to life.",
    link: "https://www.canva.com/design/DAGiQ21ISX8/ocJqGVBxs3TPVQpmmU8j-Q/edit?utm_content=DAGiQ21ISX8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
];
const frontEndSkill = [
  {
    title: "HTML5 & CSS3",
    desc: "Bringing structure and style to the web.",
    link: "",
  },
  {
    title: "TailwindCSS",
    desc: "Designing UIs faster than ever.",
    link: "",
  },
  {
    title: "JavaScript & TypeScript",
    desc: "Making web apps interactive & maintainable.",
    link: "",
  },
  {
    title: "React.js",
    desc: "Crafting dynamic and responsive user interfaces.",
    link: "",
  },
];

export { frontEndProjects, backEndProjects, backEndSkill, frontEndSkill };
