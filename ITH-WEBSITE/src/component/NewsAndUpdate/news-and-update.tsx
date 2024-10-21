import { Link } from "react-router-dom";
import { Button } from "../Reusables/Button";
import { Section } from "../Reusables/Container";
import { news_and_update } from "./lists";

const NewsAndUpdate = () => {
  return (
    <Section className="h-screen flex flex-col gap-5 justify-center">
      <h1 className="text-black font-medium text-[40px] my-6">
        News and Updates
      </h1>
      <div className="grid grid-cols-3 gap-6">
        {news_and_update.map((chi, idx) => {
          const { path, content, date, image, alt } = chi;
          return (
            <div
              className="flex flex-col bg-white shadow-xl rounded-b-[5px] "
              key={idx}
            >
              <div className="relative grid place-items-center">
                <img src={image} alt={alt} className="w-full rounded-t-[5px]" />
                <div className="absolute inset-0 bg-black opacity-30 rounded-t-[5px]"></div>
                <div className="absolute group grid place-items-center cursor-pointer border border-[#EDEDED] h-[80px] w-[80px] rounded-full hover:h-[100px] hover:w-[100px] transition-all duration-300 hover:bg-white hover:shadow-xl ease-in-out ">
                  <Link to={path} className="text-white border-b border-b-white group-hover:text-[#020E2A] group-hover:border-b-[#020E2A] transition-all duration-300 ease-in-out">
                    Read
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-2 bg-white rounded-b-[5px] p-10">
                <p className="w-[315px]">{content}</p>
                <p className="text-xs">{date}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-10">
        <Button>View More</Button>
      </div>
    </Section>
  );
};

export default NewsAndUpdate;
