"use client";
import Link from "next/link";
import { useState } from "react";
import { cn } from "..";

const navigationLink = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Works",
    href: "#works",
  },
  {
    label: "Process",
    href: "#process",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [currentLink, setLink] = useState<string>("Home");

  function handleClick(link: string) {
    setLink(link);
  }
  return (
    <>
      <header className="fixed inset-x-0 z-50">
        <div className="flex  justify-center px-[21px] sm:pt-[21px] sm:justify-between">
          <div className="grow p-2 text-center font-quat text-3xl text-white sm:text-left   xl:w-[20%]">
            Well.<span className="font-dahlia">Designed</span>
          </div>
          <div className="hidden justify-center sm:flex xl:w-[60%]">
            <Nav currentLink={currentLink} handleClick={handleClick} />
          </div>
          <div className="hidden w-[20%] justify-end xl:flex ">
            <button className="flex h-full items-center rounded-2xl bg-dark px-4 py-2 text-sm text-white ">
              <span className="mr-3 text-xl">🛎️</span>
              <span className="m-auto"> Enquiry</span>
            </button>
          </div>
        </div>
      </header>
      <div className="fixed inset-x-4 bottom-4 z-50 flex justify-center sm:hidden ">
        <Nav currentLink={currentLink} handleClick={handleClick} />
      </div>
    </>
  );
};

function Nav({ currentLink, handleClick }: any) {
  return (
    <nav className=" flex gap-1 rounded-2xl  bg-dark px-[9px] py-[8px]  ">
      {navigationLink.map((link) => (
        <button
          key={link.label}
          className={cn(
            " btn btn-transparent",
            currentLink === link.label ? "bg-darker" : "",
          )}
          onClick={() => handleClick(link.label)}
        >
          {link.label}
        </button>
      ))}
    </nav>
  );
}
export default Navbar;
