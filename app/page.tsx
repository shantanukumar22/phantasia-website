import About from "@/components/About";
import BoardingPass from "@/components/Boardingpass";
import PhantasiaFooter from "@/components/Footer";
import Hero from "@/components/Hero";
import SponsorsComponent from "@/components/Sponsors";
import Timeline from "@/components/Timeline";
import TracksComponent from "@/components/Tracks";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <TracksComponent />
      <Timeline />
      <SponsorsComponent />
      <About />
      <BoardingPass />
      <PhantasiaFooter />
    </div>
  );
}
