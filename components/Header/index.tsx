import { useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  // state = {
  //   menuShow: false,
  //   languageSelect: false,
  // };
  const [isShowMenu, setIsShowMenu] = useState(false);

  // function handleChange(select) {
  //   this.props.i18n.changeLanguage(select);
  //   this.setState({ languageSelect: false, menuShow: false });

  //   this.resetForm();
  // }

  // function resetForm() {
  //   if (!this.props.formReview) {
  //     this.props.reset();
  //   }
  // }

  return (
    <div
      className={`font-BarlowCondensed bg-lightBlue z-10 fixed top-0 right-0 left-0 mx-2 mt-2 lg:mt-5 pt-6 lg:mx-5 lg:pt-7 pb-5 lg:pb-7 px-5 lg:px-20 ${
        isShowMenu ? "h-screen lg:h-auto" : ""
      }`}>
      <div className="flex justify-between">
        <div className="flex items-center lg:items-end justify-between lg:justify-start w-full lg:w-auto">
          <a
            onClick={() => {
              setIsShowMenu(false);
            }}
            href="#banner"
            className="font-Caveat text-5xl lg:text-6xl">
            Ryu
          </a>
        </div>
        <button
          onClick={() => {
            setIsShowMenu(!isShowMenu);
          }}
          type="button"
          className="flex justify-center items-center lg:hidden focus:outline-none">
          <span className="material-icons p-2 text-3xl">menu</span>
        </button>
        <div
          className={`text-4xl lg:text-3xl lg:flex lg:items-end top-32 lg:top-0
          ${isShowMenu ? "fixed lg:relative" : "hidden"}`}>
          <ul className="lg:flex lg:items-center">
            <li className="py-3 lg:hidden">
              <ul className="flex w-full px-2">
                <li className="mr-2 flex items-center">
                  <a
                    href="https://www.linkedin.com/in/chih-lung-tu-a6807821a/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center m-2">
                    <i className="fab fa-linkedin text-3xl"></i>
                  </a>
                </li>
                <li className="mr-2 flex items-center">
                  <a
                    href="https://github.com/juker1141"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center m-2">
                    <i className="fab fa-github-square text-3xl"></i>
                  </a>
                </li>
                <li className="flex items-center">
                  <a
                    href="mailto:juker1141@gmail.com"
                    className="flex items-center m-2">
                    <i className="fas fa-envelope-square text-3xl"></i>
                  </a>
                </li>
              </ul>
            </li>
            <li className="py-3 lg:py-0 flex items-center h-[60px]">
              <a
                onClick={() => {
                  setIsShowMenu(false);
                }}
                href="#about"
                className="pt-2 pb-3 px-3 lg:px-6 hover:text-sky-600">
                About
              </a>
            </li>
            <li className="py-3 lg:py-0 flex items-center h-[60px]">
              <a
                onClick={() => {
                  setIsShowMenu(false);
                }}
                href="#experience"
                className="pt-2 pb-3 px-3 lg:px-6 hover:text-sky-600">
                Experience
              </a>
            </li>
            <li className="py-3 lg:py-0 flex items-center h-[60px]">
              <a
                onClick={() => {
                  setIsShowMenu(false);
                }}
                href="#works"
                className="pt-2 pb-3 px-3 lg:px-6 hover:text-sky-600">
                Works
              </a>
            </li>
            <li className="py-3 lg:py-0 flex items-center h-[60px]">
              <a
                onClick={() => {
                  setIsShowMenu(false);
                }}
                href="#contact"
                className="pt-2 pb-3 px-3 lg:px-6 hover:text-sky-600">
                Contact
              </a>
            </li>
            <li className="py-3 lg:py-0 flex items-center h-[60px] relative group">
              <button
                type="button"
                className="flex items-center px-3 py-3 hover:text-sky-600">
                <i className="fa-solid fa-earth-asia text-2xl"></i>
                <i className="fa-solid fa-caret-down text-lg ml-3"></i>
              </button>
              <div className="absolute top-[60px] left-0 lg:right-0 bg-white shadow hidden group-hover:block">
                {router?.locales?.map((locale) => {
                  return (
                    <button
                      key={locale}
                      onClick={() => {
                        if (router.locale === locale) return;

                        router.push("/", "/", {
                          locale: locale,
                        });
                        setIsShowMenu(false);
                      }}
                      className={`pt-1.5 pb-3 px-6 flex items-center ${
                        router.locale === locale
                          ? "bg-blue-900 text-white"
                          : "hover:text-sky-600"
                      }`}>
                      {locale}
                    </button>
                  );
                })}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
