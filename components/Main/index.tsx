import Banner from "@comp/Banner";
import About from "@comp/About";
import Works from "@comp/Works";
import Contact from "@comp/Contacts";

const Home = () => {
  return (
    <div className="h-full bg-lightBlue pb-8 lg:pb-16">
      <div className="container mx-auto flex flex-col items-center relative">
        <Banner />
        <About />
        <Works />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
