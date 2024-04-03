import React from 'react';

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
      <section className='py-20 bg-[#0C0C0C] text-white'>
          <h2 className='text-3xl font-bold text-center'>Testimonials</h2>
          <h1 className='text-5xl font-bold text-center mt-12 text-[#DCCA87]'>What Our Clients Say</h1>
          <p className='text-[#FFFFFF] text-xl mt-10 text-center max-w-lg mx-auto'>Our clients love us, read what they have to say about our services</p>
          <div className='flex justify-center items-center mt-16 text-center'>
            <button className='text-white mr-4'>{'<'}</button>
            <TestimonialCard imageUrl='/card-1.png' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam sit amet nunc, in. ' />
            <button className='text-white ml-4'>{'>'}</button>
          </div>
      </section>
    </div>
  )
}

export default Testimonials;
