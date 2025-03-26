import React from "react";

export default function SkillCard({ className, skill, handleClick }) {
  return (
    <>
      <button
        className={`w-[150px] h-[175px] sm:w-[225px] sm:h-[250px] rounded-4xl flex flex-col text-center justify-evenly gap-2
           py-5 px-2 outline-[var(--clb-lightest)] outline-dotted outline-8 ${className}`}
        onClick={handleClick}
      >
        <span className="font-bold">{skill.title}</span>
        {skill.desc}
        {skill.link != "" && (
          <a
            href={skill.link}
            className="bg-[var(--clb-lightest)] text-[var(--clb-purple)] overflow-hidden hover:scale-105 transition-all 
            rounded-4xl p-4"
            target="_blank"
          >
            Code Snippets
          </a>
        )}
      </button>
    </>
  );
}
