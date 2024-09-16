import LineGradient from "../components/LineGradient";
import SkillsIcons from "../components/SkillsIcons";
import { motion } from "framer-motion";

const MySkills = () => {
  return (
    <section id="skills" className="pb-36">
      {/* HEADER */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>
      </div>

      {/* SKILLS */}
      <div className="md:flex mt-16 gap-32">
        <motion.div
          className="md:w-full mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-48">
            <SkillsIcons />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
