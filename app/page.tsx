"use client";
import Accordians from "@/components/shared/accordian";
import { ScrollLink } from "@/components/shared/aos";
import { conceptStudies, images, services } from "@/constant";
import Image from "next/image";
import { Element } from "react-scroll";

export default function Home() {
  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    window.open(`mailto:${email}?subject=${name}&body=${message}`);
  };
  return (
    <main className="text-white">
      <Element name="home">
        <section
          className="heroSection relative grid h-screen  place-content-center bg-cover bg-bottom bg-no-repeat"
          style={{
            backgroundImage: `url(${images.heroBack.src})`,
          }}
        >
          <div className="mt-30 z-10 text-center">
            <h1 className="font-quat text-[48px] leading-[58px] sm:mt-20  lg:text-[82px] lg:leading-[92px]">
              elevate your <span className="font-dahlia">hoteling</span>
            </h1>
            <h3 className="mx-auto mt-[20px] max-w-[700px] px-1 text-[24px]">
              CHANGE YOUR HOTEL OR VILLA INTO A UNIQUE BRAND THAT ATTRACTS
              THOUGHTS AND SENSE
            </h3>
            <div className="btn mx-auto mt-[20px] w-[180px] cursor-pointer py-[16px] text-sm">
              <ScrollLink className="w-full" to="contact">
                Send Enquiry
              </ScrollLink>
            </div>
          </div>
        </section>
      </Element>

      <Element name="about" className="">
        <section className="m-auto w-full max-w-[1249px] py-[92px]">
          <h2
            data-aos="fade-up"
            data-delay="450"
            data-aos-duration="450"
            className="heading mb-[55px] text-center font-quat"
          >
            Hotels Well Designed
          </h2>
          <div className="relative grid w-full grid-cols-2 px-7 lg:grid-cols-5">
            {images.logos.map((logo, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-delay="450"
                data-aos-duration="450"
                className="section2-logo grid place-content-center  py-[12px] md:py-[20px] "
              >
                <Image
                  width={200}
                  height={200}
                  src={logo.src}
                  alt={logo}
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
            About Us
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
              Our Services
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
            className=" mx-auto my-[30px]   "
            data-aos="fade-up"
            data-delay="250"
            data-aos-duration="450"
          >
            <button
              className="btn mx-auto w-full max-w-[320px] bg-white py-[20px] text-[14px] font-bold text-black"
              data-aos="fade-up"
              data-delay="250"
              data-aos-duration="450"
            >
              Send Enquiry
            </button>
          </ScrollLink>
        </section>
      </Element>

      <Element name="works">
        <section className="container my-[100px]  text-center">
          <h2
            className="heading mb-[55px]"
            data-aos="fade-up"
            data-delay="250"
            data-aos-duration="450"
          >
            Hotel Concept Studies
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-3">
            {conceptStudies.map((item) => (
              <div
                key={item.title}
                className=" text-left"
                data-aos="fade-up"
                data-delay="250"
                data-aos-duration="450"
              >
                <div className="relative z-0 block aspect-video">
                  <Image
                    alt="blog"
                    src={item.backSrc}
                    layout="fill"
                    objectFit="cover"
                    // width={500}
                    // height={1000}
                  ></Image>

                  <Image
                    alt="Gradient"
                    src={images.gradientBlack.src}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="bottom"
                  ></Image>

                  <Image
                    alt="logo"
                    src={item.src}
                    layout="fill"
                    objectFit="contain"
                    className="mx-auto max-w-[303px]"
                  ></Image>
                </div>
                <h1 className="relative z-10 mb-[25px] font-quat text-[24px]">
                  {item.title}
                </h1>
                <p className="relative leading-5 text-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Element>

      <Element name="process">
        <section className="container py-[100px]">
          <h2
            className="heading mb-[55px]"
            data-aos="fade-up"
            data-delay="250"
            data-aos-duration="450"
          >
            The Process
          </h2>
          <Accordians />
        </section>
      </Element>

      <section className="container max-w-[1480px] px-2 pb-[50px] pt-[90px] lg:pb-[90px]">
        <Element name="contact">
          <div
            className=" rounded-2xl bg-repeat-x px-4  py-[92px] md:px-[50px]"
            style={{
              backgroundImage: `url(${images.gradientBack.src})`,
            }}
          >
            <div className="float-left md:w-[38%]">
              <h2 className="heading line-white left p-0 text-left">
                Contact Us
              </h2>
              <p className="sub-text-2 mt-[34px] max-w-[445px] text-light">
                Partner with us on this creative journey, and together,
                let&apos;s leave an unforgettable mark on Greece&apos;s
                hospitality landscape
              </p>
              <h2 className="sub-text-2 mb-[40px] mt-[74px] text-light">
                CONTACT DETAILS
              </h2>
              <p className="leading-8">
                Antelope Valley, 95234,
                <br />
                Athens, Greece
                <br />
                +28 9739583212
                <br />
                info@villavuebranders.com
                <br />
              </p>
              <h2 className="sub-text-2 mb-[40px] mt-[74px] text-light">
                FOLLOW US
              </h2>

              <a className="mb-2 flex gap-2" href="#" target="_blank">
                <Image
                  src={images.instagram}
                  alt="icon"
                  width={20}
                  height={20}
                />
                instagram.com/villavuebranders
              </a>
              <a className="flex gap-2" href="#" target="_blank">
                <Image
                  src={images.facebook}
                  alt="icon"
                  width={20}
                  height={20}
                />
                facebook.com/villavuebranders
              </a>
            </div>
            <div className="relative float-right mt-[70px] md:mt-0 md:w-[59%]">
              <h2 className="heading line-white left p-0 text-left">
                Enquiry Form
              </h2>
              <p className="sub-text-2 mt-[34px] max-w-[445px] text-light">
                Partner with us in crafting a distinctive mark on Greece&apos;s
                hospitality landscape. Let our creativity be your guide on this
                transformative journey.
              </p>

              <form
                onSubmit={formSubmit}
                className="relative mt-[60px] overflow-hidden"
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="What's your name?"
                  name="name"
                  required
                />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email address?"
                  name="email"
                  required
                />
                <textarea
                  rows={4}
                  className="form-control"
                  placeholder="How can we help?"
                  name="message"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="btn mt-[20px] w-full bg-white py-[20px] text-[18px] font-bold text-black"
                >
                  SEND ENQUIRY
                </button>
              </form>
            </div>
            <div className="clear-both"></div>
          </div>
          <ScrollLink
            to="home"
            className="flex cursor-pointer justify-end font-quat text-sm text-light"
            id="return-to-top"
          >
            BACK TO TOP
          </ScrollLink>
          <h2
            className="wrap mb-[50px] mt-[72px] px-4 text-center font-quat text-5xl md:text-[120px] lg:mt-[150px]  lg:text-[150px] xl:text-[160px]  "
            data-aos="fade-up"
            data-delay="250"
            data-aos-duration="450"
          >
            VillaVue <span className="font-dahlia">Branders</span>
          </h2>

          <div className="flex items-center  justify-center gap-2 text-sm">
            <span className="hoverable">
              © VillaVue<span className="font-dahlia">Branders</span> 2023
              &nbsp;&nbsp; | &nbsp;&nbsp;
            </span>{" "}
            <a className="hoverable" href="privacy/">
              Privacy Policy
            </a>
          </div>
        </Element>
      </section>
    </main>
  );
}
