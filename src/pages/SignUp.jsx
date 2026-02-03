import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import google from '../assets/logo/google.png'
import facebook from '../assets/logo/facebook.png'
import { useEffect } from 'react';

export default function SignUp() {
    const validationSchema = Yup.object({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        email: Yup.string().required('Email is required').email('Invalid email'),
        password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string()
            .required('Confirm password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match'),
    });

    const navigate = useNavigate();

    const handleSubmit = (values) => {
        let domain = 'https://bookstore.eraasoft.pro/api';
        let endPoint = '/register';
        let url = domain + endPoint;
        let dataToSend = { 
            first_name: values.firstName,
            last_name: values.lastName,
            email: values.email, 
            password: values.password,
            password_confirmation: values.confirmPassword
        };
        // Request to the backend
        axios
        .post(url, dataToSend)
        .then((res) => {
            toast.success('Registration Success');
            navigate('/auth/signin');
        })
        .catch((err) => {
            console.log(err);
        });
    };

    useEffect(() => {
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');
        if (token) {
            navigate('/');
        }
    }, []);

    return (
        <div className={`w-full h-dvh flex flex-col gap-10 items-center mt-15 bg-[#F5F5F5] text-black`}>
        <Formik 
            initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '', isChecked: false }} 
            onSubmit={handleSubmit} 
            validationSchema={validationSchema}
        >
            <Form className="flex flex-col gap-6 w-screen p-3 md:w-100 md:p-0">
                <div className='flex justify-between gap-5'>
                    <div>
                        <label className='font-semibold' htmlFor="firstName">First Name</label>    
                        <Field className="w-full input bg-white rounded-lg shadow" name="firstName" type="text" placeholder="Enter your first name" />
                        <ErrorMessage name="firstName" component={'p'} className="text-red-500" />
                    </div>
                    
                    <div>
                        <label className='font-semibold' htmlFor="lastName">Last Name</label>    
                        <Field className="w-full input bg-white rounded-lg shadow" name="lastName" type="text" placeholder="Enter your last name" />
                        <ErrorMessage name="lastName" component={'p'} className="text-red-500" />
                    </div>
                </div>

                <div>
                    <label className='font-semibold' htmlFor="email">Email</label>    
                    <Field className="w-full input bg-white rounded-lg shadow" name="email" type="text" placeholder="Enter your email" />
                    <ErrorMessage name="email" component={'p'} className="text-red-500" />
                </div>

                <div>
                    <label className='font-semibold' htmlFor="password">Password</label> 
                    <Field className="w-full input bg-white rounded-lg shadow" name="password" type="password" placeholder="Enter your password" />
                    <ErrorMessage name="password" component={'p'} className="text-red-500" />
                </div>

                <div>
                    <label className='font-semibold' htmlFor="confirmPassword">Confirm Password</label> 
                    <Field className="w-full input bg-white rounded-lg shadow" name="confirmPassword" type="password" placeholder="Confirm your password" />
                    <ErrorMessage name="confirmPassword" component={'p'} className="text-red-500" />
                </div>

                <label className="flex gap-3">
                    <Field name="isChecked" className="" type="checkbox" />
                    Agree with<Link className='text-[#D9176C]'>Terms & Conditions</Link>
                </label>

                <button type="submit" className="btn bg-[#D9176C] w-full">
                    Sign Up
                </button>
                
                <Link to={'/auth/signin'} className="w-full text-center">
                    Already have an account? <span className='text-[#D9176C]'>Sign In</span>
                </Link>

                <div className='w-full flex flex-col gap-3'>
                    <p className='text-black/50 w-full text-center'>or</p>
                    <Link className="w-full text-center flex gap-3 justify-center bg-white py-3 rounded-lg shadow">
                        <img src={google} alt="logo" />
                        <span className='text-[#222222]'>Sign up with Google</span>
                    </Link>
                    <Link className="w-full text-center flex gap-3 justify-center bg-white py-3 rounded-lg shadow">
                        <img src={facebook} alt="logo" /> 
                        <span className='text-[#222222]'>Sign up with Facebook</span>
                    </Link>
                </div>
            </Form>
        </Formik>
        </div>
    );
}