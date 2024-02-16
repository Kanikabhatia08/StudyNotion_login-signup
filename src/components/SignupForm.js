import React, { useState } from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";


export default function SignupForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName:"",
        email: "",
        password:"",
        confirmPassword: ""

    })

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event){
        setFormData( (prevData) => (
            {
                ...prevData, 
                [event.target.name] : event.target.value
            }
        ))

    }

  return (
    <div>
        {/* student instructor tab */}

        <div>
            <button>
                Student
            </button>
            <button>
                Instructor
            </button>
        </div>
        <form>
            <label>
                <p>First Name<sup>*</sup></p>
                <input 
                    required
                    type="text"
                    name="firstName"
                    onChange={changeHandler}
                    value={formData.firstName}
                    placeholder='Enter First Name'
                />
            </label>

            <label>
                <p>Last Name<sup>*</sup></p>
                <input 
                    required
                    type="text"
                    name="lastName"
                    onChange={changeHandler}
                    value={formData.lastName}
                    placeholder='Enter Last Name'
                />
            </label>

            <label>
                <p>
                    Email address <sup>*</sup>
                </p>
                <input
                    required
                    type="email" name='email'
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder='Enter Email Id'
                />
            </label>

            <label>
                <p>
                    Password <sup>*</sup>
                </p>
                <input
                    required name='password'
                    type={showPassword ? ("text") : ("password")}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter Password'
                />
                <span onClick={()=>{setShowPassword((prev) => !prev)}}>
                    {
                        showPassword ? 
                        (<AiOutlineEye />) : 
                        (<AiOutlineEyeInvisible/>)
                    }
                </span>
            </label>

            <label>
                <p>
                    confirm Password <sup>*</sup>
                </p>
                <input
                    required name='confirmPassword'
                    type={showPassword ? ("text") : ("password")}
                    value={formData.confirmPassword}
                    onChange={changeHandler}
                    placeholder='Enter Password'
                />

                <span onClick={()=>{setShowPassword((prev) => !prev)}}>
                    {
                        showPassword ? 
                        (<AiOutlineEye />) : 
                        (<AiOutlineEyeInvisible/>)
                    }
                </span>

            </label>

            <button>
                Create Account
            </button>


        </form>
    </div>
  )
}
