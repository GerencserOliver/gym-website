import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Message from '@/components/Message';

const About = () => {
  return (
    <div>
      <div className="login-banner relative justify-center flex">
        <h1 className="text-white absolute bottom-10 text-5xl font-bold">
          About
        </h1>
      </div>
      <div className="container max-w-screen-xl mx-auto my-10 mb-24 p-12">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='mt-24'>
            <h1 className="text-5xl text-[#DCCA87] font-bold">
              Who We Are
            </h1>
            <h2 className='text-3xl text-white mt-6 font-bold'>
              We Will Give You Strength and Health
            </h2>
            <p className="text-lg text-white mt-8">
              At Our gym, we are dedicated to helping you achieve the body
              of your dreams. Our expert trainers and nutritionists will
              work with you to create a personalized fitness and nutrition
              plan that helps you reach your specific goals.
            </p>
            <button className="mt-8 px-8 py-3 text-lg font-semibold text-white bg-[#DCCA87] rounded-lg hover:bg-[#cfc292] transition-all">Contact us</button>
          </div>
          <div className='flex justify-center md:justify-end'>
            <img className="max-w-full" src="/about-img.png" alt="About us" />
          </div>
        </div>
      </div>
      <Message />
      <Navbar />
      <Footer />
    </div>
  );
};

export default About;
