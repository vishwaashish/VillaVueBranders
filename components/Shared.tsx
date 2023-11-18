"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { FC, useEffect } from "react";
import { Link } from "react-scroll";

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quad",
      duration: 1000,
    });
  }, []);

  return null;
};

interface ScrollLinkProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to: string;
  children?: any;
  className?: string;
  offset?: number;
  duration?: number;
  activeClass?: string;
}
export const ScrollLink: FC<ScrollLinkProps> = ({
  to,
  className = "",
  activeClass = "",
  children,
  offset,
  duration = 500,
}) => {
  return (
    <Link
      hashSpy={true}
      to={to}
      className={className}
      activeClass={activeClass}
      spy={true}
      smooth={true}
      duration={duration}
      offset={offset}
      href={to}
    >
      {children}
    </Link>
  );
};
