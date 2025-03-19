import React from "react";

export default function AboutMe({ className }) {
  return (
    <>
      {/* section 3: About Me */}
      <section id="section3" className={`py-4 p-1 ${className}`}>
        <h2 className="font-extrabold py-3 ">
          Who Am I? (Spoiler: A Code Enthusiast!)
        </h2>
        <p>
          Hey there! I’m a passionate software developer who loves turning ideas
          into sleek, functional, and user-friendly applications. Whether it’s
          crafting beautiful UIs with React.js or building powerful back-end
          systems with C#, I thrive on problem-solving and creating awesome
          digital experiences. <br /> <br /> By day, I work as a Marketing and
          IT Assistant at RE/MAX Unity, blending my technical skills with
          business strategy. By night, I’m constantly leveling up—learning new
          technologies, exploring APIs, and optimizing performance. My journey
          started at CodeSpace Academy, where I gained a solid foundation in web
          development, and I’ve continued expanding my expertise ever since.
          <br /> <br />
          I’m all about efficiency, creativity, and making an impact. Let’s
          build something cool together!
        </p>
      </section>
    </>
  );
}
