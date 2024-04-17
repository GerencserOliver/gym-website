import React from 'react'

const Message = () => {
  return (
    <div>
        <section
            className='relative py-20 bg-[#DCCA87] px-8 sm:px-16 md:px-32 lg:px-72 bg-fixed'
            style={{ backgroundImage: 'url(/Message/dead-lift.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}
        >
            <h1 className='text-5xl font-bold text-center mt-12 text-[#DCCA87]'>We hope that you will join us soon and welcome you as our sports partner!</h1>
            <p className='text-[#FFFFFF] text-xl mt-10 text-center max-w-lg mx-auto'>Have a nice day: Gym Team</p>
        </section>
    </div>
  )
}

export default Message
