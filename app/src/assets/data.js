const frontEndProjects = [
  {
    index: 0,
    name: "Homeloan Junction Landing page",
    desc: `This React app serves as an interactive guide for commercial property finance, helping users assess loan eligibility through questionnaires and access educational 
    content on topics like LTV ratios, repayment structures, and investor perspectives. It's structured as a single-page application (SPA) using React Router for client-side 
    routing, with dynamic paths like /:path for question flows and /critical-information/:tabId for tabbed info pages, plus fallback to a custom ErrorPage for invalid routes.
    The root Layout.jsx composes a consistent shell with Header, NavBar (likely pulling tabs from NavData.jsx), Outlet for nested route content, and Footer.
    Home.jsx delivers static informational sections on commercial vs. residential properties, incorporating external links (e.g., to Investopedia) and a custom useIsVisible 
    hook—probably wrapping IntersectionObserver—to trigger smooth fade-in animations on scroll via refs and transition classes.
    CriticalInfoPage.jsx (aliased as UsefulInfoPage in code) uses useParams to extract :tabId, then lookups matching content from the infoTabs array in NavData.jsx, rendering 
    it dynamically or showing a not-found message if absent.
    The core interactivity revolves around a branching questionnaire system defined in questionData.js as a decision tree object, with entry points (e.g., "commercial" or 
    "buying"), questions (bool/number/select types with options), and conditional next functions that evaluate answers to advance to subsequent question IDs or endpoints 
    (which provide tailored email addresses and instructions).
    Question.jsx handles individual questions as form components, using useState for answer tracking and useSearchParams to persist responses in the URL query string (e.g.,
     ?q1=Retail) for bookmarkable/shareable state without localStorage. On submit, it calls a parent onSubmit prop to progress the flow, disabling the button until an answer
      is provided.
    ContactPage.jsx facilitates outreach with a custom ButtonMailto component for mailto: links, conditional image templates (desktop/mobile variants), and useNavigate for 
    programmatic routing back home.
    Styling leans on CSS variables (e.g., --cl-darkDusty, --cl-red) and utility classes for responsive flex/grids, shadows, and hovers—suggesting Tailwind integration. Fully 
    client-side with no API calls or external state; relies on static data structures for content and logic, making it lightweight and fast-loading.`,
    link: "https://homeloan-junction-commercial.netlify.app/",
    imgPath: "/assets/HLJ-Landingpage.png",
  },
  {
    index: 1,
    name: "RE/MAX Tracking app",
    desc: `This React-based web app serves as a mobile-friendly tool for RE/MAX real estate agents to track monthly activities, monitor progress toward goals, and calculate 
    commissions. Built with React hooks for state management (useState for reactive data, useEffect for lifecycle handling like initial data loading and month-based resets, 
    and useRef for tracking one-time checks), it leverages localStorage to persist user data across sessions—initializing state from stored JSON or defaulting to an empty 
    structure with arrays for current activities, previous months' progress, and ongoing trackers.
    The main component orchestrates the UI as a responsive grid (using CSS flex/grid for mobile/desktop layouts), rendering specialized cards: DueCard lists pending tasks, 
    ProgressCard displays completion metrics, SheetCard handles editable tracking sheets with update callbacks to sync state, GraphCard visualizes historical data (likely via 
    a charting lib like Chart.js, inferred from the data structure), and CalculatorCard provides a form-driven commission calculator. The calculator uses controlled inputs and 
    refs to toggle modes (e.g., fixed gross vs. percentage-based), submitting data to a pure JS utility function (CommissionCalculator.js) that computes breakdowns—including VAT 
    (at 15%), royalties, splits, and PAYE—returning formatted results as a locale-aware currency object for display in a results component.
    Styling relies on CSS variables and classes, with no external state libs needed due to the app's focused scope. Overall, it's a lightweight SPA emphasizing data persistence, 
    conditional rendering for loading/month resets, and modular components for maintainability, making it easy to extend with more analytics or API integrations.`,
    link: "https://remax-tracking-app.netlify.app/",
    imgPath: "/assets/REMAXTrackingApp.png",
  },
  {
    index: 2,
    name: "Podcast app",
    desc: ` A website that functions the same as a generic podcast app using API's State Store and other higher level 
    programming concepts to achieve a suitable UI/UX design. It makes use of React.js, TailwindCSS and the Context API`,
    link: "https://dane-podcast-app.netlify.app/",
    imgPath: "/assets/dane-podcast-app.png",
  },
  {
    index: 3,
    name: "Kanban App",
    desc: `A simple laptop-only todo website that relies on local storage and a data file to persist tasks. Makes use of Local Storage, 
    JS/HTML/CSS and Modal windows to achieve a suitable UI design`,
    link: "https://dane-kanban.netlify.app",
    imgPath: "/assets/dane-kanban.png",
  },
  {
    index: 4,
    name: "Fictional bank Landing page",
    desc: `A bank Landing page for a fictional Bank catering for software developers specifically. It makes use of HTML/CSS 
    and JavaScript`,
    link: "https://dane-bank-landingpage.netlify.app/",
    imgPath: "/assets/dane-bank-landingpage.png",
  },
  {
    index: 5,
    name: "Dashboard extention",
    desc: `A custom dashboard extention that uses API's and JavaScript to give live data on weather, Dogecoin and the current time. 
    The background changes everytime the page loads`,
    link: "https://dane-dashboard-extention.netlify.app/",
    imgPath: "/assets/dashboard-extention.png",
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
