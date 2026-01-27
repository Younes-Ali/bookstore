import logo from '../assets/logo/logo.png'
import HeaderInfo from './HeaderInfo'
import NavBar from './NavBar'
import main from '../assets/images/main.png'

export default function Header() {
  return (
    
        <div
        className='bg-no-repeat bg-center bg-cover w-full h-100'
        style={{ backgroundImage: `url(${main})` }}
        >
        <div 
            className="w-full flex flex-row items-center justify-around gap-2 bg-white/20 text-white sticky top-0 z-50 p-3 backdrop-blur-md shadow-lg"
            
        >
            <div className='flex gap-5 items-center'>
                <div className='flex gap-2 items-center'>
                    <img 
                        className='transition-all duration-300 ' 
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
