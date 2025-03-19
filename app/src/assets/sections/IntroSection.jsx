import React from "react";

export default function IntroSection({ className, bg }) {
  return (
    <>
      <section
        id="section1"
        className={`flex justify-between items-center pl-5 pt-2 font-bold ${className}`}
      >
        <h1 className="text-lg ">
          I'm <span className="text-">Dané van Niekerk</span>
          <br />
          <span className="text-xl">Full Stack Developer</span>
        </h1>
        <img
          src="/assets/danePortrait.png"
          alt="Developer's lovely face"
          className={`w-1/2 rounded-l-[100px] outline-[var(--clb-lightest)] outline-dotted outline-8 ${bg}`}
        />
      </section>
    </>
  );
}
