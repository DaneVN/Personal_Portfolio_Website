import React from "react";

export default function ProjectModal({ closeModalFn, isModalOpen, project }) {
  if (isModalOpen)
    return (
      <>
        {/* bg */}
        <div
          className="z-20 fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur 
        text-[var(--clf-dark)] text-[1.5rem] lg:text-[2rem]"
        >
          {/* container */}
          <div
            className="bg-[var(--clf-offWhite)] p-4 rounded-2xl max-w-8/12 max-h-4/6 mx-auto overflow-scroll 
          flex flex-col justify-between items-center mb-4 border-4 border-dotted border-[var(--clb-lightest)]"
          >
            {/* content */}
            <button
              onClick={closeModalFn}
              className="self-end rounded-full px-3 pb-2 hover:bg-[var(--clf-dark)] hover:text-[var(--clf-offWhite)]"
            >
              x
            </button>
            <a
              className="hover:scale-110 transition-all lg:my-10"
              href={project.link}
              target="_blank"
            >
              <img src={project.imgPath} alt="Netlify Deploy Link" />
            </a>
            <br />
            <h2>{project.name}</h2>
            <br />
            <p>{project.desc}</p>
          </div>
        </div>
      </>
    );
  else return <></>;
}
