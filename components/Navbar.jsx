"use client";
import React, { useState } from 'react';
import Link from 'next/link';
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
        <nav className='fixed top-0 z-50 w-full bg-white shadow-md md:static'>
            <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
                <Link href={"/"} className='text-xl text-black font-bold'>Logo</Link>
                <div className='mobile-menu block md:hidden'>
                    {!isOpen ? (
                        <Bars3Icon className='h-8 w-8' onClick={() => setIsOpen(true)} />
                    ) : (
                        <XMarkIcon className='h-8 w-8' onClick={() => setIsOpen(false)} />
                    )
                    }
                </div>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex flex-col items-end md:flex-row md:space-x-8 md:items-center'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.href} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {isOpen && <MenuOverlay links={navLinks} />}
        </nav>
  )
}

export default Navbar;
