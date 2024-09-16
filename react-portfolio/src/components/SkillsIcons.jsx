const SkillsIcons = () => {
  const iconsClass = "relative size-12 md:size-24 hover:opacity-50 transition duration-500";
  const textClass = "font-bold absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-100 text-xs text-center bg-black text-white px-2 py-1 rounded transition duration-300";

  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-center gap-10 md:gap-20">
      <div className={iconsClass}>
        <img alt="html" src="../assets/icons8-html-100.png" />
        <span className={textClass}>HTML</span>
      </div>
      <div className={iconsClass}>
        <img alt="css" src="../assets/icons8-css-100.png" />
        <span className={textClass}>CSS</span>
      </div>
      <div className={iconsClass}>
        <img alt="javascript" src="../assets/icons8-javascript-100.png" />
        <span className={textClass}>JavaScript</span>
      </div>
      <div className={iconsClass}>
        <img alt="react" src="../assets/icons8-react-90.png" />
        <span className={textClass}>React</span>
      </div>
      <div className={iconsClass}>
        <img alt="typescript" src="../assets/icons8-typescript-100.png" />
        <span className={textClass}>TypeScript</span>
      </div>
      <div className={iconsClass}>
        <img alt="nodejs" src="../assets/icons8-node-js-100.png" />
        <span className={textClass}>Node.js</span>
      </div>
      <div className={iconsClass}>
        <img alt="expressjs" src="../assets/icons8-express-js-100.png" />
        <span className={textClass}>Express.js</span>
      </div>
      <div className={iconsClass}>
        <img alt="postgresql" src="../assets/icons8-postgresql-100.png" />
        <span className={textClass}>PostgreSQL</span>
      </div>
      <div className={iconsClass}>
        <img alt="tailwind" src="../assets/icons8-tailwind-css-100.png" />
        <span className={textClass}>Tailwind CSS</span>
      </div>
      <div className={iconsClass}>
        <img alt="bootstrap" src="../assets/icons8-bootstrap-100.png" />
        <span className={textClass}>Bootstrap</span>
      </div>
    </div>
  );
};

export default SkillsIcons;
