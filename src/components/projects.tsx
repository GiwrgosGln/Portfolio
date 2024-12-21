import projectsData from "../data/projects.json";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import Separator from "./separator";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="mt-20 flex flex-col px-5 md:px-0 w-screen md:w-2/3 2xl:w-1/2 gap-5">
      {projectsData.projects.map((project, index) => (
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: index * 0.5 }}
          key={index}
          className="w-full bg-projectsBackground p-4 rounded-xl border border-gray-700"
        >
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-secondaryText text-lg xl:text-xl 2xl:text-2xl">
              {project.title}
            </h2>
            <div className="flex flex-row gap-1 justify-center items-center">
              {project.githubUrl && (
                <a href={project.githubUrl}>
                  <FaGithub color="white" size={25} />
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl}>
                  <GoArrowUpRight color="#4461AF" size={30} />
                </a>
              )}
            </div>
          </div>
          <p className="text-primaryText text-base xl:text-lg 2xl:text-xl text-justify mt-5">
            {project.description.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <div className="flex flex-row justify-between items-center gap-2 mt-5">
            <div className="gap-3 flex flex-wrap">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-textBackground p-1 px-2 md:p-2 md:px-3 text-secondary text-base xl:text-lg 2xl:text-xl rounded-md border border-gray-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
      <Separator />
    </div>
  );
}
