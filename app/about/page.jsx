import Navbar from '@/components/Navbar';
import AboutComp from '@/components/AboutComp';
import React from 'react';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div>
      <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-10 text-5xl font-bold">
            About
          </h1>
      </div>
      <Navbar />
      <AboutComp />
      <div className='items-center flex justify-center'>
        <button className='mt-8 px-8 py-3 text-lg font-semibold text-white bg-[#DCCA87] rounded-lg hover:bg-[#cfc292] transition-all'>{"Contact us ->"}</button>
      </div>
      <Footer />
    </div>
  );
};

export default About;
