import React from 'react';
import Image from 'next/image';
import HeroImg from '../public/hero.png';

const Hero = () => {
    return (
        <div>
            <section className="relative">
                <div className='h-screen relative'>
                    <Image
                        src={HeroImg}
                        alt="Background Image"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                </div>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="text-center mx-auto max-w-4xl px-1 text-[#DCCA87]">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Crush your health and fitness goals in no time</h1>
                        <p className="mt-5 text-xl text-[#FFFFFF]">It doesn’t matter if your goal is to get stronger, burn fat, or to just stay fit our world class coaches will guide you every step of the way.</p>
                        <button className="mt-8 px-8 py-3 text-lg font-semibold text-white bg-[#DCCA87] rounded-lg hover:bg-[#cfc292] transition-all">Get Started</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;
