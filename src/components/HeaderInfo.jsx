import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdLogout, MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import avatar from '../assets/people/p1.svg'
import { IoIosArrowForward, IoMdPerson } from "react-icons/io";
import { LuHistory } from "react-icons/lu";
import { IoLocationSharp } from "react-icons/io5";
import { TbHelp } from "react-icons/tb";
import Swal from 'sweetalert2';

export default function HeaderInfo() {
    let domain = 'https://bookstore.eraasoft.pro/api';
    let endPointInfo = '/profile';
    let endPointLogout ='/logout';
    let urlInfo = domain + endPointInfo;
    let urlLogout = domain + endPointLogout;

    const [personData, setPersonData] = useState({});
    const [isExpanded, setIsExpanded] = useState(false);
    
    const handelLogout = ()=> {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, logout!"
        }).then((result) => {
            if (result.isConfirmed) {
                let token = localStorage.getItem('token') || sessionStorage.getItem('token');
                let config = { headers: { Authorization: `Bearer ${token}` } };
                
                axios.post(urlLogout, {}, config)
                    .then((res)=>{
                        console.log(res);
                        localStorage.removeItem('token');
                        sessionStorage.removeItem('token');
                        Swal.fire({
                            title: "Success!",
                            text: "You are logged out now!",
                            icon: "success"
                        }).then(() => {
                            window.location.href = '/';
                        });
                    })
                    .catch((err)=>{
                        console.log(err);
                        Swal.fire({
                            title: "Error!",
                            text: "Something went wrong!",
                            icon: "error"
                        });
                    });
            }
        });
    }

    useEffect(()=>{
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');
        let config = { headers: { Authorization: `Bearer ${token}` } };
        
        axios.get(urlInfo, config)
            .then((res)=>{
                setPersonData(res.data.data);
            })
            .catch((err)=>{
                console.log(err);
            });
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
                        <div className='flex items-center gap-3 relative'>
                            <Link to={'/auth/profile'} className='relative'>
                                <img src={avatar} alt="person" className='w-12' />
                                <div className='w-3 h-3 bg-green-500 absolute top-0.5 right-0.5 z-10 rounded-full'></div>
                            </Link>
                            <div className='relative'>
                                <p className='text-sm md:text-lg font-bold'>{personData.first_name +" "+personData.last_name}</p>
                                <p className='text-xs md:text-sm text-white/60'>{personData.email}</p>
                            </div>
                            <IoIosArrowForward 
                                className={`arrow transition duration-200 cursor-pointer ${isExpanded ? "rotate-90" : "rotate-180"}`} 
                                onClick={()=> setIsExpanded(!isExpanded)} 
                            />
                            {isExpanded && (
                                <div className="absolute bg-[#f2f2f2] p-6 rounded-2xl text-black -right-6 top-16 z-9999 shadow-lg min-w-50">
                                    <ul className='flex flex-col gap-3'>
                                        <li>
                                            <Link to={'/auth/profile'} className='flex gap-2 items-center hover:text-yellow-600'>
                                                <IoMdPerson /> <span>Profile</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className='flex gap-2 items-center hover:text-yellow-600'>
                                                <LuHistory /> <span>History</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/about#getInTouch'} className='flex gap-2 items-center hover:text-yellow-600'>
                                                <IoLocationSharp /> <span>Location</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/about#getInTouch'} className='flex gap-2 items-center hover:text-yellow-600'>
                                                <TbHelp /> <span>Help</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <button onClick={handelLogout} className='flex gap-2 items-center hover:text-red-600'>
                                                <MdLogout /> <span>Logout</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                )
            }
        </>
    )
}