"use client";
import { accordians } from "@/constant";
import { useState } from "react";
import { Element } from "react-scroll";
import { cn } from "./utils";
const Process = () => {
  const [state, setState] = useState("");
  const onClick = (title: string) => {
    setState((val) => {
      if (val === title) {
        return "";
      }
      return title;
    });
  };
  return (
    <Element name="process">
      <section className="container py-[100px]">
        <h2
          className="heading mb-[55px]"
          data-aos="fade-up"
          data-delay="250"
          data-aos-duration="450"
        >
          <span className="cursor-hover">

          The Process
          </span>
        </h2>
        <div className="accordion">
          {accordians.map((accor) => (
            <div
              key={accor.title}
              className="accordion-item"
              data-aos="fade-up"
              data-delay="250"
              data-aos-duration="450"
            >
              <h2
                className={cn(
                  "accordion-header cursor-pointer border-b-[1px] border-darker py-[20px] pr-[35px] font-quat text-[24px] md:text-[32px]",
                  state === accor.title && "show",
                )}
                id="headingOne"
                onClick={() => onClick(accor.title)}
              >
                <button className="accordion-button  text-left" type="button">
                  {accor.title}
                </button>
              </h2>
              <div
                className={cn(
                  "accordion-collapse ",
                  state === accor.title && "show py-[30px]",
                )}
              >
                <div className="accordion-body text-[20px] text-light">
                  {accor.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Process;
