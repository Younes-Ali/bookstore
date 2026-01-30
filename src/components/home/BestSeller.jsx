import React from 'react'
import ScrollBar from './ScrollBar'

export default function () {
  return (
    <div className='w-full bg-[#3B2F4A] flex flex-col items-center text-center py-30 overflow-hidden'>
        <div className='flex flex-col gap-5'>
            <h2 className='text-3xl font-bold'>Best Seller</h2>
            <p className='max-w-100 text-white/50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
        </div>
        <ScrollBar/>
        <button className='btn bg-[#D9176C] rounded-lg mt-20 w-45 py-6 px-4 font-bold text-xl' >Shop now</button>
    </div>
  )
}
