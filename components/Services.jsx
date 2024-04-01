import React from 'react';

const ServiceCard = ({ imageUrl, title }) => {
    return (
        <div className='relative bg-gray-400 rounded-2xl shadow-lg cursor-pointer h-72 w-72'>
            <img src={imageUrl} alt={title} className='rounded-2xl object-cover h-full w-full' />
            <div className='absolute inset-0 flex justify-center items-center'>
                <div>
                    <h3 className='text-2xl font-bold text-white'>{title}</h3>
                </div>
            </div>
        </div>
    );
}

const Services = () => {
    return (
        <div>
            <section id='services' className='py-20 bg-[#121212] h-screen'>
                <div className='container mx-auto'>
                    <h2 className='text-6xl font-bold text-center text-white'>We offer something for everybody</h2>
                    <div className='flex justify-center items-center flex-wrap gap-8 mt-16 text-center'>
                        <ServiceCard imageUrl="/card-1.png" title="Personal Training" />
                        <ServiceCard imageUrl="/card-1.png" title="Yoga Classes" />
                        <ServiceCard imageUrl="/card-1.png" title="Nutrition Consultation" />
                        <ServiceCard imageUrl="/card-1.png" title="Group Workouts" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
