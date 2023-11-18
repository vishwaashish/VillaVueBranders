import { images } from "@/constant";
import { Element } from "react-scroll";
import { ScrollLink } from "./Shared";

const HeroSection = () => (
  <Element name="home">
    <section
      className="heroSection relative grid h-screen  place-content-center bg-cover bg-bottom bg-no-repeat"
      style={{
        backgroundImage: `url(${images.heroBack.src})`,
      }}
    >
      <div className="mt-30 z-10 text-center">
        <h1 className="cursor-hover font-quat text-[48px] leading-[58px] sm:mt-20  lg:text-[82px] lg:leading-[92px]">
          elevate your <span className="font-dahlia">hoteling</span>
        </h1>
        <h2 className="cursor-hover mx-auto mt-[20px] max-w-[700px] px-1 text-[24px]">
          CHANGE YOUR HOTEL OR VILLA INTO A UNIQUE BRAND THAT ATTRACTS THOUGHTS
          AND SENSE
        </h2>
        <div className="cursor-hover btn mx-auto mt-[20px] w-[180px] cursor-pointer py-[16px] text-sm transition-transform duration-300 hover:scale-105">
          <ScrollLink className="w-full " to="contact">
            Send Enquiry
          </ScrollLink>
        </div>
      </div>
    </section>
  </Element>
);

export default HeroSection;
