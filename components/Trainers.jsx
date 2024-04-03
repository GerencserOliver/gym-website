import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const TrainerCard = ({ imageSrc, name, facebook, email, instagram }) => {
    return (
        <div className='bg-[#1F1F1F] rounded-xl p-8 w-80'>
            <img src={imageSrc} alt="Trainer" className='w-32 h-32 rounded-full mx-auto' />
            <h3 className='text-[#DCCA87] font-bold text-2xl mt-4'>{name}</h3>
            <div className='flex justify-center items-center gap-4 mt-4'>
                <a href={facebook} target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={['fab', 'facebook']} className='text-[#DCCA87] text-2xl' />
                </a>
                <a href={`mailto:${email}`} target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={['fas', 'envelope']} className='text-[#DCCA87] text-2xl' />
                </a>
                <a href={instagram} target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={['fab', 'instagram']} className='text-[#DCCA87] text-2xl' />
                </a>
            </div>
        </div>
    );
};

const Trainers = () => {
  return (
    <div>
        <section id='trainers' className='py-20 bg-[#0C0C0C] text-white'>
            <div className='container mx-auto'>
            <h2 className='text-3xl font-bold text-center'>Our Trainers</h2>
            <h1 className='text-5xl font-bold text-center mt-12 text-[#DCCA87]'>Team Of Expert Coaches</h1>
            <p className='text-[#FFFFFF] text-xl mt-10 text-center max-w-lg mx-auto'>Expert team of coaches helps you succeed in any goal, personalized guidance and motivation provided!</p>
            <div className='flex justify-center items-center flex-wrap gap-16 mt-16 text-center'>
                <TrainerCard 
                    imageSrc='/card-1.png' 
                    name='John Doe' 
                    facebook='https://www.facebook.com/johndoe'
                    email='johndoe@example.com'
                    instagram='https://www.instagram.com/johndoe'
                />
                <TrainerCard 
                    imageSrc='/card-1.png' 
                    name='Jane Doe' 
                    facebook='https://www.facebook.com/janedoe'
                    email='janedoe@example.com'
                    instagram='https://www.instagram.com/janedoe'
                />
                <TrainerCard 
                    imageSrc='/card-1.png' 
                    name='John Smith' 
                    facebook='https://www.facebook.com/johnsmith'
                    email='johnsmith@example.com'
                    instagram='https://www.instagram.com/johnsmith'
                />
            </div>
            </div>
        </section>
    </div>
  )
}

export default Trainers;
