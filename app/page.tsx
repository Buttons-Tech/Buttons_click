import Image from "next/image";
import Nav from "./components/nav";
import Button from "./components/button";
import Hero from "./components/hero";
import Ourservice from "./components/service";

export default function Home() {
  return (
   <>
   
   <Nav />
   <Hero />
   <Ourservice />
   </>
  );
}
