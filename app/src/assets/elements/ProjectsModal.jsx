import React from "react";

/* Props:
  onClose: function to close the modal
  isModalOpen: boolean to check if the modal is open
  project: object containing project details (name, desc, imgPath, link)
  onBackgroundClick : function to handle click events on the background
*/

export default function ProjectModal({
  onClose,
  isModalOpen,
  project,
  onBackgroundClick,
}) {
  React.useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") onClose();
    }
    if (isModalOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

  React.useEffect(() => {
    if (isModalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  if (isModalOpen)
    if (!project) return <></>;
    else
      return (
        <>
          {/* bg */}
          <div
            className="z-20 fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur 
            text-[var(--clf-dark)] text-center text-lg"
            onClick={onBackgroundClick}
          >
            {/* container */}
            <div
              className="bg-[var(--clf-offWhite)] p-4 rounded-2xl max-w-8/12 max-h-4/6 mx-auto overflow-scroll 
              flex flex-col justify-between items-center mb-4 border-4 border-dotted border-[var(--clb-lightest)]"
              onClick={(e) => e.stopPropagation()}
              aria-modal="true"
            >
              {/* content */}
              <button
                onClick={onClose}
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
                  <p role="dialog">{project.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
  else return <></>;
}
