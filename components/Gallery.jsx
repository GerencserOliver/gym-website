"use client";
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Galery = () => {
    const [showImg, setShowImg] = useState(false);
    const [selectImg, setSelectImg] = useState('');

    const openImg = (imageSrc) => {
        setShowImg(true);
        setSelectImg(imageSrc);
    };

    const closeImg = () => {
        setShowImg(false);
        setSelectImg('');
    };

    return (
        <div>
            <section className='relative py-20 px-8 sm:px-16 md:px-32 lg:px-72 bg-[#0C0C0C]'>
                <h2 className='text-3xl font-bold text-center text-white'>Our Gallery</h2>
                <h1 className='text-5xl font-bold text-center mt-12 text-[#DCCA87]'>Our Gym In Pictures</h1>
                <p className='text-[#FFFFFF] text-xl mt-10 text-center max-w-lg mx-auto'>Take a look at our gym, our equipment, and our clients working out</p>
                <div className='flex justify-center items-center mt-16 text-center'>
                </div>
                <div className='flex flex-wrap justify-center mt-12 border-b border-solid border-[#64646438] pb-28'>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                        <img src="/Gallery/gym-img-1.png" alt="gallery" className='cursor-pointer w-full grayscale duration-300 hover:grayscale-0' onClick={() => openImg('/Gallery/gym-img-1.png')} />
                        <img src="/Gallery/gym-img-2.png" alt="gallery" className='cursor-pointer w-full grayscale duration-300 hover:grayscale-0' onClick={() => openImg('/Gallery/gym-img-2.png')} />
                        <img src="/Gallery/gym-img-3.png" alt="gallery" className='cursor-pointer w-full grayscale duration-300 hover:grayscale-0' onClick={() => openImg('/Gallery/gym-img-3.png')} />
                        <img src="/Gallery/gym-img-4.png" alt="gallery" className='cursor-pointer w-full grayscale duration-300 hover:grayscale-0' onClick={() => openImg('/Gallery/gym-img-4.png')} />
                        <img src="/Gallery/gym-img-5.png" alt="gallery" className='cursor-pointer w-full grayscale duration-300 hover:grayscale-0' onClick={() => openImg('/Gallery/gym-img-5.png')} />
                        <img src="/Gallery/gym-img-6.png" alt="gallery" className='cursor-pointer w-full grayscale duration-300 hover:grayscale-0' onClick={() => openImg('/Gallery/gym-img-6.png')} />
                    </div>
                </div>
            </section>

            {showImg && (
                <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50'>
                    <div className='rounded-lg'>
                        <img src={selectImg} alt='Selected Image' />
                        <button onClick={closeImg} className='absolute top-5 right-5 text-white bg-black p-2 rounded-lg'>
                            <FontAwesomeIcon icon={faTimes} className='text-2xl' />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Galery;
