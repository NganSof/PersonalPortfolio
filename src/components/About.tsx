import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { isService, services } from "../constants/index";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc/index";

export const ServiceCard = ({ id, title, icon }: isService) => {
  return (
    <Tilt className="!w-[550px] ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * +id, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          data-options={{ max: 45, scale: 1, speed: 450 }}
          className="rounded-[20px] bg-tertiary py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center"
        >
          <img src={icon} alt="icon" className="w-16 h-16 object-contain" />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <section className={styles.paddingX}>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>
      <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <p className="mt-4 text-[var(--secondary)] text-[17px] max-w-5xl leading-[30px]">
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, expertise in frameworks like React and I have experience
          work to many libary about UI like TailwindCSS, AntDesign, Material UI
          <br />I want a friendly, happy working environment and my team to
          cooperate to help at work. Let's work together!!!
        </p>
      </motion.div>
      <div className="!mt-20 flex justify-center items-center !flex-wrap !sm:flex-nowrap !gap-14">
        {services.map((services: isService) => {
          return <ServiceCard key={services.id} {...services} />;
        })}
      </div>
    </section>
  );
};
// export default SectionWrapper(About, "about");

const WrappedAbout = SectionWrapper(About, "about");
export default WrappedAbout;
