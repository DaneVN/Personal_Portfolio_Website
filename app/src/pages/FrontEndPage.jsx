import React from "react";
import IntroSection from "../assets/components/IntroSection";
import AboutMe from "../assets/components/AboutMe";
import ContactMe from "../assets/components/ContactMeSection";
import SkillCard from "../assets/elements/SkillCard.jsx";

const FrontEndPage = () => {
  return (
    <main className="bg-[var(--clf-offWhite)] scroll-smooth transition-all lg:text-2xl">
      <IntroSection
        className="text-[var(--clf-dark)]"
        bg="bg-[var(--clf-pink)]"
      />

      {/* section 2: Skills */}
      <section
        id="section2"
        className="py-4 p-1 bg-[var(--clf-yellow)] text-[var(--clf-dark)]"
      >
        <div>
          This will contain a list of all the tech/programming languages i know
          how to usee.g. CSS/HTML, JavaScript, React.js, TailwindCSS, router
        </div>
        <div className="flex flex-wrap gap-3">
          <SkillCard className="bg-[var(--clf-blue)]">Text text text</SkillCard>
          <SkillCard className="bg-[var(--clf-pink)]">Text text text</SkillCard>
          <SkillCard className="bg-[var(--clf-offWhite)]">
            Text text text
          </SkillCard>
        </div>
      </section>

      <AboutMe className="text-[var(--clf-dark)]" />

      {/* section 4: Portfolio/Projects */}
      <section
        id="section4"
        className="py-4 p-1 bg-[var(--clf-blue)] text-[var(--clf-dark)]"
      >
        <div>
          This will contain a list of items that, when clicked, opens a modal
          window that displays a preview image of the project, it's name and a
          description of how the logic flows + screenshots of coding snippets as
          well as the README.md Link on the GitHub Repo
        </div>
      </section>

      <ContactMe className="bg-[var(--clf-pink)] text-[var(--clf-dark)]" />
    </main>
  );
};

export default FrontEndPage;
