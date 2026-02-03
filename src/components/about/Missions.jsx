import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function  Missions() {
    const  Missions = [
        {
            title : "Quality Selection",
            body :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.Quality SelectionLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,',
        },
        {
            title : "Exceptional Service",
            body :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.Quality SelectionLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,',
        },
        {
            title : "Set Up Stores",
            body :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.Quality SelectionLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,'
        },
    ]

  return (
    <div className='w-full flex flex-col items-center gap-8 py-12 px-6 md:py-30 md:px-37.5 lg:py-20 lg:px-16 xl:px-20'>
        <h1 className="font-bold text-3xl text-black">Our Mission</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {
            Missions.map((ele, ind) => {
                return(
                    <div
                        className='w-80 bg-white flex flex-col gap-8 items-center text-center sm:items-start sm:text-left p-6 rounded-lg'
                        key={ind}
                    >
                        <h2 className='text-[#222222] text-lg font-bold leading-tight'>{ele.title}</h2>
                        <p className='text-[#222222]/60 text-sm leading-relaxed'>{ele.body}</p>
                        <Link className="text-[#D9176C] flex items-center gap-1">View More <FaArrowRight /> </Link>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}