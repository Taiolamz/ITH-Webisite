import { Arrow60Deg } from "../../../assets/icons";
import { ContactHeroImg } from "../../../assets/images";

const ContactHeroSection = () => {
  return (
    <section className="">
      <div
        style={{ backgroundImage: `url(${ContactHeroImg})` }}
        className="h-[calc(100vh-300px)]  overflow-hidden  w-full bg-cover relative bg-center"
      >
        <div className="absolute bottom-0 right-0 -mr-28 -mb-3 border cursor-pointer border-[#EEEFEF80] rounded-full w-[250px] h-[250px] grid place-items-center group hover:w-[280px] hover:h-[280px] transition-all duration-500 ">
          <img
            src={Arrow60Deg}
            alt="arrow 60deg"
            className="transform -ml-16 transition-all duration-500  group-hover:rotate-[44.5deg]"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
