import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

export default function RecomendedCard({img, title, author, body, price, reviews }) {
  return (
    <div className='w-screen md:w-full px-2 md:px-6 lg:px-8'>
        <div className="card card-side bg-white p-6 text-black shadow-lg rounded-lg overflow-hidden flex-col md:flex-row">
            <figure className=" md:w-1/3">
                <img
                    src={img}
                    alt="book"
                    className='w-full object-contain'
                />
            </figure>
            <div className="card-body p-6 w-full md:w-2/3">
                <h2 className="card-title text-xl md:text-2xl lg:text-3xl font-bold text-[#222222] mb-2">
                    Rich Dad And Poor Dad
                </h2>
                <h3 className="text-base md:text-lg text-[#222222] mb-4">
                    <span className="font-semibold text-[#222222]/50">Author:</span> Robert T. Kiyosaki
                </h3>
                <p className="w-full text-sm md:text-base text-[#222222]/70 leading-relaxed mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, Aliquam in justo varius,
                </p>
                
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row justify-between sm:items-center gap-4 sm:gap-8">
                        <div className="flex items-center gap-2 text-[#222222]/70">
                            <div className="rating rating-sm">
                                <input type="radio" className="mask mask-star-2 bg-orange-400" disabled checked readOnly />
                                <input type="radio" className="mask mask-star-2 bg-orange-400" disabled checked readOnly />
                                <input type="radio" className="mask mask-star-2 bg-orange-400" disabled checked readOnly />
                                <input type="radio" className="mask mask-star-2 bg-orange-400" disabled checked readOnly />
                                <input type="radio" className="mask mask-star-2 bg-orange-400" disabled readOnly />
                            </div>
                            <span className="text-sm">(180 Review)</span>
                        </div>
                        <div>
                            <p className="text-2xl md:text-3xl font-bold text-black">$30.00</p>
                        </div>
                    </div>
                    <div className="flex justify-between gap-3">
                        <button className="btn bg-[#D9176C] hover:bg-[#D9176C]/90 text-white border-none px-8 grow">
                            Add To Cart <IoCartOutline size={25} />
                        </button>
                        <button className="btn bg-white hover:bg-[#D9176C]/10 text-[#D9176C] border-2 border-[#D9176C]">
                            <FaRegHeart className="text-lg" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
