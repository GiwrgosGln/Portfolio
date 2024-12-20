import experienceData from "../data/experience.json";
import { FaCircle, FaExternalLinkAlt } from "react-icons/fa";
import Separator from "./separator";

export default function Experience() {
  return (
    <div className="mt-20 flex flex-col w-1/2 gap-20">
      {experienceData.experience.map((job, index) => (
        <div key={index} className="flex flex-row gap-20">
          <div>
            <p className="text-secondary text-xl w-60">
              {job.startDate} - {job.endDate}
            </p>
          </div>
          <div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-2 items-center">
                <p className="text-secondaryText text-xl">{job.position}</p>
                <FaCircle color="white" size={3} />
                <h2 className="text-secondaryText text-xl">{job.company}</h2>
              </div>
              <a href={job.url} target="blank">
                <FaExternalLinkAlt color="white" />
              </a>
            </div>
            <p className="text-primaryText text-xl mt-4 text-justify">
              {job.description}
            </p>
            <div className="mt-2 gap-3 flex flex-row">
              {job.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-textBackground p-1 px-2 text-secondary rounded-md mt-4"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
      <Separator />
    </div>
  );
}
