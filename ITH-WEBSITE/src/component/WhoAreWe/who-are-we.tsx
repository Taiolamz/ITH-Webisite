import { Section } from "../Reusables/Container";
import { WhoAreWeImg } from "../../assets/images";
import { Button } from "../Reusables/Button";

const WhoAreWe = () => {
  return (
    <Section className="h-screen flex flex-col justify-center">
      <div className="flex items-center relative">
        <div className="bg-[#002887] w-3/4 rounded-[5px] -mb-16 ml-16 h-[200px] absolute bottom-0"></div>
        <div className="bg-white shadow-2xl p-6 py-16 rounded-[5px] w-3/4 z-10 pl-14">
          <h3 className="text-[#002887] font-medium text-sm my-10">
            JOIN OUR JOURNEY OF INNOVATIVE EXCELLENCE
          </h3>
          <h1 className="text-[#121212] font-bold text-[40px]">Who We Are</h1>
          <p className="text-[#212121] my-10 w-[584px]">
            At ITH Holdings, we are a dynamic and innovative conglomerate
            comprising IT Horizons, Zojatech, and Zojapay. As a leading provider
            of cutting-edge technology solutions across various industries, we
            are driven by a passion for excellence and a commitment to
            transforming businesses through digital innovation. Our team of
            experts is dedicated to pushing boundaries and consistently
            exceeding client expectations, shaping the future of IT, software
            development, and fintech.
          </p>
          <Button>Learn More</Button>
        </div>

        {/* image wrap */}
        <img
          src={WhoAreWeImg}
          alt="who are we?"
          className="absolute right-[1rem] w-[40%] z-10"
        />
      </div>
    </Section>
  );
};

export default WhoAreWe;
