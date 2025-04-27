import { styles } from "../styles";
import { logoAvatar, logo } from "../assets/index";
import { useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";

export const Hero = () => {
  const [changeLogo, setChangeLogo] = useState(false);
  return (
    <section
      className={`${styles.paddingX} !pt-[150px] w-full flex justify-center items-center flex-wrap sm:flex-row sm:h-screen h-full mx-auto mt-24 overflow-hidden`}
    >
      <div className="sm:flex-grow max-w-7xl mx-auto flex flex-row items-center gap-5 sm:basis-48">
        <div className="flex flex-col justify-center items-center mt-10">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className="text-[#915eff]">Kim Ngân</span>
            <p>you can call me NELLIE</p>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            I am a software developer with 3 years of experience using Reactjs
            and SAP.
          </p>
        </div>
      </div>
      <div className="sm:flex-grow sm:basis-48 p-5 flex justify-center items-center">
        <div className="w-36 h-36 sm:w-52 sm:h-52 rounded-full overflow-hidden relative cursor-pointer">
          <motion.img
            variants={slideIn("left", "tween", 0.2, 1)}
            initial="hidden"
            animate="show"
            whileHover={{
              x: ["0%", "100%"],
              transition: {
                duration: 2,
                ease: "easeInOut",
              },
            }}
            src={changeLogo ? logo : logoAvatar}
            alt="logoAvatar"
            className="w-full h-full object-cover"
            onMouseEnter={() => setChangeLogo((prev) => !prev)}
          />
        </div>
      </div>
    </section>
  );
};
