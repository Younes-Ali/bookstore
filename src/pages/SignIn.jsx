import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import google from '../assets/logo/google.png'
import facebook from '../assets/logo/facebook.png'

export default function SignIn() {
    const validationSchema = Yup.object({
        email: Yup.string().required().email(),
        password: Yup.string().required(),
    });

    const navigate = useNavigate();

    const handleSubmit = (values) => {
        let domain = 'https://bookstore.eraasoft.pro/api';
        let endPoint = '/login';
        let url = domain + endPoint;
        let dataToSend = { email: values.email, password: values.password };
        // Request to the backend
        axios
        .post(url, dataToSend)
        .then((res) => {
            console.log(res.data)
            toast.success('Login Success');
        })
        .catch((err) => {
            toast.error(err.response.data.error.message);
        });
    };


    return (
        <div className={`w-full h-dvh flex flex-col gap-10 items-center justify-center bg-[#F5F5F5] text-black`}>
            <h2 className='font-semibold font-sans text-[#D9176C]'>Welcome Back!</h2>
        <Formik initialValues={{ email: '', password: '', isChecked: false }} onSubmit={handleSubmit} validationSchema={validationSchema}>
            <Form className=" flex flex-col gap-6 w-screen p-3 md:w-100 md:p-0">
                <div>
                    <label className='font-semibold' htmlFor="email">Email</label>    
                    <Field className="w-full input bg-white rounded-lg shadow" name="email" type="text" placeholder="Enter you email" />
                    <ErrorMessage name="email" component={'p'} className="text-red-500" />
                </div>
                <div>
                    <label className='font-semibold' htmlFor="password">Password</label> 
                    <Field className="w-full input bg-white rounded-lg shadow" name="password" type="text" placeholder="Enter you password" />
                    <ErrorMessage name="password" component={'p'} className="text-red-500" />
                </div>

                <label className="flex gap-3">
                    <Field name="isChecked" className="" type="checkbox" />
                    Remember Me
                </label>

                <button type="submit" className="btn bg-[#D9176C] w-full">
                    Login
                </button>
                <Link to={'/auth/signup'} className="w-full text-center">
                    Don't have account ? <span className='text-[#D9176C]'> Signup</span>
                </Link>
                <div className='w-full flex flex-col gap-3'>
                    <p className='text-black/50 w-full text-center'>or</p>
                    <Link  className="w-full text-center flex gap-3 justify-center bg-white py-3 rounded-lg shadow">
                        <img src={google} alt="logo" />
                        <span className='text-[#222222]'> Login with Google</span>
                    </Link>
                    <Link className="w-full text-center flex gap-3 justify-center bg-white py-3 rounded-lg shadow">
                        <img src={facebook} alt="logo" /> 
                        <span className='text-[#222222]'> Login with Facebook</span>
                    </Link>
                </div>
            </Form>
        </Formik>
        </div>
    );
}


