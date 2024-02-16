import React from 'react'
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

 const Navbar = ({isLoggedIn, setIsLoggedIn}) => {
  return (
    <div className='flex justify-evenly'>

        <Link to="/">
            <img src={logo} alt='logo' width={160} height={32} loading="lazy"/>
        </Link>

        <nav>
            <ul className='flex gap-3'>
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
        <div className='flex gap-3'>

            {!isLoggedIn &&
                <Link to="/login">
                    <button>
                        Log In
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                <button>
                    Sign Up
                </button>
                </Link>
            }
            

            { isLoggedIn &&
                <Link to="/">
                <button onClick={() => {
                    setIsLoggedIn(false);
                    toast.success("Logged Out")
                }}>
                    Log Out
                </button>
                </Link>
            }

            { isLoggedIn &&
                <Link to="/dashoard">
                    <button>
                        Dashboard
                    </button>
                </Link>
            }

        </div>
    </div>
  )
}

export default Navbar;
