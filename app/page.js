import ChooseUs from "@/components/ChooseUs";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Trainers from "@/components/Trainers";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faT } from '@fortawesome/free-solid-svg-icons'; // Import solid icons
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import brand icons
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the styles (if you haven't already)
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Prices from "@/components/Prices";
import Footer from "@/components/Footer";
import Message from "@/components/Message";
import About from "@/components/About";

// Add the imported icons to the library
library.add(faEnvelope, faFacebook, faInstagram, faTimes);

export default function Home() {
  return (
    <main className="overflow-hidden font-poppins">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ChooseUs />
      <Trainers />
      <Testimonials />
      <Gallery />
      <Prices />
      <Message />
      <Footer />
    </main>
  );
}
