import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  return (
    <div>
      <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-10 text-5xl font-bold">
            Gallery
          </h1>
      </div>
      <Navbar />
      <Gallery />
      <Footer />
    </div>
  );
}