import React from 'react';

const ServiceCard = ({ imageUrl, title }) => {
    return (
        <div className='relative rounded-2xl shadow-lg cursor-pointer w-96 sm:w-72 grayscale hover:grayscale-0 transition ease-in-out'>
            <img src={imageUrl} alt={title} className='rounded-2xl object-cover h-48 sm:h-72 w-80 mx-auto' />
            <div className='absolute inset-0 flex justify-center items-center'>
                <div>
                    <h3 className='text-2xl font-bold text-white mx-12'>{title}</h3>
                </div>
            </div>
        </div>
    );
}

const Services = () => {
    return (
        <div>
            <section id='services' className='py-20 bg-[#0C0C0C]'>
                <div className='container mx-auto'>
                    <h2 className='text-6xl font-bold text-center text-white'>We offer something for everybody</h2>
                    <div className='flex justify-center items-center flex-wrap gap-8 mt-16 text-center'>
                        <ServiceCard imageUrl="/Services/personal-training.png" title="Personal Training"/>
                        <ServiceCard imageUrl="/Services/yoga.png" title="Yoga Classes" />
                        <ServiceCard imageUrl="/Services/nutrition.png" title="Nutrition Consultation" />
                        <ServiceCard imageUrl="/Services/group-workout.png" title="Group Workouts" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
