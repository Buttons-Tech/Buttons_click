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

export default function Home() {
  return (
   <>
   
   <Nav />
   <Hero />
   <Ourservice />
   <AboutButton />
   <Whychoosebutton />
   <HowItWorks />
   <FAQ />
   <Team />
   </>
  );
}
