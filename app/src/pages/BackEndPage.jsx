import React from "react";
import IntroSection from "../assets/components/IntroSection";
import AboutMe from "../assets/components/AboutMe";
import ContactMe from "../assets/components/ContactMeSection";

const FrontEndPage = () => {
  return (
    <div className="bg-[var(--clf-offWhite)] text-[var(--clb-darkest)]  lg:text-2xl">
      <IntroSection className="bg-[var(--clb-darker)] text-[var(--clb-lighter)]" />

      {/* section 2: Skills */}
      <section id="section2" className="py-4 p-1 bg-[var(--clb-accent)]">
        <div>
          This will contain a list of all the tech/programming languages i know
          how to use
        </div>
        <div>e.g. CSS/HTML, JavaScript, React.js, TailwindCSS, router </div>
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
