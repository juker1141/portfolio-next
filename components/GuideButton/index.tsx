import React, { useEffect, useState } from "react";

const GuideButton = () => {
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 450) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className={`fixed h-16 w-screen bottom-12 left-0 right-0
      flex justify-center items-center ${showButton ? "" : "hidden"}`}
    >
      <a
        href="#about"
        className="flex flex-col animate-bounce-slow px-4 items-center h-full"
      >
        <span className="material-icons-outlined h-3 text-2xl">
          expand_more
        </span>
        <span className="material-icons-outlined h-3 text-5xl">
          expand_more
        </span>
      </a>
    </div>
  );
};

export default GuideButton;
