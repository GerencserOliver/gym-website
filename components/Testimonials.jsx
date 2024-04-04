import React from 'react';
import Image from 'next/image';
import Logo1 from '../public/testimonials-1.png';
import Logo2 from '../public/testimonials-2.png';
import Logo3 from '../public/testimonials-3.png';
import Logo4 from '../public/testimonials-4.png';
import Logo5 from '../public/testimonials-5.png';

const TestimonialCard = ({ imageUrl, text }) => {
    return (
        <div className='bg-[#1F1F1F] rounded-xl p-8 w-full max-w-xl'>
            <img src={imageUrl} alt="Testimonial" className="mx-auto mb-4" />
            <p className="text-[#FFFFFF] text-xl">{text}</p>
        </div>
    );
}

const Testimonials = () => {
  return (
    <div>
      <section
        className='relative py-20 bg-[#DCCA87] px-8 sm:px-16 md:px-32 lg:px-72 bg-fixed'
        style={{ backgroundImage: 'url(/bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
          <h2 className='text-3xl font-bold text-center text-white'>Testimonials</h2>
          <h1 className='text-5xl font-bold text-center mt-12 text-[#DCCA87]'>What Our Clients Say</h1>
          <p className='text-[#FFFFFF] text-xl mt-10 text-center max-w-lg mx-auto'>Our clients love us, read what they have to say about our services</p>
          <div className='flex justify-center items-center mt-16 text-center'>
            <button className='text-white mr-4'>{'<'}</button>
            <TestimonialCard imageUrl='/card-1.png' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam sit amet nunc, in. ' />
            <button className='text-white ml-4'>{'>'}</button>
          </div>
          <div className='flex gap-10 justify-center mt-32 border-b border-solid border-[#64646438] pb-28 flex-wrap'>
            <Image src={Logo1} alt="Logo" className='transition ease-in-out transform hover:scale-110 duration-300'/>
            <Image src={Logo2} alt="Logo" className='transition ease-in-out transform hover:scale-110 duration-300'/>
            <Image src={Logo3} alt="Logo" className='transition ease-in-out transform hover:scale-110 duration-300'/>
            <Image src={Logo4} alt="Logo" className='transition ease-in-out transform hover:scale-110 duration-300'/>
            <Image src={Logo5} alt="Logo" className='transition ease-in-out transform hover:scale-110 duration-300'/>
          </div>
      </section>
    </div>
  )
}

export default Testimonials;
