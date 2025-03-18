import React from "react";

export default function IntroSection({ className }) {
  return (
    <>
      {/* section 1: Intro and NavBar */}
      <section id="section1" className={`py-4 p-1 ${className}`}>
        <div>
          This is a section that will contain my name a picture of me and the
          navigation to the rest of this page's sections
        </div>
      </section>
    </>
  );
}
