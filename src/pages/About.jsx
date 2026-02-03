import React from 'react'
import Values from '../components/home/Values'
import Missions from '../components/about/Missions'
import GetInTouch from '../components/about/GetInTouch'

export default function About() {
  return (
    <div className='w-full bg-[#F5F5F5] flex flex-col items-center overflow-hidden'>
        <Missions/>
        <GetInTouch/>
        <Values/>
    </div>
  )
}
