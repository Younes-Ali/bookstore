import getInTouch from "../../assets/images/getInTouch.jpg";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { IoPerson } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot, FaPencil } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { BsChatSquareTextFill } from "react-icons/bs";

export default function GetInTouch() {
    const contactInfo = [
        { title: "Phone", content: "01123456789", icon: <LuPhoneCall /> },
        { title: "Email", content: "Example@gmail.com", icon: <BsChatSquareTextFill /> },
        { title: "Address", content: "adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,", icon: <FaLocationDot /> },
    ];
    const validationSchema = Yup.object({
        name: Yup.string().min(2).required(),
        email: Yup.string().email().required(),
        message: Yup.string().min(10).required(),
    });
    const initialValues = {
        name: "",
        email: "",
        message: "",
    };
    const handleSubmit = (values, { resetForm }) => {
        toast("Thank you for contacting us!", {
        icon: "💕",
        });
        resetForm();
    };
    return (
        <div
        className="w-full bg-no-repeat bg-center bg-cover py-7 xl:py-30 px-10 xl:px-42.5 flex justify-center items-center"
        style={{
            backgroundImage: `linear-gradient(rgba(59, 47, 74, 0.8), rgba(59, 47, 74, 0.8)), url(${getInTouch})`,
        }}
        >
        <div className=" md:w-full flex flex-col lg:flex-row gap-47.5">
            <div className="lg:w-1/2 flex flex-col text-white">
                <h2 className="text-white p-2 text-xl md:text-4xl font-bold mb-2">
                    Have a Questions?
                </h2>
                <h2 className="text-white p-2 font-bold text-xl md:text-4xl mb-4">Get in Touch</h2>
                <p className="text-white/50 p-2 text-sm md:text-lg">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                    ducimus exercitationem dolor, et ullam harum rem accusantium
                    consequatur ipsum doloremque ve
                </p>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form className="w-full flex flex-col p-2 gap-5 text-white/50 mt-15">
                    <div className="md:w-full flex md:flex-row flex-col gap-2 justify-between">
                        <div className="relative flex-1">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-xl">
                            <IoPerson />
                        </span>
                        <Field
                            name="name"
                            placeholder="Name"
                            className="input border border-white/50 rounded-lg p-4 bg-transparent pl-12"
                        />
                        <ErrorMessage name="name" component={'p'} className="text-red-500" />
                        </div>
                        <div className="relative flex-1">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-xl">
                            <MdOutlineMailOutline />
                        </span>
                        <Field
                            name="email"
                            type="email"
                            placeholder="Email"
                            className="input border border-white/50 rounded-lg p-4 bg-transparent pl-12"
                        />
                        <ErrorMessage name="email" component={'p'} className="text-red-500" />
                        </div>
                    </div>
                    <div className='relative flex-1'>
                        <span className='absolute left-4 top-7 -translate-y-1/2 text-white/50 text-xl'>
                            <FaPencil />
                        </span>  
                        <Field
                            as="textarea"
                            rows="7"
                            name="message"
                            placeholder="Your Message"
                            className="input w-full h-50 border border-white/50 rounded-lg p-4 bg-transparent pl-12 resize-none"
                        />
                        <ErrorMessage name="message" component={'p'} className="text-red-500" />
                    </div>   
                    <div className="w-full text-center">
                        <button
                        type="submit"
                        className="btn p-6 text-lg text-white bg-[#D9176C] hover:bg-[#D9176C]/80 w-fit rounded-lg "
                        >
                        Send Message
                        </button>
                    </div>
                    </Form>
                </Formik>
            </div>
            <div>
            <div className="w-full p-2 md:p-0 flex flex-col gap-8">
                {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-6">
                    <div className="text-xl p-3.5 bg-white text-[#D9176C] rounded-xl">{info.icon}</div>
                    <p className="text-white">{info.content}</p>
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    );
}
