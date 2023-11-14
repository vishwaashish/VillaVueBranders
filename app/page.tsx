import Accordians from "@/components/shared/accordian";
import { accordians, conceptStudies, images, services } from "@/constant";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-white">
      <section
        className="heroSection relative grid h-screen  place-content-center bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: `url(${images.heroBack.src})`,
        }}
      >
        <div className="mt-30 z-10 text-center text-white">
          <h1 className="font-quat text-[48px] leading-[58px] sm:mt-20  lg:text-[82px] lg:leading-[92px]">
            elevate your <span className="font-dahlia">hoteling</span>
          </h1>
          <h3 className="mt-[20px] max-w-[700px] text-[24px]">
            TRANSFORM YOUR HOTEL OR VILLA INTO A DISTINCTIVE BRAND THAT CAPTURES
            HEARTS AND MINDS
          </h3>
          <button className="btn mt-[20px] w-[180px] py-[16px]  text-sm">
            Send Enquiry
          </button>
        </div>
      </section>

      <section className="m-auto w-full max-w-[1249px] py-[92px]">
        <h2 className="heading mb-[55px] text-center font-quat">
          Hotels Well Designed
        </h2>
        <div className="relative grid w-full grid-cols-2 px-7 lg:grid-cols-5">
          {images.logos.map((logo, index) => (
            <div
              key={index}
              className="section2-logo grid place-content-center  py-[12px] md:py-[20px] "
            >
              <Image width={200} height={200} src={logo.src} alt={logo}></Image>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl">
        <h2 className="heading mb-[55px] ">About Us</h2>

        <p className=" mb-[95px] p-2 text-center font-quat text-[24px] leading-7 text-white lg:text-[32px] lg:leading-10">
          Welcome to iframe hospitality, your premier destination for
          exceptional branding and web design tailored specifically for hotels
          and villas in the captivating landscapes of Greece.
        </p>
      </section>

      <section className="container">
        <div
          className=" rounded-2xl bg-repeat-x  px-2 py-20"
          style={{
            backgroundImage: `url(${images.gradientBack.src})`,
          }}
        >
          <h2 className="heading line-white mb-[55px] ">Our Services</h2>

          <p className="m-auto mb-[55px] max-w-2xl text-center text-lighter">
            A comprehensive brand identity for hotels encompasses various
            elements that work together to create a consistent and memorable
            representation of the property. Here are the key components
            typically included in a branding identity package for hotels
          </p>

          <div className="m-auto grid max-w-xl grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-3">
            {services.map((service) => (
              <button
                className=" rounded-lg border-[1px] border-darker p-2 px-1 py-4 text-white hover:border-white"
                key={service}
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 text-center ">
        <p className="m-auto max-w-xl text-center text-[24px] leading-8 lg:text-[32px]">
          Are you ready for a new <br /> Hotel Concept for your property?
        </p>

        <button className="btn my-[30px] w-full max-w-[320px] bg-white py-[20px] text-[14px] font-bold text-black">
          Send Enquiry
        </button>
      </section>

      <section className="container my-[100px]  text-center">
        <h2 className="heading mb-[55px]">Hotel Concept Studies</h2>

        <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-3">
          {conceptStudies.map((item) => (
            <div key={item.title} className=" text-left">
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

      <section className="container py-[100px]">
        <h2 className="heading mb-[55px]">The Process</h2>
        <Accordians />
      </section>

      <section className="container max-w-[1480px] px-2 pb-[50px] pt-[90px] lg:pb-[90px]">
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
              Let us be your creative partners on this journey, helping you
              create an indelible mark on Greece&apos;s hospitality landscape.
            </p>
            <h2 className="sub-text-2 mb-[40px] mt-[74px] text-light">
              CONTACT DETAILS
            </h2>
            <p className="leading-8">
              Kristalli 3, 45444,
              <br />
              Ioannina, Greece
              <br />
              +30 2651065744
              <br />
              info@welldesigned.gr
              <br />
            </p>
            <h2 className="sub-text-2 mb-[40px] mt-[74px] text-light">
              FOLLOW US
            </h2>

            <a className="flex gap-2" href="#" target="_blank">
              <Image src={images.instagram} alt="icon" width={20} height={20} />
              instagram.com/welldesigned__
            </a>
            <a className="flex gap-2" href="#" target="_blank">
              <Image src={images.facebook} alt="icon" width={20} height={20} />
              facebook.com/welldesigned.gr
            </a>
          </div>
          <div className="relative float-right mt-[70px] md:mt-0 md:w-[59%]">
            <h2 className="heading line-white left p-0 text-left">
              Enquiry Form
            </h2>
            <p className="sub-text-2 mt-[34px] max-w-[445px] text-light">
              Let us be your creative partners on this journey, helping you
              create an indelible mark on Greece&apos;s hospitality landscape.
            </p>

            <div className="relative mt-[60px] overflow-hidden">
              <input
                type="text"
                className="form-control"
                placeholder="What's your name?"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Your email address?"
              />
              <textarea
                rows={4}
                className="form-control"
                placeholder="How can we help?"
              ></textarea>

              <button className="btn mt-[20px] w-full bg-white py-[20px] text-[18px] font-bold text-black">
                SEND ENQUIRY
              </button>
            </div>
          </div>
          <div className="clear-both"></div>
        </div>
        <a
          href="#"
          className="flex justify-end font-quat text-sm text-light"
          id="return-to-top"
        >
          BACK TO TOP
        </a>
        <h2 className="mb-[50px] mt-[72px] px-4 text-center font-quat text-5xl md:text-[120px] lg:mt-[150px]  lg:text-[150px] xl:text-[220px]  ">
          Well.<span className="font-dahlia">Designed</span>
        </h2>

        <div className="flex items-center  justify-between gap-2 text-sm">
          <div id="copy1">
            <span className="hoverable">
              © Well.Designed 2023 &nbsp;&nbsp; | &nbsp;&nbsp;
            </span>{" "}
            <a className="hoverable" href="privacy/">
              Privacy Policy
            </a>
          </div>
          <div id="copy2" className="flex flex-wrap gap-2 ">
            <span>POWERED BY</span>
            <a className="hoverable" href="#" target="_blank">
              <Image
                width={60}
                height={20}
                src={images.iframe.src}
                alt="icon"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
