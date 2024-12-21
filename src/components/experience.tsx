import experienceData from "../data/experience.json";
import { FaCircle, FaExternalLinkAlt } from "react-icons/fa";
import Separator from "./separator";
import { motion } from "motion/react";

export default function Experience() {
  return (
    <div className="mt-20 flex flex-col px-5 md:px-0 w-screen md:w-2/3 2xl:w-1/2 gap-20">
      {experienceData.experience.map((job, index) => (
        <motion.div
          animate={{ opacity: [0, 1], y: [200, 0] }}
          transition={{ duration: 1, delay: 2 }}
          key={index}
          className="flex flex-col lg:flex-row gap-5 lg:gap-5"
        >
          <div>
            <p className="text-secondary text-base xl:text-lg 2xl:text-xl w-auto md:w-40 2xl:w-60">
              {job.startDate} - {job.endDate}
            </p>
          </div>
          <div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-2 items-center">
                <p className="text-secondaryText text-lg xl:text-xl 2xl:text-2xl">
                  {job.position}
                </p>
                <FaCircle color="white" size={3} />
                <h2 className="text-secondaryText text-lg xl:text-xl 2xl:text-2xl">
                  {job.company}
                </h2>
              </div>
              <a href={job.url} target="blank">
                <FaExternalLinkAlt color="white" />
              </a>
            </div>
            <p className="text-primaryText text-base xl:text-lg 2xl:text-xl mt-4 text-justify flex flex-col gap-5">
              {job.description.map((desc, i) => (
                <span key={i}>
                  • {desc}
                  <br />
                </span>
              ))}
            </p>
            <div className="mt-10 gap-3 flex flex-wrap">
              {job.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-textBackground p-1 px-2 md:p-2 md:px-3 text-secondary text-base xl:text-lg 2xl:text-xl rounded-md border border-gray-800"
                >
                  {skill}
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
