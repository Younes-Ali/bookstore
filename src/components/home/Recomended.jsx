import img1 from "../../assets/images/book7.png";
import img2 from "../../assets/images/book4.png";
import RecomendedCard from "./RecomendedCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Recomended() {

  const imgs = [img1,img2];

  const [recommendedData , setRecommendedData] = useState([]);
  const getData = () =>{
  let domain = 'https://bookstore.eraasoft.pro/api';
  let endPoint = '/home';
  let url = domain + endPoint;
  axios.get(url).then((res)=>{
    setRecommendedData(res.data.data.recommended);
  }).catch((err)=>{
    console.log(err);
  })
}

useEffect(() => {
  getData();
},[]);
  return (
    <div className='bg-[#f5f5f5] md:py-30 md:px-15 flex flex-col gap-10'>
        <h2 className='text-[#222222] font-bold text-3xl w-full text-center md:text-left'>Recomended For You</h2>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
          {
            recommendedData?.map((ele,i)=>{
              return(
                  <div key={ele.bookId} className='w-screen md:w-full px-2 md:px-6 lg:px-8'>
                    <RecomendedCard img={imgs[i]} title={ele.bookName} author={ele.author} price={ele.price}/>
                  </div>
              )
            })
          }
        </div>
    </div>
  )
}
