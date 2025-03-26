import React from "react";
import IntroSection from "../assets/sections/IntroSection";
import AboutMe from "../assets/sections/AboutMe";
import ContactMe from "../assets/sections/ContactMeSection";
import SkillsSection from "../assets/sections/SkillsSection";
import { frontEndProjects } from "../assets/data.js";
import ProjectModal from "../assets/elements/ProjectsModal";

const FrontEndPage = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [isHidden, setIsHidden] = React.useState(false);

  function CloseModal() {
    setIsModalOpen(false);
  }
  function OpenModal(project) {
    if (project) {
      setSelectedProject(project);
    } else {
      setSelectedProject({
        name: "",
        goalArray: Array(31).fill(0),
        dailyCompleted: 0,
      });
    }
    setIsModalOpen(true);
  }

  function toggleHidden() {
    setIsHidden(!isHidden);
  }

  return (
    <div className="bg-[var(--clf-offWhite)] text-[var(--clf-dark)]">
      <IntroSection bg="bg-[var(--clf-pink)]" />

      <SkillsSection flag="front" />

      <AboutMe />

      <section id="section4" className="p-2 bg-[var(--clf-blue)]">
        <h2
          className="font-extrabold py-16 hover:cursor-pointer"
          onClick={toggleHidden}
        >
          Cool Stuff I’ve Built (Click on them for more information){" "}
          <span className="text-gray-400">V</span>
        </h2>
        {!isHidden && (
          <div
            className="flex overflow-x-scroll snap-x snap-mandatory 
          justify-start gap-5 px-10 mb-15 scrollbar-thin scrollbar-thumb-gray-400"
          >
            {frontEndProjects.map((project) => {
              return (
                <button
                  key={project.index}
                  className="hover:scale-100 transition-all rounded-md 
                  outline-[var(--clb-lightest)] outline-dotted outline-8 
                  flex-shrink-0 snap-center scale-90"
                  onClick={() => OpenModal({ ...project })}
                >
                  <div className="w-fit h-[200px] sm:h-[300px] overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={project.imgPath}
                      alt={project.name}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </section>
      {isModalOpen && (
        <ProjectModal
          closeModalFn={CloseModal}
          isModalOpen={isModalOpen}
          project={selectedProject}
        />
      )}
      <ContactMe className="bg-[var(--clf-pink)]" />
    </div>
  );
};

export default FrontEndPage;
