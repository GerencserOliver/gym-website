"use client"
import Footer from '@/components/Footer'
import Message from '@/components/Message'
import Navbar from '@/components/Navbar'
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const ClassesCard = ({ imageUrl, title, time, trainer }) => {
  return (
    <div className="relative">
      <img src={imageUrl} alt={title} className='rounded-lg w-full h-full object-cover' />
      <div className="absolute p-4 md:p-12 bottom-0 left-0 w-full">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <div className='flex mb-2'>
          <FontAwesomeIcon icon={faClock} className='text-white text-lg mr-2' />
          <p className="text-lg text-white">{time}</p>
        </div>
        <div className='flex'>
          <FontAwesomeIcon icon={faUser} className='text-white text-lg mr-2' />
          <p className="text-lg text-white">Trainer: {trainer}</p>
        </div>
        <div>
          <button className='mt-4 px-6 py-2 bg-white text-black font-bold'>{"Join now ->"}</button>
        </div>
      </div>
    </div>
  )
}


const Classes = () => {
  const [showMore, setShowMore] = useState(false)

  const handleShowMore = () => {
    setShowMore(!showMore)
  }

  const allClasses = [
    { imageUrl: "/Classes/cycling.png", title: "Cycling", time: "Monday 4:00 PM", trainer: "John Doe" },
    { imageUrl: "/Classes/meditation.png", title: "Meditation", time: "Tuesday 5:00 PM", trainer: "Jane Doe" },
    { imageUrl: "/Classes/boxing.png", title: "Boxing", time: "Wednesday 6:00 PM", trainer: "John Doe" },
    { imageUrl: "/Classes/running.png", title: "Running", time: "Thursday 7:00 PM", trainer: "Jane Doe" },
    { imageUrl: "/Classes/powerlifting.png", title: "Power Lifting", time: "Friday 8:00 PM", trainer: "John Doe" },
    { imageUrl: "/Classes/crossfit.png", title: "Crossfit", time: "Saturday 9:00 PM", trainer: "Jane Doe" }
  ]

  const visibleClasses = showMore ? allClasses : allClasses.slice(0, 3)

  return (
    <div>
      <div className="login-banner relative justify-center flex">
        <h1 className="text-white absolute bottom-10 text-5xl font-bold">
          Classes
        </h1>
      </div>
      <div className="container mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/4 h-3/4 mx-auto">
          {visibleClasses.map((classInfo, index) => (
            <ClassesCard key={index} {...classInfo} />
          ))}
        </div>
      </div>
      {allClasses.length > 3 && (
        <div className="text-center">
          <button onClick={handleShowMore} className="px-8 py-4 bg-[#DCCA87] mb-12 font-bold">Show {showMore ? 'less' : 'more'}</button>
        </div>
      )}
      <Navbar />
      <Message />
      <Footer />
    </div>
  )
}

export default Classes
