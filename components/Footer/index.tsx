const Footer = () => {
  return (
    <div className="w-full bg-lightBlue pb-8 lg:pb-16 lg:px-24">
      <hr className="mx-8 lg:mx-24 border border-blue-900" />
      <div className="flex justify-center">
        <a
          href="#banner"
          className="font-Caveat text-5xl lg:text-6xl pt-8 lg:pt-12 pr-3 mb-6"
        >
          Ryu
        </a>
      </div>
      <ul className="flex justify-center w-full mb-6">
        <li className="mr-2">
          <a
            href="https://www.linkedin.com/in/chih-lung-tu-a6807821a/"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center m-2"
          >
            <i className="fab fa-linkedin text-3xl"></i>
          </a>
        </li>
        <li className="mr-2">
          <a
            href="https://github.com/juker1141"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center m-2"
          >
            <i className="fab fa-github-square text-3xl"></i>
          </a>
        </li>
        <li>
          <a
            href="mailto:juker1141@gmail.com"
            className="flex items-center m-2"
          >
            <i className="fas fa-envelope-square text-3xl"></i>
          </a>
        </li>
      </ul>
      <div className="flex justify-center">
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="text-xs">Made with </span>
          <span className="text-sm font-black">tailwindcss</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
