"use client";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import { MagicButton } from "./ui/MagicButton";

const Footer = () => {
  const openSite = (url: string) => {
    window.open(url);
  };
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-4xl md:text-5xl text-center lg:max-w-[45vw]">
          Ready to take <span className="text-purple-300">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          {`Reach out to me today and let's discuss how I can help you
          achieve your goals.`}
        </p>

        <MagicButton
          title="Let's get in touch"
          icon={<FaLocationArrow />}
          position="right"
          handleClick={() =>
            window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&to=priyadav218@gmail.com",
              "_blank"
            )
          }
        />
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2026 Priya Yadav
        </p>

        <div className="flex items-center md:gap-3 gap-6 pt-4">
          {socialMedia.map((info) => (
            <button
              onClick={() => openSite(info.link)}
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
