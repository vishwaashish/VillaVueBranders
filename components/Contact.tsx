import { images } from "@/constant";
import Image from "next/image";
import { Element } from "react-scroll";
import { ScrollLink } from "./Shared";

const Contact = () => {
  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    window.open(`mailto:${email}?subject=${name}&body=${message}`);
  };
  return (
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
              <span className="cursor-hover">Contact Us</span>
            </h2>
            <p className="sub-text-2 mt-[34px] max-w-[445px] text-light">
              Partner with us on this creative journey, and together, let&apos;s
              leave an unforgettable mark on Greece&apos;s hospitality landscape
            </p>
            <h2 className="cursor-hover sub-text-2 mb-[40px] mt-[74px] text-light">
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
            <h2 className="cursor-hover sub-text-2 mb-[40px] mt-[74px] text-light">
              FOLLOW US
            </h2>

            <a className="mb-2 flex gap-3" href="#" target="_blank">
              <Image
                src={images.instagram}
                width={20}
                height={20}
                alt="Instagram Logo"
                style={{ width: 20, height: 20 }}
              />
              instagram.com/villavuebranders
            </a>
            <a className="flex gap-3" href="#" target="_blank">
              <Image
                src={images.facebook}
                width={20}
                height={20}
                alt="Facebook Logo"
                style={{ width: 20, height: 20 }}
              />
              facebook.com/villavuebranders
            </a>
          </div>
          <div className="relative float-right mt-[70px] md:mt-0 md:w-[59%]">
            <h2 className="heading line-white left p-0 text-left">
              <span className=" cursor-hover">Enquiry Form</span>
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
                className="btn mt-[20px] w-full bg-white py-[20px] text-[18px] font-bold text-black hover:bg-white"
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
          className="wrap cursor-hover  mb-[50px] mt-[72px] px-4 text-center font-quat text-5xl md:text-[120px] lg:mt-[150px]  lg:text-[150px] xl:text-[160px]  "
          data-aos="fade-up"
          data-delay="250"
          data-aos-duration="450"
        >
          <ScrollLink to="home">
            VillaVue <span className="font-dahlia">Branders</span>
          </ScrollLink>
        </h2>

        <div className="flex items-center  justify-center gap-2 text-sm">
          <ScrollLink to="home" className="hoverable">
            © VillaVue<span className="font-dahlia">Branders</span> 2023
            &nbsp;&nbsp; | &nbsp;&nbsp;
          </ScrollLink>{" "}
          <a className="hoverable" href="privacy/">
            Privacy Policy
          </a>
        </div>
      </Element>
    </section>
  );
};

export default Contact;
