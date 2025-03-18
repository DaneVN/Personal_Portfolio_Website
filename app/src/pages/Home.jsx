import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="my-4 flex flex-col items-center text-center">
      <h2 className="font-extrabold my-12 text-5xl sm:text-6xl">
        What are you looking for?
      </h2>
      <section className="flex flex-col items-stretch gap-[10vh]">
        <NavLink
          className="bg-[var(--clb-darker)] hover:bg-[var(--clf-yellow)] active:bg-[var(--clf-blue)] active:text-[var(--clf-offWhite)] py-[5vh] px-[10vw] flex justify-between rounded-2xl text-2xl sm:text-3xl font-serif"
          to="/frontend"
        >
          Website Design
          {/* add an image of a right facing arrow */}
        </NavLink>
        <NavLink
          className="bg-[var(--clb-darker)] hover:bg-[var(--clb-purple)] active:bg-[var(--clb-darkest)]  py-[5vh] px-[10vw] flex justify-between rounded-2xl text-2xl sm:text-3xl font-serif"
          to="/frontend"
        >
          Game Design
          {/* add an image of a right facing arrow */}
        </NavLink>
      </section>
    </main>
  );
};

export default HomePage;
