import React from "react";
import SkillCard from "../elements/SkillCard";

export default function SkillsSection({ flag }) {
  if (flag == "back") {
    return (
      <>
        {/* section 2: Skills */}
        <section
          id="section2"
          className="p-1 pb-4 pt-0 bg-[var(--clb-accent)] flex flex-col items-center"
        >
          <h2 className="font-extrabold py-3">
            What I Bring to the Table (Tech Skills)
          </h2>
          <div className="flex flex-wrap gap-3">
            <SkillCard className="bg-[var(--clb-lighter)]" title="C#">
              Powering back-end logic like a pro.
            </SkillCard>
            <SkillCard className="bg-[var(--clb-lighter)]" title="LINQ ">
              Making data queries efficient and seamless.
            </SkillCard>
            <SkillCard className="bg-[var(--clb-lighter)]" title="WPF ">
              Crafting desktop applications with C#.
            </SkillCard>
            <SkillCard className="bg-[var(--clb-lighter)]" title="Unity6  + C#">
              Bringing games to life.
            </SkillCard>
          </div>
        </section>
      </>
    );
  } else if (flag == "front") {
    return (
      <>
        {/* section 2: Skills */}
        <section
          id="section2"
          className="p-1 pb-4 pt-0 bg-[var(--clb-accent)] flex flex-col items-center"
        >
          <h2 className="font-bold py-3">
            What I Bring to the Table (Tech Skills)"
          </h2>
          <div className="flex flex-wrap gap-3">
            <SkillCard className="bg-[var(--clf-blue)]" title="HTML5 & CSS3">
              Bringing structure and style to the web.
            </SkillCard>
            <SkillCard className="bg-[var(--clf-pink)]" title="TailwindCSS">
              Designing UIs faster than ever.
            </SkillCard>
            <SkillCard
              className="bg-[var(--clf-blue)]"
              title="JavaScript & TypeScript"
            >
              Making web apps interactive & maintainable.
            </SkillCard>
            <SkillCard className="bg-[var(--clf-pink)]" title="React.js">
              Crafting dynamic and responsive user interfaces.
            </SkillCard>
          </div>
        </section>
      </>
    );
  }
}
