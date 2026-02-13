import React, { useEffect } from 'react'
import Values from '../components/home/Values'
import Missions from '../components/about/Missions'
import GetInTouch from '../components/about/GetInTouch'
import { useLocation } from 'react-router-dom';

export default function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <div className='w-full bg-[#F5F5F5] flex flex-col items-center overflow-hidden'>
        <Missions/>
        <GetInTouch/>
        <Values/>
    </div>
  )
}
