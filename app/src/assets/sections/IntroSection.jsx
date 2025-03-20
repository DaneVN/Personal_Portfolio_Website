import React from "react";

export default function IntroSection({ className, bg }) {
  return (
    <>
      <section
        id="section1"
        className={`flex justify-between items-center pl-5 pt-2 font-bold ${className}`}
      >
        <h1 className="text-lg sm:text-4xl md:ml-26 lg:ml-45">
          I'm <span className="font-extrabold">Dané van Niekerk</span>
          <br />
          <span className="sm:text-4xl">Full stack Developer</span>
        </h1>
        <img
          src="/assets/danePortrait.png"
          alt="Developer's lovely face"
          className={`w-1/2 sm:w-1/3 rounded-l-[100px] outline-[var(--clb-lightest)] outline-dotted outline-8 ${bg}`}
        />
      </section>
    </>
  );
}
