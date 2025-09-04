import React from "react";

export default function ProjectModal({
  closeModalFn,
  isModalOpen,
  project,
  onClickFn,
}) {
  if (isModalOpen)
    if (!project) return <></>;
    else
      return (
        <>
          {/* bg */}
          <div
            className="z-20 fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur 
        text-[var(--clf-dark)] text-[1.5rem]"
            onClick={onClickFn}
          >
            {/* container */}
            <div
              className="bg-[var(--clf-offWhite)] p-4 rounded-2xl max-w-8/12 max-h-4/6 mx-auto overflow-scroll 
          flex flex-col justify-between items-center mb-4 border-4 border-dotted border-[var(--clb-lightest)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* content */}
              <button
                onClick={closeModalFn}
                className="self-end rounded-full px-3 pb-2 hover:bg-[var(--clf-dark)] hover:text-[var(--clf-offWhite)]"
              >
                x
              </button>
              <h2>
                {" "}
                <strong>{project.name}</strong>
              </h2>
              <br />
              <div className="">
                {/* have the text of the description wrap around the image */}
                <a
                  className="hover:scale-105 transition-all lg:my-10 float-left mr-4 w-[50%] flex justify-center items-center"
                  href={project.link}
                  target="_blank"
                >
                  <img src={project.imgPath} alt="Netlify Deploy Link" />
                </a>
                <div>
                  <br />
                  <p>{project.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
  else return <></>;
}
