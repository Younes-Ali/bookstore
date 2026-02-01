import logo1 from '../../assets/logo/Vector.png';
import logo2 from '../../assets/logo/Vector1.png';
import logo3 from '../../assets/logo/Vector2.png';
import logo4 from '../../assets/logo/Vector3.png';

export default function Values() {
    const Values = [
        {
            logo : logo1,
            title : "Fast & Reliable Shipping",
            body : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.'
        },
        {
            logo : logo2,
            title : "Secure Payment",
            body : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.'
        },
        {
            logo : logo3,
            title : "Easy Returns",
            body : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.'
        },
        {
            logo : logo4,
            title : "24/7 Customer Support",
            body : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.'
        }
    ]

  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-12 px-6 md:py-16 md:px-12 lg:py-20 lg:px-16 xl:px-20 gap-8 lg:gap-6'>
        {
            Values.map((ele, ind) => {
                return(
                    <div
                        className='flex flex-col gap-3 items-center text-center sm:items-start sm:text-left'
                        key={ind}
                    >
                        <img className='w-10 h-10 mb-1' src={ele.logo} alt="logo" />
                        <h2 className='text-[#222222] text-lg font-bold leading-tight'>{ele.title}</h2>
                        <p className='text-[#222222]/60 text-sm leading-relaxed'>{ele.body}</p>
                    </div>
                )
            })
        }
    </div>
  )
}