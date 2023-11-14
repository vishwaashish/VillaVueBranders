"use client";
import { cn } from "@/components/utils";
import { accordians } from "@/constant";
import { useState } from "react";

function Accordians() {
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
    <div className="accordion">
      {accordians.map((accor) => (
        <div key={accor.title} className="accordion-item">
          <h2
            className="accordion-header cursor-pointer border-b-[1px] border-darker py-[20px] pr-[60px] font-quat text-[24px] md:text-[32px]"
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
  );
}

export default Accordians;
