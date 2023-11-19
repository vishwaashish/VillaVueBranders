import { conceptStudies, images } from "@/constant";
import Image from "next/image";
import { Element } from "react-scroll";

const Works = () => (
  <Element name="works">
    <Element name="works">
      <section className="container my-[100px]  text-center">
        <h2
          className="heading mb-[55px]"
          data-aos="fade-up"
          data-delay="250"
          data-aos-duration="450"
        >
          <span className="cursor-hover">Hotel Concept Studies</span>
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
              <div className="cursor-hover  group relative z-0 block aspect-[16/12] overflow-hidden">
                <Image
                  alt={item.title + " back"}
                  src={item.backSrc}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="h-full w-full  transition-transform duration-500 ease-in-out group-hover:scale-125"
                ></Image>

                <Image
                  alt={item.title + " gradient"}
                  src={images.gradientBlack.src}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="absolute bottom-0 h-auto w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-125"
                ></Image>

                <Image
                  alt={item.title + " logo"}
                  src={item.src}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="absolute inset-0  m-auto max-w-[250px] transition-transform duration-500 ease-in-out group-hover:scale-125"
                ></Image>
              </div>
              <h1 className="cursor-hover  relative z-10 mb-[25px] font-quat text-[24px]">
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
  </Element>
);

export default Works;
