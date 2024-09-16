const SkillsIcons = () => {
  const iconsClass = "size-20 hover:opacity-50 transition duration-500"
  return (
    <div className="flex justify-between gap-20">
      <img className={iconsClass} alt="html" src="../assets/icons8-html-100.png" />
      <img className={iconsClass} alt="css" src="../assets/icons8-css-100.png" />
      <img className={iconsClass} alt="javascript" src="../assets/icons8-javascript-100.png" />
      <img className={iconsClass} alt="react" src="../assets/icons8-react-90.png" />
      <img className={iconsClass} alt="typescript" src="../assets/icons8-typescript-100.png" />
      <img className={iconsClass} alt="nodejs" src="../assets/icons8-node-js-100.png" />
      <img className={iconsClass} alt="expressjs" src="../assets/icons8-express-js-100.png" />
      <img className={iconsClass} alt="postgresql" src="../assets/icons8-postgresql-100.png" />
      <img className={iconsClass} alt="tailwind" src="../assets/icons8-tailwind-css-100.png" />
      <img className={iconsClass} alt="bootstrap" src="../assets/icons8-bootstrap-100.png" />
    </div>
  );
};

export default SkillsIcons;
