import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import avatar from '../assets/people/p1.svg'

import { useEffect, useState } from 'react';
import { FiEdit3 } from 'react-icons/fi';

export default function Profile() {
    const validationSchema = Yup.object({
        firstName: Yup.string(),
        lastName: Yup.string(),
        email: Yup.string().email('Invalid email'),
        phone: Yup.string().required('Phone is required').min(11, 'Phone must be at least 11 characters'),
        address: Yup.string()
    });

    const navigate = useNavigate();


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

    const handleSubmit = (values) => {
        let domain = 'https://bookstore.eraasoft.pro/api';
        let endPoint = '/profile';
        let url = domain + endPoint;
        let dataToSend = { 
            first_name: values.firstName,
            last_name: values.lastName,
            email: values.email, 
            phone: values.phone,
            address: values.address
        };
        // Request to the backend
        axios
        .post(url, dataToSend)
        .then((res) => {
            toast.success('Profile Updated Success');
        })
        .catch((err) => {
            console.log(err);
        });
    };


    return (
        <div className={`w-full h-dvh flex flex-col gap-10 items-center justify-center bg-[#F5F5F5] text-black relative`}>
        <div className='w-45 h-45 rounded-full absolute -top-20'>
            <img src={avatar} alt="avatar" />
            <div className='absolute bottom-5 right-0 bg-[#D9176C] p-2 rounded-full'>
                <FiEdit3 />
            </div>
        </div>    
        <Formik 
            initialValues={{ firstName: personData.first_name || '', lastName: personData.last_name || '', email: personData.email || '', phone: personData.phone || '', address: personData.address || '' }} 
            onSubmit={handleSubmit} 
            validationSchema={validationSchema}
        >
            <Form className="flex flex-col items-center gap-6 w-screen p-3 md:w-200 md:p-0">
                <div className='w-full p-10 bg-white rounded-lg shadow flex flex-col gap-6'>
                    <h1 className='w-full text-center font-bold text-xl text-black'>General information</h1>
                    <div className='flex justify-between gap-5'>
                        <div>
                            <label className='font-semibold text-gray-500' htmlFor="firstName">First Name</label>    
                            <Field className="w-full input bg-white rounded-lg shadow" name="firstName" type="text" placeholder={personData.first_name}/>
                            <ErrorMessage name="firstName" component={'p'} className="text-red-500" />
                        </div>
                        
                        <div>
                            <label className='font-semibold text-gray-500' htmlFor="lastName">Last Name</label>    
                            <Field className="w-full input bg-white rounded-lg shadow" name="lastName" type="text" placeholder={personData.last_name} />
                            <ErrorMessage name="lastName" component={'p'} className="text-red-500" />
                        </div>
                    </div>

                    <div>
                        <label className='font-semibold text-gray-500' htmlFor="email">Email</label>    
                        <Field className="w-full input bg-white rounded-lg shadow" name="email" type="text" placeholder={personData.email} />
                        <ErrorMessage name="email" component={'p'} className="text-red-500" />
                    </div>

                    <div>
                        <label className='font-semibold text-gray-500' htmlFor="phone">Phone</label> 
                        <Field className="w-full input bg-white rounded-lg shadow" name="phone" type="text" placeholder={personData.phone} />
                        <ErrorMessage name="phone" component={'p'} className="text-red-500" />
                    </div>

                    <div>
                        <label className='font-semibold text-gray-500' htmlFor="address">Address</label> 
                        <Field className="w-full input bg-white rounded-lg shadow" name="address" type="text" placeholder={personData.address} />
                        <ErrorMessage name="address" component={'p'} className="text-red-500" />
                    </div>
                </div>
                <button type="submit" className="btn bg-[#D9176C] w-1/2">
                    Update Profile
                </button>
            </Form>
        </Formik>
        </div>
    );
}