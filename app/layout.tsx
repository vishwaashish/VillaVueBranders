import { AOSInit } from "@/components/Shared";
import { cn } from "@/components/utils";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Manrope, Quattrocento } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { images } from "@/constant";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const quattrocento = Quattrocento({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-quattrocento",
});
const manrope = Manrope({
  weight: "400",
  variable: "--font-manrope",
  subsets: ["latin"],
});
const dahlia = localFont({
  src: "../assets/font/dahlia-regular.otf",
  variable: "--font-dahlia",
});

export const metadata: Metadata = {
  manifest: "manifest.ts",
  title: "VillaVue Branders",
  description:
    "Transform Your Hotel Or Villa Into A Distinctive Brand That Captures Hearts And Minds",
  openGraph: {
    title: "VillaVue Branders",
    description:
      "Transform Your Hotel Or Villa Into A Distinctive Brand That Captures Hearts And Minds",
    images: images.heroBack.src,
  },
  themeColor: "#fff",
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      sizes: "any",
      url: "favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "favicon-32x32.png",
    },

    {
      type: "image/png",
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "apple-touch-icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AOSInit />
      <body
        data-aos-easing="linear"
        data-aos-duration="400"
        data-aos-delay="0"
        className={cn(
          manrope.className,
          quattrocento.variable,
          dahlia.variable,
          "bg-black text-[#212529]",
        )}
      >
        <span className="hidden">
          <AnimatedCursor
          
            innerSize={10}
            outerSize={20}
            innerScale={1}
            outerAlpha={5}
            innerStyle={{
              backgroundColor: "rgb(255,255,255)",
              mixBlendMode: "exclusion",
            }}
            outerStyle={{
              mixBlendMode: "exclusion",
              backgroundColor: "rgb(255,255,255)",
            }}
            clickables={["a", "p", "button", ".cursor-hover"]}
          />
        </span>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
