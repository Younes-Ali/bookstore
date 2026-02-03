import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import avatar from '../assets/people/p1.svg'

export default function HeaderInfo() {
    let domain = 'https://bookstore.eraasoft.pro/api';
    let endPoint = '/profile';
    let url = domain + endPoint;

    const [personData, setPersonData] = useState({});

    useEffect(()=>{
      let token = localStorage.getItem('token') || sessionStorage.getItem('token');
      let basmga = { headers: { Authorization: `Bearer ${token}` } };
      axios.get(url ,basmga).then((res)=>{
        setPersonData(res.data.data);
      }).catch((err)=>{

      })
    },[]);
  return (
    <>
      {
        !(localStorage.getItem('token') || sessionStorage.getItem('token')) ? (
          <div className='flex gap-4'>
            <Link to={'/auth/signin'}>
              <button className='p-3 bg-[#D9176C] rounded-lg'>Log in</button>
            </Link>
            <Link to={'/auth/signup'}>
              <button className='p-3 bg-[#FFFFFF] border border-[#D9176C] text-[#D9176C] rounded-lg'>Sign Up</button>
            </Link>
          </div>
        ) : (
          <div className='flex gap-7 items-center'>
            <CiHeart size={32} />
            <MdOutlineShoppingCart size={32} />
            <div className='flex items-center gap-3'>
              <Link to={'/auth/profile'} className='relative'>
                <img src={avatar} alt="person" className='w-12' />
                <div className='w-3 h-3 bg-green-500 absolute top-0.5 right-0.5 z-10 rounded-full'></div>
              </Link>
              <div className='relative'>
                <p className='text-lg font-bold'>{personData.first_name +" "+personData.last_name}</p>
                <p className='text-white/60'>{personData.email}</p>
              </div>
            </div>
          </div>
        )
      }
      
    </>
  )
}
