import Values from '../components/home/Values'
import BestSeller from '../components/home/BestSeller'
import Recomended from '../components/home/Recomended'
import FlashSale from '../components/home/FlashSale'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='w-full h-dvh bg-white'>
      <Values/>
      <BestSeller/>
      <Recomended/>
      <div className='w-full h-0.5 bg-[#f2f2f2] px-5'>
        <div className='w-full bg-black/20 h-full'></div>
      </div>
      <FlashSale/>
      <Footer/>
    </div>
  )
}
