import ChooseUs from "@/components/ChooseUs";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden font-poppins">
      <Navbar />
      <Hero />
      <Services />
      <ChooseUs />
    </main>
  );
}
