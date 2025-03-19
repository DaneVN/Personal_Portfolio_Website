import React from "react";
import SkillCard from "../elements/SkillCard";

export default function SkillsSection({ flag }) {
  const [isHidden, setIsHidden] = React.useState(false);

  function toggleHidden() {
    setIsHidden(!isHidden);
  }
  return (
    <>
      <section
        id="section2"
        className="p-1 bg-[var(--clb-accent)] flex flex-col items-center"
      >
        <h2 className="font-extrabold py-16" onClick={toggleHidden}>
          What I Bring to the Table (Tech Skills){" "}
          <span className="text-gray-500">V</span>
        </h2>
        {flag == "back" && !isHidden ? (
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
        ) : flag == "front" && !isHidden ? (
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
        ) : (
          <></>
        )}
      </section>
    </>
  );
}
