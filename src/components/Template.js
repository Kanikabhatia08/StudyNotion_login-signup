import React from 'react'
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import { FcGoogle } from "react-icons/fc";
import frameImage from "../assets/frame.png"

const Template = ({title, desc1, desc2, image, formType, setIsLoggedIn}) => {
    return (
        <div className='mt-10 flex w-11/12 max-w-[1160px] justify-between py-12 mx-auto  gap-y-8'>
            <div className='w-11/12 max-w-[450px]'>
                <h1 
                    className='text-richblack-5 font-semibold text-3xl'> 
                    {title} </h1>
                <p className='text-lg mt-4 flex flex-col'>
                    <span className='text-richblack-100'> {desc1} </span>
                    <span className='text-blue-100 italic'> {desc2} </span>
                </p>

                {
                    formType === "signup" ?
                    (<SignupForm setIsLoggedIn={setIsLoggedIn}/>)  :
                    (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
                }

                <div className='flex w-full items-center my-4 gap-x-2'>
                    <div className='w-full h-[1px] bg-richblack-700'></div>
                    <p className='text-richblack-700 font-medium'> OR </p>
                    <div className='w-full h-[1px] bg-richblack-700'></div>
                </div>

                <button className='w-full flex items-center justify-center rounded-lg 
                font-medium text-richblack-100 gap-2 border border-richblack-700 px-3 py-2'>
                    <FcGoogle />
                    <p className='text-richblack-7'>Signup With Google</p>
                </button>
            </div>
            


            <div className='relative w-11/12 max-w-[450px]'>
                <img src={frameImage} alt='pattern'
                width={558} height={504} loading='lazy'/>

                <img src={image} alt='srudents'
                className='absolute -top-4 right-4'
                width={558} height={490} loading='lazy'/>
            </div>
        </div>
    )
}

export default Template;
