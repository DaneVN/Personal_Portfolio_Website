import React from "react";

export default function SkillCard({ className, title, children }) {
  return (
    <>
      <div
        className={`w-[150px] h-[175px] sm:w-[225px] sm:h-[250px] rounded-4xl text-center flex flex-col gap-2
           py-5 px-2 outline-[var(--clb-lightest)] outline-dotted outline-8 overflow-hidden hover:scale-110 
           transition-all ${className}`}
      >
        <span className="font-bold">{title}</span>
        {children}
      </div>
    </>
  );
}
