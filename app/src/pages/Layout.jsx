import { Outlet, NavLink, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation(); // Get the current location
  const isHome = location.pathname === "/"; // Check if the current path is "/"

  return (
    <>
      <header className="bg-[#242424] sticky top-0 z-90">
        <nav className="grid grid-cols-4 p-5 gap-2 text-2xl sm:text-4xl md:text-6xl">
          <NavLink
            to="/"
            className="col-span-1 self-center"
            style={({ isActive }) =>
              isActive
                ? {
                    fontWeight: "bold",
                    color: "var(--clb-purple)",
                  }
                : null
            }
          >
            Home
          </NavLink>
          <span className="col-span-3 flex justify-evenly items-center text-xs sm:text-xl md:text-3xl">
            {/* Conditionally render frontend and backend links only if NOT on the home page */}
            {!isHome && (
              <>
                <a
                  href="#section2"
                  className="active:text-[var(--clb-purple)] active:bold"
                >
                  Skills
                </a>
                <a
                  href="#section3"
                  className="active:text-[var(--clb-purple)] active:bold"
                >
                  About Me
                </a>
                <a
                  href="#section4"
                  className="active:text-[var(--clb-purple)] active:bold"
                >
                  Projects
                </a>
                <a
                  href="#section5"
                  className="bg-[var(--clf-blue)] text-[var(--clf-dark)] rounded-2xl py-2 px-5 active:bg-[var(--clb-purple)] active:bold"
                >
                  Contact
                </a>
              </>
            )}
          </span>
        </nav>
      </header>
      <main className="text-center lg:text-2xl ">
        <Outlet />
      </main>
      <footer className="flex flex-col items-center p-10 w-full">
        <div className="flex gap-10">
          <a
            href="https://github.com/DaneVN"
            className="bg-[var(--clb-accent)] active:bg-[var(--clb-lighter)] rounded-full"
            target="_blank"
          >
            <img src="/assets/GitHub.svg" alt="GitHub Account" width={40} />
          </a>
          <a
            href="www.linkedin.com/in/dane-van-niekerk-8a1982317"
            className="bg-[var(--clb-accent)] active:bg-[var(--clb-lighter)] rounded-2xl"
            target="_blank"
          >
            <img src="/assets/LinkedIn.png" alt="LinkedIn Account" width={40} />
          </a>
          <a
            href="tel:0810314325"
            className="bg-[var(--clb-accent)] active:bg-[var(--clb-lighter)] rounded-full"
            target="_blank"
          >
            <img src="/assets/Phone.svg" alt="Phone" width={40} />
          </a>
          <a
            href="mailto:Dane.vN23@gmail.com"
            className="bg-[var(--clb-accent)] active:bg-[var(--clb-lighter)] rounded-full"
            target="_blank"
          >
            <img src="/assets/Email.svg" alt="Email" width={40} />
          </a>
        </div>

        <div className="text-xs md:text-lg flex gap-10 mt-2">
          <p>
            created by <span className="font-bold"> Dané van Niekerk </span>
          </p>
          <p>
            Last Update: <span>24 March 2025</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
