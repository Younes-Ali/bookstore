import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Virtual } from 'swiper/modules';
import 'swiper/css';


import img1 from '../../assets/images/book1.png'
import img2 from '../../assets/images/book2.png'
import img3 from '../../assets/images/book3.png'
import img4 from '../../assets/images/book4.png'
import img5 from '../../assets/images/book5.png'
import img6 from '../../assets/images/book6.png'
import img7 from '../../assets/images/book7.png'
import img8 from '../../assets/images/book8.png'

//Data
const books = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function ScrollBar() {
    return (
        <div className="p-6 mt-20 overflow-hidden">
            <div className="w-full space-y-8">
                <div className="w-full overflow-hidden rounded-lg border border-gray-700 py-4">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={32}
                        slidesPerView="auto"
                        loop={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed={3000}
                        freeMode={true}
                        breakpoints={false}
                        className="mySwiper"
                    >
                        {books.map((item, index) => (
                            <SwiperSlide 
                                key={index}
                                style={{ width: 'auto' }}
                                className="shrink-0 shadow-lg hover:scale-105 transition-transform duration-300"
                            >
                                <div className='w-full'>
                                    <img 
                                        src={item} 
                                        alt='bookImg' 
                                        className="w-60 mb-2 mx-auto rounded-2xl" 
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>  
            </div>
        </div>
    );
}