"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Testimonial1 from '../public/card-1.png';
import Testimonial2 from '../public/card-2.png';
import Testimonial3 from '../public/card-3.png';
import Testimonial4 from '../public/card-4.png';
import Testimonial5 from '../public/card-5.png';
import Logo1 from '../public/testimonials-1.png';
import Logo2 from '../public/testimonials-2.png';
import Logo3 from '../public/testimonials-3.png';
import Logo4 from '../public/testimonials-4.png';
import Logo5 from '../public/testimonials-5.png';

const TestimonialCard = ({ imageUrl, text }) => {
  return (
      <div className='bg-[#1F1F1F] rounded-xl p-8 w-full max-w-xl'>
          <div className="relative" style={{ height: '300px' }}>
              <Image src={imageUrl} alt="Testimonial" className="mx-auto mb-4 object-cover" layout="fill" />
          </div>
          <p className="text-[#FFFFFF] text-xl mt-4">{text}</p>
      </div>
  );
}


const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div>
      <section
        className='relative py-20 bg-[#DCCA87] px-8 sm:px-16 md:px-32 lg:px-72 bg-fixed'
        style={{ backgroundImage: 'url(/bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
          <h2 className='text-3xl font-bold text-center text-white'>Testimonials</h2>
          <h1 className='text-5xl font-bold text-center mt-12 text-[#DCCA87]'>What Our Clients Say</h1>
          <p className='text-[#FFFFFF] text-xl mt-10 text-center max-w-lg mx-auto'>Our clients love us, read what they have to say about our services</p>
          <Slider {...settings} className="mt-16 text-center ">
            <TestimonialCard imageUrl={Testimonial1} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam sit amet nunc, in. ' />
            <TestimonialCard imageUrl={Testimonial2} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam sit amet nunc, in. ' />
            <TestimonialCard imageUrl={Testimonial3} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam sit amet nunc, in. ' />
            <TestimonialCard imageUrl={Testimonial4} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam sit amet nunc, in. ' />
            <TestimonialCard imageUrl={Testimonial5} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam sit amet nunc, in. ' />
          </Slider>
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
