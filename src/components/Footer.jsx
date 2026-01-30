import NavBar from "./NavBar";
import logo from '../assets/logo/logo.png'
import { FaSquareFacebook, FaTwitter } from "react-icons/fa6";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";

export default function Footer() {
  return (
    <div className='w-full h-80 py-30 px-15 bg-[#3B2F4A] flex justify-center items-center'>
      <div className="w-full flex flex-col gap-8">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-10">
            <div className="flex gap-2 items-center">
              <img src={logo} alt="logo" />
              <h1 className="text-xl font-bold">Bookshop</h1>
            </div>
            <NavBar/>
          </div>
          <div className="flex items-center gap-5">
            <FaSquareFacebook size={32}/>
            <FaInstagram size={32}/>
            <FaYoutube size={32}/>
            <FaTwitter size={32}/>
          </div>
        </div>
        <div className="w-full border-t border-white/30 flex items-center justify-between py-5">
          <h2>{'<Developed By> EraaSoft <All Copy Rights Reserved @2024'}</h2>
          <div className="flex items-center gap-5">
            <GiWorld size={25}/>
            <select className="w-40 border border-gray-300 rounded-lg px-4 py-2 text-white font-medium hover:border-[#D9176C] focus:outline-none focus:border-[#D9176C] cursor-pointer">
              <option value="en">English</option>
              <option value="ar">Arabic</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
