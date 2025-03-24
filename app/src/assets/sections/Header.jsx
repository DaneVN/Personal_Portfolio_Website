import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation(); // Get the current location
  const isHome = location.pathname === "/"; // Check if the current path is "/"
  return (
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
  );
}
