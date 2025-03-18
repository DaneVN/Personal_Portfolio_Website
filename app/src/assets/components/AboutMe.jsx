import React from "react";

export default function AboutMe({ className }) {
  return (
    <>
      {/* section 3: About Me */}
      <section id="section3" className={`py-4 p-1 ${className}`}>
        <div>
          This will contain A collapsable paragraph that details things about me
          relevant to programming
        </div>
      </section>
    </>
  );
}
