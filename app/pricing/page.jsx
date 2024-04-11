import Footer from "@/components/Footer";
import Message from "@/components/Message";
import Navbar from "@/components/Navbar";
import Prices from "@/components/Prices";
import React from "react";

const Pricing = () => {
  return (
    <div>
      <div className="login-banner relative justify-center flex">
        <h1 className="text-white absolute bottom-10 text-5xl font-bold">
          Pricing
        </h1>
      </div>
      <Navbar />

      <Prices />
      <Message />
      <Footer />
    </div>
  );
};

export default Pricing;
