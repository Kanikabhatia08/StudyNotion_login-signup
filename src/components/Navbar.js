import React from 'react'
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

 const Navbar = ({isLoggedIn, setIsLoggedIn}) => {
  return (
    <div className='flex mt-6 justify-between mx-auto items-center w-11/12 max-w-[1160px]'>

        <Link to="/">
            <img src={logo} alt='logo' width={160} height={32} loading="lazy"/>
        </Link>

        <nav>
            <ul className='flex gap-x-6 text-white  '>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/conatct">Contact</Link>
                </li>
            </ul>
        </nav>

    {/* Buttonss */}
        <div className='flex items-center gap-x-4 text-slate-300'>

            {!isLoggedIn &&
                <Link to="/login">
                    <button className='bg-richblack-800 py-[8px] px-[12px] rounded-lg border border-richblack-700'>
                        Log In
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                <button className='bg-richblack-800 py-[8px] px-[12px] rounded-lg border border-richblack-700'>
                    Sign Up
                </button>
                </Link>
            }
            

            { isLoggedIn &&
                <Link to="/">
                <button className='bg-richblack-800 py-[8px] px-[12px] rounded-lg border border-richblack-700'
                onClick={() => {
                    setIsLoggedIn(false);
                    toast.success("Logged Out")
                }}>
                    Log Out
                </button>
                </Link>
            }

            { isLoggedIn &&
                <Link to="/dashboard">
                    <button className='bg-richblack-800 py-[8px] px-[12px] rounded-lg border border-richblack-700'>
                        Dashboard
                    </button>
                </Link>
            }

        </div>
    </div>
  )
}

export default Navbar;
