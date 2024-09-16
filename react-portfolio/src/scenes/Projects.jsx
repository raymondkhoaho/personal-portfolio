import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <a href={link} target="_blank" rel="noreferrer">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">
            {description}
          </p>
        </div>
      </a>
      <img className="aspect-[4.5/3]" src={`../assets/${title.toLowerCase()}.jpeg`} alt={title} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-blue">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3 mb-10" />
          </div>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <Project title="InstaPet" link="https://instapet.raymondkhoaho.com" description="A full stack web application for animal lovers who want to show off their pet to the community." />
          <Project title="MacVue" link="https://raymondkhoaho.github.io/MacVue/" description="A web application for the health conscious who want to view nutritional facts about a food." />
          <Project title="Evogym" link="https://e737e1ad.gym-typescript-5uj.pages.dev/" description="Typescript React Fitness Application"/>

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
