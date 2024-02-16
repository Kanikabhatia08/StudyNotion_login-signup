import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import toast from 'react-hot-toast';


export default function LoginForm({setIsLoggedIn}) {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event){
        setFormData( (prevData) => (
            {
                ...prevData, 
                [event.target.name] : event.target.value
            }
        ))

    }

    const navigate = useNavigate()

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard")
    }

    return (
        <form onSubmit={submitHandler}
            className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full'>
                <p className='text-sm text-richblack-5 mb-1 '>
                    Email address <sup className='text-pink-200'>*</sup>
                </p>
                <input
                    required
                    type="email" name='email'
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder='Enter Email Id'
                    className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-3'
                />
            </label>

            <label className='relative'>
                <p className='text-sm text-richblack-5 mb-1 '>
                    Password <sup className='text-pink-200'>*</sup>
                </p>
                <input
                    required name='password'
                    type={showPassword ? ("text") : ("password")}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter Password'
                    className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-3'

                />

                <span 
                className='absolute right-3 top-[38px] cursor-pointer'
                onClick={()=>{setShowPassword((prev) => !prev)}}>
                    {
                        showPassword ? 
                        (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>) : 
                        (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>)
                    }
                </span>

                <Link to="#">
                    <p className='text-xs m-1 text-blue-100 max-w-max ml-auto'>Forgot Password</p>
                </Link>
            </label>

            <button className='bg-yellow-50 font-medium rounded-lg px-3 py-2 mt-6 text-richblack-700'>
                Sign In
            </button>
        </form>
    )
}
