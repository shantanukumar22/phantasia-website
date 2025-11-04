import About from "@/components/About";
import BoardingPass from "@/components/Boardingpass";
import PhantasiaFooter from "@/components/Footer";
import SponsorsComponent from "@/components/Sponsors";
import TracksComponent from "@/components/Tracks";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <div className=" flex items-center justify-center bg-blue-800 min-h-screen">
        <h1 className="text-4xl">Hero Section</h1>
      </div>
      <TracksComponent />
      <SponsorsComponent />
      <About />
      <BoardingPass />
      <PhantasiaFooter />
    </div>
  );
}
