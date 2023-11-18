"use client";
import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import dynamic from "next/dynamic";
const Process = dynamic(() => import("@/components/Process"));
const Works = dynamic(() => import("@/components/Works"));
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });

export default function Home() {
  return (
    <main className="text-white">
      <HeroSection />
      <AboutUs />
      <Works />
      <Process />
      <Contact />
    </main>
  );
}
