import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { isProject, isProTag, projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

interface isProjectCard extends isProject {
  index: number;
}
const ProjectCard = ({
  index,
  name,
  description,
  image,
  tags,
  source_code_link,
}: isProjectCard) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="!bg-[var(--tertiary)] !p-5 !rounded-2xl w-full sm:w-[360px] h-full sm:h-[550px]"
      >
        <div className="!w-full relative !h-[230px]">
          <img
            src={image}
            alt={name}
            className="!w-full !h-full !object-cover !rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="!mt-5">
          <h3 className="text-white text-[24px] font-bold">{name}</h3>
          <p className="!text-[var(--secondary)] text-xs !mt-2">
            {description}
          </p>
        </div>
        <div className="!mt-4 flex flex-wrap gap-2">
          {tags.map((tag: isProTag) => {
            const { name, color } = tag;
            return (
              <div key={name} className={`text-[14px] ${color}`}>
                #{name}
              </div>
            );
          })}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>
      <div className="!w-full !flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-[var(--secondary)] text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world example of my works. Each project is briefly described with
          links to code reponsitories and live demo in it.
        </motion.p>
      </div>
      <div className="!mt-20 flex flex-wrap !gap-8">
        {projects.map((project, index) => {
          return (
            <ProjectCard key={`project-${index}`} {...project} index={index} />
          );
        })}
      </div>
    </>
  );
};
const WrappedWorks = SectionWrapper(Works, "");
export default WrappedWorks;
