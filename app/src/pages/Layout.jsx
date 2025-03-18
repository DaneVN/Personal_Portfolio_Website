import { Outlet, NavLink, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation(); // Get the current location
  const isHome = location.pathname === "/"; // Check if the current path is "/"

  const activeStyles = {
    fontWeight: "bold",
    color: "var(--clb-purple)",
  };
  return (
    <>
      <header
        className="bg-[#242424] sticky top-0 z-20 transition-top duration-300 
    ease-in-out"
      >
        <nav className="grid grid-cols-4 p-5 gap-2 text-2xl sm:text-4xl md:text-6xl">
          <NavLink
            to="/"
            className="col-span-1 self-center"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            home
          </NavLink>
          <span className="col-span-3 flex justify-evenly items-center text-xs sm:text-xl md:text-3xl">
            {/* Conditionally render frontend and backend links only if NOT on the home page */}
            {!isHome && (
              <>
                <a
                  href="#section2"
                  className="active:var(--clb-purple) active:bold"
                >
                  Skills
                </a>
                <a
                  href="#section3"
                  className="active:var(--clb-purple) active:bold"
                >
                  About Me
                </a>
                <a
                  href="#section4"
                  className="active:var(--clb-purple) active:bold"
                >
                  Projects
                </a>
                <a
                  href="#section5"
                  className="active:var(--clb-purple) active:bold"
                >
                  Contact
                </a>
              </>
            )}
          </span>
        </nav>
      </header>
      <Outlet />
      <footer className="text-xs md:text-lg flex justify-evenly mt-2">
        <p>
          created by <span className="font-bold"> Dané van Niekerk </span>
        </p>
        <p>
          Last Update: <span>18 March 2025</span>
        </p>
      </footer>
    </>
  );
};

export default Layout;
