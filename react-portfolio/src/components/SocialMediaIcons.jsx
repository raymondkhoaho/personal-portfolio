const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/raymondkhoaho"
        target="_blank"
        rel="noreferrer"
      >
        <img className="size-9" alt="linkedin-link" src="../assets/linkedin1.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.github.com/raymondkhoaho"
        target="_blank"
        rel="noreferrer"
      >
        <img className="size-9" alt="github-link" src="../assets/github-mark-white.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="mailto:raymondkhoaho@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <img className="size-9" alt="email-link" src="../assets/email.png" />
      </a>

    </div>
  );
};

export default SocialMediaIcons;
