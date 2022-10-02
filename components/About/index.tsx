import React from "react";
import { Trans } from "next-i18next";

const About = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center mt-36 lg:mt-10">
      <div className="flex flex-col items-center w-full lg:w-1/2 md:px-24 lg:px-0">
        <div className="font-Raleway text-5xl lg:text-6xl w-full lg:w-10/12 px-6 lg:px-0 text-left relative">
          <span id="about" className="absolute -top-112 lg:-top-52"></span>About
          Me
        </div>
        <div className="mt-10 lg:text-xl w-full flex break-words">
          <div className="lg:w-1/12"></div>
          <div className="w-full px-6 lg:px-0">
            <Trans
              i18nKey="about:content"
              components={[<strong key="0" className="font-Raleway"></strong>]}
            />
          </div>
        </div>
      </div>
      <div className="lg:w-1/12"></div>
      <div className="flex justify-center items-cneter w-full lg:w-auto mb-10 lg:mb-0">
        <div className="h-72 w-72 rounded-full bg-meImg bg-top-3 bg-no-repeat bg-cover" />
      </div>
    </div>
  );
};

export default About;
