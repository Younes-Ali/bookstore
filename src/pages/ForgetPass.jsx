import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import {  useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export default function ForgetPass() {
    const validationSchema = Yup.object({
        email: Yup.string().required().email(),
    });

    const navigate = useNavigate();

    const handleSubmit = (values) => {
        let domain = 'https://bookstore.eraasoft.pro/api';
        let endPoint = '/forget-password';
        let url = domain + endPoint;
        let dataToSend = { email: values.email};
        // Request to the backend
        axios
        .post(url, dataToSend)
        .then((res) => {
            toast.success('Sending Success');
            navigate('/auth/reset-password');
        })
        .catch((err) => {
            console.log(err);
        });
    };

  return (
    <div className={`w-full h-dvh flex flex-col gap-10 items-center mt-15 bg-[#F5F5F5] text-black`}>
        <div className='flex flex-col gap-2 text-center'>
            <p className='text-lg font-bold text-[#D9176C]'>Forget Password?</p>
            <p className='text-[#22222280]'>Enter your email to reset your password</p>
        </div>
        <Formik 
            initialValues={{email: ''}} 
            onSubmit={handleSubmit} 
            validationSchema={validationSchema}
        >
            <Form className="flex flex-col gap-6 w-screen p-3 md:w-100 md:p-0">
                
                <div>
                    <label className='font-semibold' htmlFor="email">Email</label>    
                    <Field className="w-full input bg-white rounded-lg shadow" name="email" type="text" placeholder="example@gmail.com" />
                    <ErrorMessage name="email" component={'p'} className="text-red-500" />
                </div>

                <button type="submit" className="btn bg-[#D9176C] w-full">
                    Send reset code
                </button>
                
            </Form>
        </Formik>
    </div>
);
}
