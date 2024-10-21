import { LightImage } from "../../assets/images";
import { Button } from "../Reusables/Button";
import { Section } from "../Reusables/Container";

const ModernBusiness = () => {
  return (
    <Section className="h-screen flex flex-col justify-center ">
      <div className="flex justify-between">
        <div className="bg-[#0028870D] w-full p-14 py-20 flex flex-col gap-7 h-[535px]">
          <p className="text-[#002887] uppercase text-sm font-medium">
            Modern Businessa
          </p>
          <h1 className="text-[#121212] font-bold text-[40px] w-[590px]">
            Your Business Partner in Emerging Technology
          </h1>
          <div className="mt-auto">
            <Button>Contact Us</Button>
          </div>
        </div>

        {/* right display */}
        <div className="grid grid-cols-2 grid-rows-1 gap-0">
          <div className="bg-[#004BFF] h-full"></div>
          <div className="bg-[#002887]"></div>
          <div className="bg-[#002887]"></div>
          <div className="flex items-center justify-center bg-[#002887]">
            <img src={LightImage} alt="light" className="w-full " />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ModernBusiness;
