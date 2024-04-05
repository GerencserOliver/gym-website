import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <footer className='bg-[#0C0C0C] text-white py-12 md:px-0 px-4'>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='md:order-1'>
                            <div className='flex justify-center items-center'>
                                <Image src='/logo.png' alt='Logo' width={150} height={50}/>
                            </div>
                            <p className='mt-4 max-w-sm md:max-w-full text-center'>Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</p>
                            <div className='gap-4 mt-4 flex justify-center items-center'>
                                <a href='#'>
                                    <FontAwesomeIcon icon={['fab', 'facebook']} className='text-[#DCCA87] text-2xl bg-black p-2 rounded-full transition duration-300 hover:bg-[#DCCA87] hover:text-black' />
                                </a>
                                <a href='#'>
                                    <FontAwesomeIcon icon={['fab', 'instagram']} className='text-[#DCCA87] text-2xl bg-black p-2 rounded-full transition duration-300 hover:bg-[#DCCA87] hover:text-black' />
                                </a>
                                <a href='#'>
                                    <FontAwesomeIcon icon={['fas', 'envelope']} className='text-[#DCCA87] text-2xl bg-black p-2 rounded-full transition duration-300 hover:bg-[#DCCA87] hover:text-black' />
                                </a>
                            </div>
                            <div>
                                <p className='mt-4 text-center'>Privacy Policy | © {currentYear} Gym</p>
                            </div>
                        </div>
                        <div className='md:order-2 text-center'>
                            <h3 className='text-xl font-bold'>Quick Links</h3>
                            <ul className='mt-5'>
                                <li className='mb-3'><a href='#' className='text-[#DCCA87] hover:text-white duration-100'>Home</a></li>
                                <li className='mb-3'><a href='#' className='text-[#DCCA87] hover:text-white duration-100'>About</a></li>
                                <li className='mb-3'><a href='#' className='text-[#DCCA87] hover:text-white duration-100'>Services</a></li>
                                <li className='mb-3'><a href='#' className='text-[#DCCA87] hover:text-white duration-100'>Contact</a></li>
                                <li className='mb-3'><a href='#' className='text-[#DCCA87] hover:text-white duration-100'>Contact</a></li>
                            </ul>
                        </div>
                        <div className='md:order-3 text-center'>
                            <h3 className='mb-5 text-xl font-bold'>Working Hours</h3>
                            <div>
                                <h3 className='mb-3 font-bold text-[#DCCA87]'>Monday - Friday:</h3>
                                <p className='mb-3'>7:00am - 21:00pm</p>
                                <h3 className='mb-3 font-bold text-[#DCCA87]'>Saturday:</h3>
                                <p className='mb-3'>7:00am - 21:00pm</p>
                                <h3 className='mb-3 font-bold text-[#DCCA87]'>Sunday - Closed</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
