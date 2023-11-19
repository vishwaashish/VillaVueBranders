import Image from "next/image";
import { Element } from "react-scroll";
import { ScrollLink } from "./Shared";
import { images, services } from "@/constant";

const AboutUs = () => (
  <Element name="about">
    <Element name="about">
      <section className="m-auto w-full max-w-[1249px] py-[92px]">
        <h2
          data-aos="fade-up"
          data-delay="450"
          data-aos-duration="450"
          className="heading mb-[55px] text-center font-quat"
        >
          <span className="cursor-hover">Hotels Well Designed</span>
        </h2>
        <div className="relative grid w-full grid-cols-2 px-7 lg:grid-cols-5">
          {images.logos.map((logo, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-delay="450"
              data-aos-duration="450"
              className="section2-logo grid place-content-center  py-[12px] md:py-[20px]"
            >
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className=" cursor-hover"
                style={{ width: "100%", height: "auto", maxWidth: 200 }}
                src={logo.src}
                alt={'logos'}
              ></Image>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl">
        <h2
          className="heading mb-[55px] "
          data-aos="fade-up"
          data-delay="250"
          data-aos-duration="450"
        >
          <span className="cursor-hover">About Us</span>
        </h2>

        <p
          className=" mb-[95px] p-2 text-center font-quat text-[24px] leading-7 text-white lg:text-[32px] lg:leading-10"
          data-aos="fade-up"
          data-delay="450"
          data-aos-duration="450"
        >
          Hello and welcome to iframe Hospitality, your one-stop shop for
          outstanding branding and website design made especially for Greek
          hotels and villas.
        </p>
      </section>

      <section className="container">
        <div
          className=" rounded-2xl bg-repeat-x  px-2 py-20"
          style={{
            backgroundImage: `url(${images.gradientBack.src})`,
          }}
        >
          <h2
            className="heading line-white mb-[55px]"
            data-aos="fade-up"
            data-delay="250"
            data-aos-duration="450"
          >
            <span className="cursor-hover">Our Services</span>
          </h2>

          <p
            className="m-auto mb-[55px] max-w-2xl text-center text-lighter"
            data-aos="fade-up"
            data-delay="250"
            data-aos-duration="450"
          >
            A thorough brand identity for a hotel consists of a number of
            components that come together to produce a recognizable and
            consistent image of the establishment. These are the main elements
            that are usually present in a hotel branding identity package.
          </p>

          <div className="m-auto grid max-w-xl grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-3">
            {services.map((service) => (
              <button
                className=" rounded-lg border-[1px] border-darker p-2 px-1 py-4 text-white hover:border-white"
                key={service}
                data-aos="fade-up"
                data-delay="250"
                data-aos-duration="450"
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center px-4 text-center">
        <p
          className="sub-text m-auto max-w-xl text-center"
          data-aos="fade-up"
          data-delay="250"
          data-aos-duration="450"
        >
          Are you prepared to embrace a fresh hotel concept for your property?
        </p>
        <ScrollLink
          to="contact"
          className=" mx-auto my-[30px] w-full max-w-[320px] transition-transform duration-300 hover:scale-105  "
          data-aos="fade-up"
          data-delay="250"
          data-aos-duration="450"
        >
          <button
            className="btn mx-auto w-full max-w-[320px] bg-white py-[20px] text-[14px] font-bold text-black transition-transform duration-300 hover:scale-105  hover:bg-white"
            data-aos="fade-up"
            data-delay="250"
            data-aos-duration="450"
          >
            Send Enquiry
          </button>
        </ScrollLink>
      </section>
    </Element>
  </Element>
);

export default AboutUs;
