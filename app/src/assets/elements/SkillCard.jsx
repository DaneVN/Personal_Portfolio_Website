import React from "react";

export default function SkillCard({ className, title, children }) {
  return (
    <>
      <div
        className={`w-[150px] h-[200px] rounded-4xl text-center flex flex-col gap-2 py-5 px-2 ${className}`}
      >
        <span className="font-bold">{title}</span>
        {children}
      </div>
    </>
  );
}
