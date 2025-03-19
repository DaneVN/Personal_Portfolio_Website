import React from "react";

export default function SkillCard({ className, children }) {
  return (
    <>
      <div
        className={`w-[150px] h-[200px] rounded-4xl text-center ${className}`}
      >
        {children}
      </div>
    </>
  );
}
