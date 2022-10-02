import React from "react";
import { useTranslation, Trans } from "next-i18next";

const Banner = () => {
  const { t }: { t: any } = useTranslation();

  return (
    <div className="flex flex-col items-center lg:flex-row w-full" id="banner">
      <div className="lg:h-screen mt-48 lg:mt-0 w-full lg:w-1/2 flex flex-col justify-center items-center">
        <div className="text-center font-Raleway mb-8">
          <div className="text-3xl lg:text-5xl mb-4">{t("banner:hello")}</div>
          <div className="text-6xl lg:text-7xl font-extrabold lg:inline-block lg:font-black">
            Ryu
          </div>
        </div>
        <div className="flex flex-col justify-center text-center break-words lg:text-xl w-5/6 lg:w-2/3">
          <div>
            <Trans i18nKey="banner:content" components={[<br key="0" />]} />
          </div>
        </div>
      </div>
      <div className="h-96 w-full lg:h-144 lg:w-1/2 relative flex items-center z-0">
        <div className="h-full w-full absolute hidden lg:block bg-bannerImg bg-no-repeat bg-center bg-contain">
          <div
            className="absolute animate-bounce lg:bottom-36 lg:right-16 lg:mb-2 lg:w-16 lg:h-16
            xl:bottom-28 xl:right-20 xl:mr-4 xl:mb-4 2xl:bottom-20 2xl:right-18 2xl:mr-5 2xl:mb-3 2xl:h-24 2xl:w-28 bg-githubImg bg-no-repeat bg-center bg-contain"></div>
          <div
            className="absolute animate-spin-slow lg:top-44 lg:left-20 lg:h-20 lg:w-20
            xl:top-36 xl:left-24 xl:mt-5 xl:ml-1 2xl:h-28 2xl:w-28 2xl:top-28 2xl:left-28 bg-gearImg bg-no-repeat bg-center bg-contain"></div>
          <div
            className="absolute animate-spin-reverse-slow lg:top-36 lg:left-10 lg:mt-2 lg:h-16 lg:w-16
            xl:top-32 xl:left-16 2xl:top-24 2xl:left-16 2xl:ml-2 2xl:h-20 2xl:w-20 bg-gearImg bg-no-repeat bg-center bg-contain"></div>
        </div>
        <div className="h-full w-full absolute lg:hidden bg-bannerMobileImg bg-no-repeat bg-center bg-contain"></div>
      </div>
    </div>
  );
};

export default Banner;
