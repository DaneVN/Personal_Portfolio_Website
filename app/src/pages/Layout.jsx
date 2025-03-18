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
      <header>
        <nav className="grid grid-cols-4 p-5 gap-2 text-2xl sm:text-4xl">
          <NavLink
            to="/"
            className="col-span-1 self-center"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            home
          </NavLink>
          <span className="col-span-3 flex justify-evenly">
            {/* Conditionally render frontend and backend links only if NOT on the home page */}
            {!isHome && (
              <>
                <NavLink
                  to="/frontend"
                  style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                  frontend
                </NavLink>
                <NavLink
                  to="/backend"
                  style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                  backend
                </NavLink>
              </>
            )}
          </span>
        </nav>
      </header>
      <Outlet />
      <footer className="text-xs">
        <p>
          created by <span className="font-bold"> Dané van Niekerk </span>
        </p>
      </footer>
    </>
  );
};

export default Layout;
