"use client";
import Image from "next/image";
import Nav from "./components/nav";
import Button from "./components/button";
import Hero from "./components/hero";
import Ourservice from "./components/service";
import AboutButton from "./components/AboutButton";
import Whychoosebutton from "./components/Whychoosebutton";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Team from "./components/Team";
import LandingPage from "./components/LandingPage/LandingPage";

export default function Home() {
  return (
   <div className=" overflow-hidden position relative">
   
   {/* <Nav />
   <Hero />
   <Ourservice />
   <AboutButton />
   <Whychoosebutton />
   <HowItWorks />
   <FAQ />
   <Team /> */}
  <LandingPage />
   </div>
  );
}
