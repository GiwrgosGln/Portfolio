import projectsData from "../data/projects.json";
import { GoArrowUpRight } from "react-icons/go";
import { FiGithub } from "react-icons/fi";

export default function Projects() {
  return (
    <div className="mt-20 flex flex-col w-1/2 gap-5">
      {projectsData.projects.map((project, index) => (
        <div
          key={index}
          className="w-full bg-projectsBackground p-4 rounded-xl border border-gray-700"
        >
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-secondaryText text-xl">{project.title}</h2>
            <div className="flex flex-row gap-1 justify-center items-center">
              <a href={project.liveUrl}>
                <GoArrowUpRight color="#4461AF" size={30} />
              </a>
            </div>
          </div>
          <p className="text-primaryText mt-5">{project.description}</p>
          <div className="flex flex-row justify-between items-center gap-2 mt-5">
            <div className="gap-3 flex flex-row">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-textBackground p-1 px-2 text-secondary rounded-md mt-4"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.githubUrl}>
              <FiGithub color="white" size={25} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
