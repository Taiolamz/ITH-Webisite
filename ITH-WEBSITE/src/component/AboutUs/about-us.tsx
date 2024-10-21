import { Section } from "../Reusables/Container";
import { about_us } from "./lists";

const AboutUs = () => {
  return (
    <Section className="h-screen flex flex-col gap-14 justify-center text-center">
      <div className="flex flex-col gap-3">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aliquam
          dolores veniam reprehenderit culpa, excepturi blanditiis consequuntur,
          mollitia commodi maiores aliquid repellat cupiditate! Quia quisquam
          consequuntur placeat magni alias ullam.
        </p>
      </div>

      {/* about us content display */}
      <div className="flex justify-between items-center ">
        {about_us.map((chi, idx) => {
          const { label, image, subsidiary, content } = chi;
          return (
            <div key={idx}>
              <img
                src={image}
                alt={`about ${label}`}
                className="rounded-b-[5px]"
              />
              {/* <p className="bg-[#012169] -mt-5 z-[999] p-[13px] text-[20px] font-medium text-white">
                {label}
              </p> */}
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default AboutUs;
