import { Section } from "../../Reusables/Container";
import { LocationIcon, SplitLine } from "../../../assets/icons";
import { address_location, socials } from "./lists";
import { Link } from "react-router-dom";
import { Button } from "../../Reusables/Button";

const GetInTouch = () => {
  return (
    <Section className="h-screen grid  place-items-center ">
      <div className="grid grid-cols-2 place-items-baseline ">
        <div className="flex flex-col">
          <h2 className="text-[#121212] font-semibold text-[28px]">
            Get In Touch
          </h2>
          <div className="flex gap-2 items-center mt-8">
            <img src={LocationIcon} alt="location" />
            <p className="text-[20px] font-semibold">Address</p>
          </div>

          <div className="flex flex-col gap-5 mt-4">
            {address_location.map((chi, idx) => {
              const {
                country,
                logo,
                address_one,
                address_two,
                phone,
                phone_two,
              } = chi;
              return (
                <div key={idx}>
                  <div className="flex gap-3 items-center mb-2">
                    <p className="font-medium">{country}</p>
                    <img src={logo} alt={`${country} logo`} />
                  </div>
                  <div className="flex gap-5 items-center">
                    <p className="text-[#212121] font-light text-sm w-[250px]">
                      {address_one}
                    </p>
                    {address_two ? <img src={SplitLine} alt="split" /> : null}
                    <p className="text-[#212121] ml-5 font-light text-sm w-[250px]">
                      {address_two}
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <p className="text-[#212121] font-light text-sm">{phone}</p>
                    {phone_two ? <img src={SplitLine} alt="split" /> : null}
                    <p className="text-[#212121]  font-light text-sm ">
                      {phone_two}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex gap-3 items-center my-10">
            {socials.map((chi, idx) => {
              const { icon, path, label } = chi;
              return (
                <Link
                  to={path}
                  key={idx}
                  className="bg-[#004BFF] w-[98.13px] h-[98.13px] grid place-items-center"
                >
                  <img src={icon} alt={label} />
                </Link>
              );
            })}
          </div>
        </div>

        {/* form display */}
        <form
          action="
      "
        >
          <p>
            For enquiries, please fill out the form below and a member of our
            team will contact you.
          </p>
          <div className="flex flex-col gap-5 mt-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-[#5A5B5B] font-light">
                Full Name <span className="text-[#EA4335]">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter full name"
                className="bg-[#F5F5F5] rounded-[5px] p-4 placeholder:text-[#9D9D9D] placeholder:text-sm placeholder:font-light outline-none font-light"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-[#5A5B5B] font-light">
                Email Address<span className="text-[#EA4335]">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter email address"
                className="bg-[#F5F5F5] rounded-[5px] p-4 placeholder:text-[#9D9D9D] placeholder:text-sm placeholder:font-light outline-none font-light"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-[#5A5B5B] font-light">
                Message <span className="text-[#EA4335]">*</span>
              </label>
              <textarea
                placeholder="Enter message"
                className="bg-[#F5F5F5] rounded-[5px] resize-none pt-5 p-4 placeholder:text-[#9D9D9D] placeholder:text-sm placeholder:font-light outline-none font-light"
                rows={5}
              />
            </div>
            <div className="mt-8">
              <Button>Send Message</Button>
            </div>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default GetInTouch;
