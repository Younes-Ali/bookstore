import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import {  useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export default function NewPass() {
    const validationSchema = Yup.object({
        password: Yup.string().required(),
    });

    const navigate = useNavigate();

    const handleSubmit = (values) => {
        let domain = 'https://bookstore.eraasoft.pro/api';
        let endPoint = 'reset-password';
        let url = domain + endPoint;
        let dataToSend = { password: values.email};
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
            <p className='text-lg font-bold text-[#D9176C]'>Create new password!</p>
            <div>
                <p className='text-[#22222280]'>
                    Create a strong password
                </p>
                <p className='text-[#22222280]'>
                    Your new password must be different from previous one
                </p>
            </div>
        </div>
        <Formik 
            initialValues={{email: ''}} 
            onSubmit={handleSubmit} 
            validationSchema={validationSchema}
        >
            <Form className="flex flex-col gap-6 w-screen p-3 md:w-100 md:p-0">
                
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

                <button type="submit" className="btn bg-[#D9176C] w-full">
                    Reset password
                </button>
                
            </Form>
        </Formik>
    </div>
);
}
