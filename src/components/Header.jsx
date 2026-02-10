import logo from '../assets/logo/logo.png';
import HeaderInfo from './HeaderInfo';
import NavBar from './NavBar';
import main from '../assets/images/main.png';
import { useLocation } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import { MdOutlineKeyboardVoice } from "react-icons/md";

export default function Header() {
    const loc = useLocation();
    let h = '' ;
    if(loc.pathname === '/auth/signin' || loc.pathname === '/auth/signup' || loc.pathname === '/auth/forget-password' || loc.pathname === '/auth/rest-password' || loc.pathname === '/auth/new-password') {
        h='h-100'
    } else if(loc.pathname === '/books') { 
        h='h-30'
    }else{
        h='h-200'
    }
  return (

        <div
            className={`relative bg-no-repeat bg-center bg-cover w-full z-0 ${h}`}
            style={{ 
                backgroundImage: (loc.pathname ==='/about') ? `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${main})` : `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${main})`,
                }}
            >
                {
                    (loc.pathname === '/') &&
                    <div className='w-70 md:w-134 absolute top-[50%] left-[50%] translate-[-50%]'>
                        <input type="search" className='w-full rounded-full bg-white p-5 text-black text-xl overflow-hidden relative' placeholder='Search' />
                        <div className='w-[15%] absolute top-0 rounded-r-full right-0 h-full bg-[#D9176C] flex justify-center items-center'>
                            <IoMdSearch size={32}/>
                        </div>
                        <div className='w-10 absolute top-[25%] right-[20%]' >
                            <MdOutlineKeyboardVoice size={32} color='gray' />
                        </div>
                    </div>
                }
                {
                    (loc.pathname === '/about') &&
                    <div className='max-w-150 text-center absolute top-[50%] left-[50%] translate-[-50%] flex flex-col items-center gap-4'>
                        <h1 className='text-4xl md:text-6xl font-bold text-white'>About Bookshop</h1>
                        <p className='w-screen p-2 md:w-full md:p-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam esse eveniet, fuga quisquam, quia, veritatis tenetur illo maxime hic possimus ipsa. Deserunt magni, eligendi omnis blanditiis optio dolore ut officiis!</p>
                    </div>
                }
        <div 
            className="w-full flex flex-col md:flex-row items-center justify-around gap-6 md:gap-2 bg-white/15 text-white top-0 z-50 p-3 backdrop-blur-md shadow-lg"
            
        >
            <div className='flex flex- gap-5 items-center'>
                <div className='flex gap-2 items-center'>
                    <img 
                        className='transition-all duration-300' 
                        src={logo} 
                        alt="logo" 
                    />
                    <h1 className='font-bold'>Bookshop</h1>
                </div>

                <div className='bg-black/50 w-1 h-10'></div>
                
                <NavBar/>
            </div>
            <HeaderInfo/>
        </div>
        </div>
    
  )
}
