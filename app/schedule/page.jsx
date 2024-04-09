"use client";
import React, { useState } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Classes = ({ trainingClass, time, trainer, Join }) => {
  return (
    <ul className=''>
      <li className="flex p-4 border-white" style={{ marginBottom: '1rem', paddingTop: '1rem', paddingBottom: '1rem' }}>
        <p>{trainingClass}</p>
        <p>{time}</p>
        <p>{trainer}</p>
        <button className='bg-black text-white px-6 py-3 rounded-md hover:bg-[#cfc292] duration-300'>
          Join
        </button>
      </li>
    </ul>
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
              className={`mx-2 my-2 text-xl font-bold text-black bg-white p-2 rounded-3xl hover:bg-[#DCCA87] hover:text-white duration-300 ${currentDay == day ? 'bg-[#DCCA87] text-white' : ''}`}
            onClick={() => handleDayChange(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center mt-8 text-black text-xl font-bold bg-[#DCCA87] w-3/4 mx-auto">
        {classesByDay[currentDay].map((classInfo, index) => (
          <Classes
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
