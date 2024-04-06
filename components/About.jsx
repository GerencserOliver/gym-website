import React from 'react';

const About = () => {
  return (
    <div>
      <section
        className='relative py-10 sm:py-20 bg-[#DCCA87] px-4 sm:px-8 md:px-16 lg:px-32 bg-fixed'
        style={{ backgroundImage: 'url(/bg.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}
      >
        <h1 className='text-3xl sm:text-5xl font-bold text-center mt-8 sm:mt-12 text-[#DCCA87]'>Who we are</h1>
        <h2 className='text-[#FFFFFF] text-lg sm:text-3xl font-bold mt-6 sm:mt-10 text-center max-w-screen-xl mx-auto'>Sporting partners address each other informally, regardless of age, so we address you in the same way.</h2>
        <p className='text-white text-base sm:text-xl mt-6 sm:mt-8 text-center max-w-screen-md mx-auto'>We established our gym in 2002 in Riverside.</p>
        <p className='text-white text-base sm:text-xl mt-4 sm:mt-6 text-center max-w-screen-md mx-auto'>In 2015, we moved to our present location, conveniently situated near downtown Springfield, in a spacious facility flooded with natural light, formerly a warehouse.</p>
        <p className='text-white text-base sm:text-xl mt-4 sm:mt-6 text-center max-w-screen-md mx-auto'>Nestled at the corner of Elm Street, close to the train station and the interstate bus terminal, our new gym quickly gained popularity among all.</p>
        <div className='mt-8 sm:mt-12 flex flex-wrap justify-center'>
          <div className='p-6 sm:p-12'>
            <h1 className='text-white text-center text-3xl sm:text-5xl font-bold'>22 years</h1>
            <h3 className='text-[#DCCA87] text-center text-lg sm:text-2xl font-bold mt-2 sm:mt-4'>Of experience</h3>
          </div>
          <div className='p-6 sm:p-12'>
            <h1 className='text-white text-center text-3xl sm:text-5xl font-bold'>1500 m<sup>2</sup></h1>
            <h3 className='text-[#DCCA87] text-center text-lg sm:text-2xl font-bold mt-2 sm:mt-4'>Of space</h3>
          </div>
          <div className='p-6 sm:p-12'>
            <h1 className='text-white text-center text-3xl sm:text-5xl font-bold'>150</h1>
            <h3 className='text-[#DCCA87] text-center text-lg sm:text-2xl font-bold mt-2 sm:mt-4'>Of Machines</h3>
          </div>
          <div className='p-6 sm:p-12'>
            <h1 className='text-white text-center text-3xl sm:text-5xl font-bold'>4</h1>
            <h3 className='text-[#DCCA87] text-center text-lg sm:text-2xl font-bold mt-2 sm:mt-4'>Function space</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
