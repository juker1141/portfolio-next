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
        <ul className="mt-10 lg:text-xl w-full lg:w-10/12 px-6 lg:px-0 flex break-words mx-0 lg:mx-10">
          <li className="flex w-full">
            <div className="w-1/2 flex items-start mr-10">
              <div className="w-full flex items-center py-1">
                <p className="text-sky-600 text-2xl flex-shrink-0 mr-5">
                  {t("experience:date.oct")} 2021 - {t("experience:date.now")}
                </p>
                <hr className="border-sky-600 w-20 border-b-2" />
              </div>
            </div>
            <div className="flex flex-col w-1/2">
              <h3 className="text-4xl mb-5">
                Fornt-end Developer
                <span className="mx-3 text-lg">-</span>
                <span className="mr-5 text-lg">
                  {t("experience:realtime.name")}
                </span>
              </h3>
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
