import React from "react";
import IntroSection from "../assets/sections/IntroSection";
import AboutMe from "../assets/sections/AboutMe";
import ContactMe from "../assets/sections/ContactMeSection";
import SkillsSection from "../assets/sections/SkillsSection";

const FrontEndPage = () => {
  // const projects = [{}];
  return (
    <main className="bg-[var(--clf-offWhite)] scroll-smooth transition-all lg:text-2xl text-[var(--clf-dark)]">
      <IntroSection className="" bg="bg-[var(--clf-pink)]" />

      <SkillsSection flag="front" />

      <AboutMe />

      {/* section 4: Portfolio/Projects */}
      <section id="section4" className="py-4 p-1 bg-[var(--clf-blue)]">
        <div>
          This will contain a list of items that, when clicked, opens a modal
          window that displays a preview image of the project, it's name and a
          description of how the logic flows + screenshots of coding snippets as
          well as the README.md Link on the GitHub Repo
        </div>
      </section>

      <ContactMe className="bg-[var(--clf-pink)]" />
    </main>
  );
};

export default FrontEndPage;
