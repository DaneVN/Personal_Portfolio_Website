import React from "react";
import IntroSection from "../assets/sections/IntroSection";
import AboutMe from "../assets/sections/AboutMe";
import ContactMe from "../assets/sections/ContactMeSection";
import SkillsSection from "../assets/sections/SkillsSection";
import { frontEndProjects } from "../assets/data.js";
import ProjectModal from "../assets/elements/ProjectsModal";

const FrontEndPage = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);

  function CloseModal() {
    setIsOpen(false);
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
    setIsOpen(true);
  }

  return (
    <div className="bg-[var(--clf-offWhite)] text-[var(--clf-dark)]">
      <IntroSection className="" bg="bg-[var(--clf-pink)]" />

      <SkillsSection flag="front" />

      <AboutMe />

      {/* section 4: Portfolio/Projects */}
      <section id="section4" className="py-4 p-1 bg-[var(--clf-blue)]">
        <h2 className="font-extrabold py-3 ">Cool Stuff I’ve Built</h2>
        <div className="flex flex-wrap justify-center gap-5">
          {frontEndProjects.map((project) => {
            return (
              <button
                key={project.index}
                className=" overflow-hidden hover:scale-110 transition-all rounded-md"
                onClick={() => OpenModal({ ...project })}
              >
                <img
                  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]"
                  src={project.imgPath}
                  alt={project.name}
                />
              </button>
            );
          })}
        </div>
      </section>
      {isOpen && (
        <ProjectModal
          closeModalFn={CloseModal}
          isOpen={isOpen}
          project={selectedProject}
        />
      )}
      <ContactMe className="bg-[var(--clf-pink)]" />
    </div>
  );
};

export default FrontEndPage;
