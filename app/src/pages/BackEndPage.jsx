import React from "react";
import IntroSection from "../assets/components/IntroSection";
import AboutMe from "../assets/components/AboutMe";
import ContactMe from "../assets/components/ContactMeSection";
import SkillCard from "../assets/elements/SkillCard";

const FrontEndPage = () => {
  return (
    <div className="bg-[var(--clf-offWhite)] text-[var(--clb-darkest)]  lg:text-2xl">
      <IntroSection
        className="text-[var(--clb-lighter)] bg-[var(--clb-darker)]"
        bg="bg-[var(--clb-purple)]"
      />

      {/* section 2: Skills */}
      <section
        id="section2"
        className="p-1 pb-4 pt-0 bg-[var(--clb-accent)] flex flex-col items-center"
      >
        <h2 className="font-bold py-3">
          What I Bring to the Table (Tech Skills)"
        </h2>
        <div className="flex flex-wrap gap-3">
          <SkillCard className="bg-[var(--clb-lighter)]">
            Text text text
          </SkillCard>
          <SkillCard className="bg-[var(--clb-lighter)]">
            Text text text
          </SkillCard>
          <SkillCard className="bg-[var(--clb-lighter)]">
            Text text text
          </SkillCard>
        </div>
      </section>

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
