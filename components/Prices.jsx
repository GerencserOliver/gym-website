import React from 'react'

const Prices = () => {
  return (
    <div>
        <section
            className='relative py-20 bg-[#DCCA87] px-8 sm:px-16 md:px-32 lg:px-72 bg-fixed'
            style={{ backgroundImage: 'url(/bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className='container mx-auto'>
                <h2 className='text-3xl font-bold text-center text-white'>Our Prices</h2>
                <h1 className='text-5xl font-bold text-center mt-12 text-[#DCCA87]'>Membership Plans</h1>
                <p className='text-[#FFFFFF] text-xl mt-10 text-center max-w-lg mx-auto'>Choose the plan that suits you best, and start working out today!</p>
            <div className='flex justify-center items-center flex-wrap gap-8 mt-16 text-center'>
                <div className='bg-[#1F1F1F] p-8 w-80 h-96 flex flex-col justify-center items-center border border-[#1F1F1F] hover:border-[#DCCA87]'>
                    <h3 className='text-[#FFFFFF] font-bold text-2xl'>Daily</h3>
                    <p className='text-[#DCCA87] text-5xl font-bold mt-4'>$10</p>
                    <p className='text-[#FFFFFF] text-xl mt-4'>Access To Gym</p>
                </div>
                <div className='bg-[#343434] p-8 w-80 h-80 flex flex-col justify-center items-center border border-[#343434] hover:border-[#DCCA87]'>
                    <h3 className='text-[#FFFFFF] font-bold text-2xl'>Monthly</h3>
                    <p className='text-[#DCCA87] text-5xl font-bold mt-4'>$80</p>
                    <p className='text-[#FFFFFF] text-xl mt-4'>Access To Gym</p>
                </div>
                <div className='bg-[#1F1F1F] p-8 w-80 h-96 flex flex-col justify-center items-center border border-[#1F1F1F] hover:border-[#DCCA87]'>
                    <h3 className='text-[#FFFFFF] font-bold text-2xl'>Daily</h3>
                    <p className='text-[#DCCA87] text-5xl font-bold mt-4'>$10</p>
                    <p className='text-[#FFFFFF] text-xl mt-4'>Access To Gym</p>
                </div>
                <div className='bg-[#343434] p-8 w-80 h-80 flex flex-col justify-center items-center border border-[#343434] hover:border-[#DCCA87]'>
                    <h3 className='text-[#FFFFFF] font-bold text-2xl'>Monthly</h3>
                    <p className='text-[#DCCA87] text-5xl font-bold mt-4'>$80</p>
                    <p className='text-[#FFFFFF] text-xl mt-4'>Access To Gym</p>
                </div>
                <div className='bg-[#1F1F1F] p-8 w-80 h-96 flex flex-col justify-center items-center border border-[#1F1F1F] hover:border-[#DCCA87]'>
                    <h3 className='text-[#FFFFFF] font-bold text-2xl'>Daily</h3>
                    <p className='text-[#DCCA87] text-5xl font-bold mt-4'>$10</p>
                    <p className='text-[#FFFFFF] text-xl mt-4'>Access To Gym</p>
                </div>
                <div className='bg-[#343434] p-8 w-80 h-80 flex flex-col justify-center items-center border border-[#343434] hover:border-[#DCCA87]'>
                    <h3 className='text-[#FFFFFF] font-bold text-2xl'>Monthly</h3>
                    <p className='text-[#DCCA87] text-5xl font-bold mt-4'>$80</p>
                    <p className='text-[#FFFFFF] text-xl mt-4'>Access To Gym</p>
                </div>
            </div>
            </div>
        </section>

    </div>
  )
}

export default Prices
