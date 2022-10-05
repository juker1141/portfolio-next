import { useTranslation, Trans } from "next-i18next";

const Experience = () => {
  const { t }: { t: any } = useTranslation();

  return (
    <div className="w-full flex flex-col items-cneter mt-32">
      <div className="flex flex-col items-start w-full md:px-24 lg:px-16">
        <div className="font-Raleway text-5xl lg:text-6xl w-full lg:w-10/12 px-6 lg:px-0 text-left relative">
          <span id="experience" className="absolute -top-36 lg:-top-52"></span>
          Experience
        </div>
        <ul className="mt-10 lg:text-xl w-full xl:w-10/12 px-6 lg:px-0 flex break-words ">
          <li className="flex flex-col lg:flex-row lg:justify-between w-full">
            <div className="w-full lg:w-1/2 flex items-start">
              <div className="w-full flex items-center py-1 mb-2 lg:mb-0">
                <p className="text-sky-600 text-lg lg:text-2xl flex-shrink-0 mr-5">
                  {t("experience:date.oct")} 2021 - {t("experience:date.now")}
                </p>
                <hr className="border-sky-600 w-20 border lg:border-b-2" />
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-1/2">
              <h3 className="text-3xl lg:text-4xl mb-3 flex flex-col lg:flex-row">
                Fornt-end Developer
              </h3>
              <div className="flex justify-end mb-3">
                <span className="mx-3 text-lg">-</span>
                <span className="text-lg">{t("experience:realtime.name")}</span>
              </div>
              <p>
                <Trans
                  i18nKey="experience:realtime.content"
                  components={[<br key="0" />]}
                />
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
