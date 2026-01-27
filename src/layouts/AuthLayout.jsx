
import Footter from '../components/Footter'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className='w-full h-dvh bg-[#F5F5F5]' >
        <Header/>
        <Outlet/>
        <Footter/>
    </div>
  )
}
