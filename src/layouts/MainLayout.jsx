import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function MainLayout() {
  return (
    <div
        className='w-full bg-[#f2f2f2]'
    >
        <Header />
        <Outlet />
        <Footer/>
    </div>
  )
}
