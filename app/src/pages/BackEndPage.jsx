import React from "react";
import IntroSection from "../assets/sections/IntroSection";
import AboutMe from "../assets/sections/AboutMe";
import ContactMe from "../assets/sections/ContactMeSection";
import SkillsSection from "../assets/sections/SkillsSection";

const FrontEndPage = () => {
  return (
    <div className="text-[var(--clb-darkest)]">
      <IntroSection
        className="text-[var(--clb-lighter)] bg-[var(--clb-darker)]"
        bg="bg-[var(--clb-purple)]"
      />

      <SkillsSection flag="back" />

      <AboutMe className="bg-[var(--clb-accent)]" />

      {/* section 4: portfolio/Projects */}
      <section id="section4" className="py-4 p-1 bg-[var(--clb-accent)]">
        <div>
          This will contain a list of items that, when clicked, opens a modal
          window that displays a preview image of the project, it's name and a
          description of how the logic flows + screenshots of coding snippets as
          well as the README.md Link on the GitHub Repo
        </div>
      </section>

      <ContactMe className="bg-[var(--clb-lightest)]" />
    </div>
  );
};

export default FrontEndPage;
