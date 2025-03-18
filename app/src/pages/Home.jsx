import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="my-4 flex flex-col items-center text-center">
      <h2 className="font-extrabold my-12 text-5xl sm:text-6xl">
        What are you looking for?
      </h2>
      <section className="flex flex-col gap-[10vh]">
        <NavLink
          className="bg-[var(--clb-darker)] hover:bg-[var(--clf-yellow)] hover:text-[var(--clf-dark)] 
          origin-center transition-all hover:scale-110 active:bg-[var(--clf-blue)] active:text-[var(--clf-offWhite)] 
          h-[15vh] w-[70vw] rounded-2xl text-2xl sm:text-3xl font-serif flex gap-3 justify-center items-center"
          to="/frontend"
        >
          Website Design
          <img src="/assets/RightArrow1.svg" className="w-16" />
        </NavLink>
        <NavLink
          className="bg-[var(--clb-darker)] hover:bg-[var(--clb-purple)] origin-center transition-all 
          hover:scale-110 active:bg-[var(--clb-darkest)] h-[15vh] w-[70vw] rounded-2xl text-2xl 
          sm:text-3xl font-serif flex gap-3 justify-center items-center"
          to="/backend"
        >
          Game Design
          <img src="/assets/RightArrow1.svg" className="w-16" />
        </NavLink>
      </section>
    </main>
  );
};

export default HomePage;
