import { useState } from "react";
import { CheckIcon } from "../../assets/icons";
import { Section } from "../Reusables/Container";
import { letter_frequency, news_letter } from "./lists";
import { Button } from "../Reusables/Button";

const NewsAndLetter = () => {
  const [selectedFrequency, setSelectedFrequency] = useState("");

  const handleChange = (value: string) => {
    setSelectedFrequency(value);
  };
  const inputClass =
    "py-[15px] px-[16px] placeholder:font-light placeholder:text-sm text-sm text-white bg-[#FBFBFB4D] rounded-[5px] outline-none";
  return (
    <Section className="h-screen grid grid-cols-2  place-items-center">
      {/* left content display */}
      <div className="bg-gradient-to-r from-[#020E2A] to-[#9D9D9D] p-10 w-full h-[497px]">
        <h1 className="text-5xl text-white font-bold">Newsletter</h1>
        <p className="my-6 text-white">
          Everything update about IT Holdings in your inbox
        </p>
        <div className="grid grid-rows-1 gap-8">
          {news_letter.map((chi, idx) => (
            <div
              key={idx}
              className="grid grid-cols-[0.1fr_1fr] items-center gap-2 w-full"
            >
              <img src={CheckIcon} alt="check icon" />
              <p className="w-full text-white">{chi}</p>
            </div>
          ))}
        </div>
      </div>
      {/* right  content display*/}
      <form className="bg-[#020E2A] grid grid-cols-2 w-full h-[497px]">
        <div className="border-r border-[#FBFBFB4D]">
          <h5 className="text-[#FBFBFB] font-medium text-lg border-b border-[#FBFBFB4D]  p-9 pb-4">
            Letter Frequency
          </h5>
          <div className="">
            {letter_frequency.map((chi, idx) => {
              const { label, value } = chi;
              return (
                <div
                  key={idx}
                  className="grid grid-cols-[0.08fr_1fr] items-center gap-2 w-full border-b border-[#FBFBFB4D] p-9"
                >
                  <input
                    type="radio"
                    id={value}
                    name="letter_frequency"
                    className="bg-transparent"
                    checked={selectedFrequency === value}
                    onChange={() => handleChange(value)}
                  />
                  <label htmlFor={value} className="text-white font-light">
                    {label}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="py-9 px-7 grid grid-rows-[.3fr_.7fr_1fr] gap-10 ">
          <div className="flex flex-col gap-2">
            <label htmlFor="full_name" className="text-white">
              Full Name
            </label>
            <input
              type="text"
              name="full_name"
              id="full_name"
              className={inputClass}
              placeholder="First name"
              onChange={() => {}}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="full_name" className="text-white">
              Email Address <span className="text-[#D10505]">*</span>
            </label>
            <input
              type="text"
              name="email_address"
              id="email_address"
              className={inputClass}
              placeholder="Your email"
              onChange={() => {}}
            />
          </div>

          <Button className="border-white hover:bg-white text-white hover:text-[#002887]">
            Subscribe Now
          </Button>
        </div>
      </form>
    </Section>
  );
};

export default NewsAndLetter;
