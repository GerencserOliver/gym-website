"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image"
import NavLink from './NavLink';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const navLinks = [
    { href: '#home', title: 'Home' },
    { href: '#about', title: 'About' },
    { href: '#contact', title: 'Contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className='fixed top-0 z-50 w-full px-10'>
            <div className='flex flex-wrap items-center justify-between mx-auto p-5'>
                <Link href={"/"} className='text-xl text-white font-bold'>
                    <Image src="/logo.png" alt="logo" width={100} height={50} />
                </Link>
                <div className='mobile-menu block md:hidden cursor-pointer'>
                    {!isOpen ? (
                        <Bars3Icon className='h-8 w-8' onClick={() => setIsOpen(true)} />
                    ) : (
                        <XMarkIcon className='h-8 w-8' onClick={() => setIsOpen(false)} />
                    )
                    }
                </div>
                <div className='pc-menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex flex-col items-end md:flex-row md:space-x-8 md:items-center text-white'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.href} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='hidden md:block md:w-auto' id='navbar'>
                    <button className=' bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-700'>
                        <NavLink href='/login' title='Join' />
                    </button>
                </div>
            </div>
            {isOpen && <MenuOverlay links={navLinks} />}
        </nav>
  )
}

export default Navbar;
