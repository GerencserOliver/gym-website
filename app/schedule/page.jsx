"use client";
import React, { useState } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const ScheduleCards = ({ trainingClass, time, trainer }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-10/12 mx-auto my-1 p-6 rounded-xl bg-[#F2F2F2]">
      <div className='flex flex-col md:flex-row gap-4 md:gap-12'>
        <div className="text-center md:text-left">
          <p className='text-sm text-gray-500'>Class name</p>
          <h1 className="text-2xl font-bold">{trainingClass}</h1>
        </div>
        <div className="text-center md:text-left">
          <p className='text-sm'>Time</p>
          <h1 className="text-2xl font-bold">{time}</h1>
        </div>
        <div className="text-center md:text-left">
          <p className='text-sm'>Trainer</p>
          <h1 className="text-2xl font-bold">{trainer}</h1>
        </div>
      </div>
      <button className="bg-[#DCCA87] text-white p-2 px-12 rounded-3xl hover:bg-white hover:text-[#DCCA87] duration-300 w-full md:w-auto mt-4 md:mt-0">
        Join
      </button>
    </div>
  );
}


const Schedule = () => {
  const [currentDay, setCurrentDay] = useState('Monday');

  const handleDayChange = (day) => {
    setCurrentDay(day);
  };

  const classesByDay = {
    Monday: [
      { trainingClass: 'Yoga', time: '4:00 PM', trainer: 'John Doe' },
      { trainingClass: 'Pilates', time: '5:00 PM', trainer: 'Jane Doe' },
      { trainingClass: 'Zumba', time: '6:00 PM', trainer: 'John Doe' },
      { trainingClass: 'Crossfit', time: '7:00 PM', trainer: 'Jane Doe' },
    ],
    Tuesday: [
      { trainingClass: 'Pilates', time: '4:00 PM', trainer: 'John Doe' },
      { trainingClass: 'Zumba', time: '5:00 PM', trainer: 'Jane Doe' },
      { trainingClass: 'Yoga', time: '6:00 PM', trainer: 'John Doe' },
      { trainingClass: 'Crossfit', time: '7:00 PM', trainer: 'Jane Doe' },
      { trainingClass: 'Spin Class', time: '8:00 PM', trainer: 'John Doe' },
    ],
    Wednesday: [
      { trainingClass: 'Zumba', time: '4:00 PM', trainer: 'John Doe' },
      { trainingClass: 'Yoga', time: '5:00 PM', trainer: 'Jane Doe' },
      { trainingClass: 'Pilates', time: '6:00 PM', trainer: 'John Doe' },
    ],
    Thursday: [
      { trainingClass: 'Yoga', time: '4:00 PM', trainer: 'John Doe' },
      { trainingClass: 'Pilates', time: '5:00 PM', trainer: 'Jane Doe' },
      { trainingClass: 'Zumba', time: '6:00 PM', trainer: 'John Doe' },
      { trainingClass: 'Crossfit', time: '7:00 PM', trainer: 'Jane Doe' },
    ],
    Friday: [
      { trainingClass: 'Zumba', time: '4:00 PM', trainer: 'John Doe' },
      { trainingClass: 'Yoga', time: '5:00 PM', trainer: 'Jane Doe' },
      { trainingClass: 'Pilates', time: '6:00 PM', trainer: 'John Doe' },
      { trainingClass: 'Crossfit', time: '7:00 PM', trainer: 'Jane Doe' },
      { trainingClass: 'Boxing', time: '8:00 PM', trainer: 'John Doe' },
    ],
    Saturday: [
      { trainingClass: 'Yoga', time: '4:00 PM', trainer: 'John Doe' },
      { trainingClass: 'Pilates', time: '5:00 PM', trainer: 'Jane Doe' },
      { trainingClass: 'Zumba', time: '6:00 PM', trainer: 'John Doe' },
      { trainingClass: 'Crossfit', time: '7:00 PM', trainer: 'Jane Doe' },
      { trainingClass: 'MMA', time: '8:00 PM', trainer: 'John Doe' },
    ],
    Sunday: [
      { trainingClass: 'Yoga', time: '4:00 PM', trainer: 'John Doe' },
      { trainingClass: 'Pilates', time: '5:00 PM', trainer: 'Jane Doe' },
      { trainingClass: 'Zumba', time: '6:00 PM', trainer: 'John Doe' },
      { trainingClass: 'Crossfit', time: '7:00 PM', trainer: 'Jane Doe' },
    ],
  };
  

  return (
    <div>
      <div className="login-banner relative justify-center flex">
        <h1 className="text-white absolute bottom-10 text-5xl font-bold">
          Schedule
        </h1>
      </div>
      <div className='flex items-center justify-center mt-24 flex-wrap'>
      {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
        <button
          key={day}
          className={`mx-2 my-2 text-xl font-bold text-black bg-white p-2 px-4 rounded-3xl hover:bg-[#DCCA87] hover:text-white duration-300 ${currentDay == day ? 'current-day' : ''}`}
          onClick={() => handleDayChange(day)}
        >
          {day}
        </button>
      ))}
      </div>
      <div className="flex flex-col items-center justify-center mt-8 text-black text-xl w-3/4 mx-auto mb-24">
        {classesByDay[currentDay].map((classInfo, index) => (
          <ScheduleCards
            key={index}
            trainingClass={classInfo.trainingClass}
            time={classInfo.time}
            trainer={classInfo.trainer}
          />
        ))}
      </div>
      <Navbar />
      <Footer />
    </div>
  );
}

export default Schedule;
