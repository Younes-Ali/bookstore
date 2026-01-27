import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='w-full h-200 bg-white flex justify-center items-center'>
        <Link to={'/auth/signin'}>
            <button className='bg-black p-5 text-xl font-bold rounded shadow'> sign in </button>
        </Link>
    </div>
  )
}
