import img1 from "../../assets/images/book7.png";
import img2 from "../../assets/images/book4.png";
import RecomendedCard from "./RecomendedCard";

export default function Recomended() {
  return (
    <div className='bg-[#f5f5f5] md:py-30 md:px-15 flex flex-col gap-10'>
        <h2 className='text-[#222222] font-bold text-3xl w-full text-center md:text-left'>Recomended For You</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <RecomendedCard img={img1}/>
            <RecomendedCard img={img2}/>
        </div>
    </div>
  )
}
