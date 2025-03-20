import React from "react";
import SkillCard from "../elements/SkillCard";
import { frontEndSkill, backEndSkill } from "../data";

export default function SkillsSection({ flag }) {
  const [isHidden, setIsHidden] = React.useState(false);
  const skillContainerStyle = "flex flex-wrap justify-center gap-10 mb-15";

  function toggleHidden() {
    setIsHidden(!isHidden);
  }

  return (
    <>
      <section
        id="section2"
        className="p-1 bg-[var(--clb-accent)] flex flex-col items-center"
      >
        <h2
          className="font-extrabold w-full py-16 hover:cursor-pointer"
          onClick={toggleHidden}
        >
          What I Bring to the Table (Tech Skills)
          <span className="text-gray-400">V</span>
        </h2>
        {flag == "back" && !isHidden ? (
          <div className={skillContainerStyle}>
            {backEndSkill.map((skill, index) => {
              return (
                <SkillCard
                  key={index}
                  className="bg-[var(--clb-lighter)] overflow-hidden hover:scale-110 transition-all"
                  skill={skill}
                ></SkillCard>
              );
            })}
          </div>
        ) : flag == "front" && !isHidden ? (
          <div className={skillContainerStyle}>
            {frontEndSkill.map((skill, index) => {
              return (
                <SkillCard
                  key={index}
                  className={
                    index % 2 == 0
                      ? "bg-[var(--clf-blue)]"
                      : "bg-[var(--clf-pink)]"
                  }
                  skill={skill}
                ></SkillCard>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </section>
    </>
  );
}
