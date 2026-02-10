import NavBar from "./NavBar";
import logo from '../assets/logo/logo.png'
import { FaSquareFacebook, FaTwitter } from "react-icons/fa6";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";

export default function Footer() {
  return (
    <div className='w-full py-30 px-15 bg-[#3B2F4A] flex justify-center items-center'>
      <div className="w-full flex flex-col gap-8">
        <div className="w-full flex flex-col lg:flex-row gap-5 md:gap-0 justify-between items-center">
          <div className="flex flex-wrap items-center gap-10">
            <div className="flex gap-2 items-center">
              <img src={logo} alt="logo" className="w-5 md:w-7" />
              <h1 className="text-lg md:text-xl font-bold">Bookshop</h1>
            </div>
            <NavBar/>
          </div>
          <div className="flex items-center text-xl md:text-2xl gap-5">
            <FaSquareFacebook />
            <FaInstagram />
            <FaYoutube />
            <FaTwitter />
          </div>
        </div>
        <div className="w-full border-t border-white/30 flex flex-col lg:flex-row gap-5 md:gap-0 items-center justify-between py-5">
          <h2>{'<Developed By> EraaSoft <All Copy Rights Reserved @2024'}</h2>
          <div className="flex items-center gap-5">
            <GiWorld size={25}/>
            <select className="w-40 border border-gray-300 rounded-lg px-4 py-2 text-white font-medium hover:border-[#D9176C] focus:outline-none focus:border-[#D9176C] cursor-pointer">
              <option className="bg-gray-800" value="en">English</option>
              <option className="bg-gray-800" value="ar">Arabic</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
