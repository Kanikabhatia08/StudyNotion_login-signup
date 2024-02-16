import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";


export default function LoginForm() {

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

    return (
        <form>
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

                <Link to="#">
                    <p>Forgot Password</p>
                </Link>
            </label>

            <button>
                Sign In
            </button>
        </form>
    )
}
