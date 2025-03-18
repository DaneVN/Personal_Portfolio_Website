import React from "react";

const FrontEndPage = () => {
  return (
    <div className="bg-[var(--clf-offWhite)] text-[var(--clb-darkest)]">
      {/* section 1: Intro and NavBar */}
      <section
        id="section1"
        className="py-4 p-1 bg-[var(--clb-darker)] text-[var(--clb-lighter)]"
      >
        <div>
          This is a section that will contain my name a picture of me and the
          navigation to the rest of this page's sections
        </div>
      </section>
      {/* section 2: Skills */}
      <section id="section2" className="py-4 p-1 bg-[var(--clb-accent)]">
        <div>
          This will contain a list of all the tech/programming languages i know
          how to use
        </div>
        <div>e.g. CSS/HTML, JavaScript, React.js, TailwindCSS, router </div>
      </section>
      {/* section 3: About Me */}
      <section id="section3" className="py-4 p-1 bg-[var(--clb-accent)]">
        <div>
          This will contain A collapsable paragraph that details things about me
          relevant to programming
        </div>
      </section>
      {/* section 4: portfolio/Projects */}
      <section id="section4" className="py-4 p-1 bg-[var(--clb-accent)]">
        <div>
          This will contain a list of items that, when clicked, opens a modal
          window that displays a preview image of the project, it's name and a
          description of how the logic flows + screenshots of coding snippets as
          well as the README.md Link on the GitHub Repo
        </div>
      </section>
      {/* section 5: Contact Me */}
      <section id="section5" className="py-4 p-1 bg-[var(--clb-lightest)]">
        <div>
          This will contain a form that allows the user of the website to send
          an email to my (fixed) professional email and hold svg icons as links
          to different accounts of mine
        </div>
        <div>e.g. GitHub, LinkedIn</div>
      </section>
    </div>
  );
};

export default FrontEndPage;
