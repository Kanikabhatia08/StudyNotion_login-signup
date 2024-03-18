import React, { useState } from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function SignupForm({setIsLoggedIn}) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName:"",
        email: "",
        password:"",
        confirmPassword: ""

    })

    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("Student");

    function changeHandler(event){
        setFormData( (prevData) => (
            {
                ...prevData, 
                [event.target.name] : event.target.value
            }
        ))

    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("Passwords do not Match!")
            return;
        }
        if(formData.password.length < 6 && formData.confirmPassword.length < 6 ){
            toast.error("Password should contain 6 digits")
        }
        setIsLoggedIn(true)
        toast.success("Account Created")
        const accountData ={
            ...formData
        };

        const finalData = {
            ...accountData,
            accountType
        }

        console.log(finalData, "finalllllllll")
        navigate("/dashboard")
    }

  return (
    <div >
        {/* student instructor tab */}

        <div 
            className='flex max-w-max bg-richblack-800 p-2 gap-x-2 my-6 rounded-full'>
            <button onClick={() => setAccountType("Student")}
                className={`${accountType === "Student" ? 
                "bg-richblack-900 text-richblack-5 rounded-full py-2 px-5 transition-all duration-200" : 
                "bg-transparent text-richblack-200"}`}>
                Student
            </button>
            <button onClick={() => setAccountType("Instructor")}
                className={`${accountType === "Instructor" ? 
                    "bg-richblack-900 text-richblack-5 rounded-full py-2 px-5 transition-all duration-200" : 
                    "bg-transparent text-richblack-200"}`}>
                Instructor
            </button>
        </div>
        <form onSubmit={submitHandler}>
            <div className='flex gap-3 justify-center'>

            <label>
                <p
                className='w-full text-sm text-richblack-5 mb-1 '
                >First Name<sup>*</sup></p>
                <input 
                    required
                    type="text"
                    name="firstName"
                    onChange={changeHandler}
                    value={formData.firstName}
                    placeholder='Enter First Name'
                    className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-3'

                />
            </label>

            <label>
                <p
                className='w-full text-sm text-richblack-5 mb-1 '
                >Last Name<sup>*</sup></p>
                <input 
                    required
                    type="text"
                    name="lastName"
                    onChange={changeHandler}
                    value={formData.lastName}
                    placeholder='Enter Last Name'
                    className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-3'

                />
            </label>

            </div>
            

            <label>
                <p 
                className='text-sm text-richblack-5 my-2 mt-5'>
                    Email address <sup>*</sup>
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

            <div className='flex justify-between gap-3'>

            <label className='relative'>
                <p className='w-full text-sm text-richblack-5 my-2 mt-5'>
                    Password <sup>*</sup>
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
                className='absolute right-3 top-[60px] cursor-pointer'
                onClick={()=>{setShowPassword((prev) => !prev)}}>
                    {
                        showPassword ? 
                        (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>) : 
                        (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>)
                    }
                </span>
            </label>

            <label className='relative'>
                <p className='w-full text-sm text-richblack-5 my-2 mt-5 '>
                    Confirm Password <sup>*</sup>
                </p>
                <input
                    required name='confirmPassword'
                    type={showConfirmPassword ? ("text") : ("password")}
                    value={formData.confirmPassword}
                    onChange={changeHandler}
                    placeholder='Enter Password'
                    className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-3'

                />

                <span 
                className='absolute right-3 top-[60px] cursor-pointer'
                onClick={()=>{setShowConfirmPassword((prev) => !prev)}}>
                    {
                        showConfirmPassword ? 
                        (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>) : 
                        (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>)
                    }
                </span>

            </label>


            </div>

            
            <button className='w-full bg-yellow-50 font-medium rounded-lg px-3 py-2 mt-6 text-richblack-700'>
                Create Account
            </button>


        </form>
    </div>
  )
}
