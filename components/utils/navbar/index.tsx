"use client";

import { ScrollLink } from "@/components/shared/aos";

const navigationLink = [
  {
    label: "Home",
    href: "home",
    offset: 0,
  },
  {
    label: "About",
    href: "about",
    offset: 0,
  },
  {
    label: "Works",
    href: "works",
    offset: -100,
  },
  {
    label: "Process",
    href: "process",
    offset: 0,
  },
  {
    label: "Contact",
    href: "contact",
    offset: -100,
  },
];

const Navbar = () => {
  return (
    <>
      <header className="fixed inset-x-0 z-50    ">
        <div className="flex  justify-center px-[21px] sm:justify-between sm:pt-[21px]">
          <div className="grow p-2 text-center font-quat text-3xl text-white sm:text-left   xl:w-[20%]">
            VillaVue
            <span className="font-dahlia">Branders</span>
          </div>
          <div className="hidden justify-center sm:flex xl:w-[60%]">
            <Nav />
          </div>
          <div className="hidden w-[20%] justify-end xl:flex ">
            <ScrollLink
              to="contact"
              className="flex h-full cursor-pointer items-center rounded-2xl bg-dark px-4 py-2 text-sm text-white "
            >
              <span className="mr-3 text-xl">🛎️</span>
              <span className="m-auto"> Enquiry</span>
            </ScrollLink>
          </div>
        </div>
      </header>
      <div className="fixed inset-x-4 bottom-4 z-50 flex justify-center sm:hidden ">
        <Nav />
      </div>
    </>
  );
};

function Nav() {
  return (
    <nav className=" flex gap-1 rounded-2xl  bg-dark px-[6px] py-[8px]  ">
      {navigationLink.map((link) => (
        <ScrollLink
          key={link.label}
          to={link.href}
          className={"btn btn-transparent cursor-pointer"}
          activeClass="bg-darker"
          offset={link.offset}
        >
          {link.label}
        </ScrollLink>
      ))}
    </nav>
  );
}
export default Navbar;
