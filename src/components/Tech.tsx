import { SectionWrapper } from "../hoc/index";
import { technologies } from "../constants/index";
import BallCanvas from "./canvas/Ball";

const Tech = () => {
  return (
    <div className="flex flex-wrap flex-row justify-center gap-10 ">
      {technologies.map((tech) => {
        const { name, icon } = tech;
        return (
          <div className="w-28 h-28 cursor-pointer" key={name}>
            <BallCanvas icon={icon} />
          </div>
        );
      })}
    </div>
  );
};
const WrappedTech = SectionWrapper(Tech, "");
export default WrappedTech;
