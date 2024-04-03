import React from 'react';
import NavLink from './NavLink';

const ServiceItem = ({ imageSrc, title }) => {
  return (
    <div className='flex flex-col items-center'>
      <img src={imageSrc} alt="" className="w-20 h-auto" />
      <h3 className='text-[#DCCA87] font-bold text-2xl mt-4'>{title}</h3>
    </div>
  );
};

const ChooseUs = () => {
  return (
    <div>
      <section
        id='services'
        className='relative py-20 bg-[#DCCA87] px-8 sm:px-16 md:px-32 lg:px-72 bg-fixed'
        style={{ backgroundImage: 'url(/bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
          <div className='flex justify-center items-center'>
            <img src='/card-1.png' alt='Your Image' className='rounded-2xl sm:max-w-none' />
          </div>
          <div>
            <div>
              <h1 className='text-[#DCCA87] font-bold text-4xl text-center'>We Can Give A Shape Of Your Body Here!</h1>
              <p className='text-[#FFFFFF] text-1xl mt-10 text-center'>At Our Gym, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.</p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-2 gap-8 mt-16 text-center'>
              <ServiceItem imageSrc="/us-1.png" title="Free Fitness Training" />
              <ServiceItem imageSrc="/us-1.png" title="Free Fitness Training" />
              <ServiceItem imageSrc="/us-1.png" title="Free Fitness Training" />
              <ServiceItem imageSrc="/us-1.png" title="Free Fitness Training" />
            </div>
            <div className='hidden md:block md:w-auto pt-12 px-6' id='navbar'>
              <button className='mt-8 px-8 py-3 text-lg font-semibold text-white bg-[#DCCA87] rounded-lg hover:bg-[#cfc292] transition-all'>
                <NavLink href='/login' title='Our Classes ->' />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChooseUs;