import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center text-center ">
          <p className="font-playfair text-md pb-10">
            ©2024 Raymond Ho
          </p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
