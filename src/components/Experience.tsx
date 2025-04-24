import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences, isExperience } from "../constants/index";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({
  companyName,
  iconBg,
  icon,
  date,
  title,
  points,
}: isExperience) => {
  return (
    // @ts-expect-error:children prop is supported but missing from type
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={icon}
            alt={companyName}
            className="object-contain w-[100%] h-[100%] rounded-full"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{title}</h3>
        <p className="text-[var(--secondary)] text-[16px] font-semibold">
          {companyName}
        </p>
      </div>
      <ul className="list-disc mt-5 ml-5 space-y-2">
        {points.map((point, ind) => {
          return (
            <li
              key={ind}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          );
        })}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section className={`${styles.paddingX}`}>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>what is have done so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience </h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience: isExperience) => {
            return <ExperienceCard key={experience.id} {...experience} />;
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};
const WrappedExperience = SectionWrapper(Experience, "work");
export default WrappedExperience;
