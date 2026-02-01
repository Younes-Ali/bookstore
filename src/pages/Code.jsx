import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useState } from 'react';

export default function Code() {
    const [otp, setOtp] = useState(['', '', '', '']);
    
    const validationSchema = Yup.object({
        otp: Yup.string()
            .required('OTP is required')
            .length(4, 'OTP must be 4 digits'),
    });

    const navigate = useNavigate();

    const handleSubmit = (values) => {
        let domain = 'https://bookstore.eraasoft.pro/api';
        let endPoint = '/forget-password';
        let url = domain + endPoint;
        let dataToSend = { otp: values.otp };
        
        axios
            .post(url, dataToSend)
            .then((res) => {
                toast.success('Password reset successful');
                navigate('/new-password');
            })
            .catch((err) => {
                toast.error(err.response?.data?.message || 'Something went wrong');
                console.log(err);
            });
    };

    const handleOtpChange = (index, value, setFieldValue) => {
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);
        setFieldValue('otp', newOtp.join(''));

        if (value && index < 3) {
            document.getElementById(`otp-${index + 1}`)?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            document.getElementById(`otp-${index - 1}`)?.focus();
        }
    };

    return (
        <div className="w-full h-dvh flex flex-col gap-10 items-center mt-15 bg-[#F5F5F5] text-black px-4">
            <div className='flex flex-col gap-2 text-center'>
                <p className='text-lg font-bold text-[#D9176C]'>Reset your password!</p>
                <p className='text-[#22222280]'>Enter the 4 digits code that you received on your email</p>
            </div>
            
            <Formik 
                initialValues={{ otp: '' }} 
                onSubmit={handleSubmit} 
                validationSchema={validationSchema}
            >
                {({ setFieldValue }) => (
                    <Form className="flex flex-col gap-6 w-full max-w-md">
                        <div> 
                            <div className='w-full flex gap-4 justify-center'>
                                {[0, 1, 2, 3].map((index) => (
                                    <input
                                        key={index}
                                        id={`otp-${index}`}
                                        className="bg-white rounded-lg shadow w-14 h-14 md:w-16 md:h-16 border border-gray-300 text-center text-2xl font-bold focus:border-[#D9176C] focus:outline-none"
                                        type="text"
                                        maxLength={1}
                                        value={otp[index]}
                                        onChange={(e) => handleOtpChange(index, e.target.value, setFieldValue)}
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                    />
                                ))}
                            </div>
                            <ErrorMessage name="otp" component="p" className="text-red-500 text-sm mt-2 text-center" />
                        </div>

                        <button type="submit" className="btn bg-[#D9176C] text-white w-full py-3 rounded-lg hover:bg-[#b8135a] transition">
                            Reset password
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}