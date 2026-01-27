import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='flex gap-5 text-sm md:text-lg'>
            <NavLink className={({isActive})=> 'hover:text-yellow font-bold ' + (isActive&&'text-yellow-300')} to={'/'}>
                Home
            </NavLink>

            <NavLink className={({isActive})=> 'hover:text-yellow font-bold ' + (isActive&&'text-yellow-300')} to={'/books'} >
                Books
            </NavLink>

            <NavLink className={({isActive})=> 'hover:text-yellow font-bold ' + (isActive&&'text-yellow-300')} to={'/about'}>
                About
            </NavLink>
            
        </div>
  )
}
