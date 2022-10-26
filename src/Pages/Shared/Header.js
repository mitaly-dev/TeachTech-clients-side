import React, { useContext, useState } from 'react';
import { FaFacebook, FaShoppingBasket } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import logo from '../../assets/images/logo.svg'
import { toast } from 'react-toastify';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {user,logOut} = useContext(AuthContext)
    const [userExit,setUserExit] = useState(false)
    const [light,setLight] = useState(true)

    const profileMouseEnter=()=>{
      setUserExit(true)
    }
    const profileMouseLeave=()=>{
      setUserExit(false)
    }

    const logOutHandle=()=>{
        logOut()
        .then(()=>toast.warning('Lof Out successfull',{autoClose:1500}))
    }

    return (
      <div className="px-4 mx-auto w-full md:px-24 lg:px-28 shadow-md bg-white">
        <div className="relative flex items-center justify-between h-[75px]">
          <div className="flex items-center">
            <Link
              to="/"
              className="inline-flex items-center mr-8"
            >
              <img src={logo} alt="logo" className='w-[20px]'/>
              <span className="ml-2 text-[20px] font-bold tracking-wide text-gray-800 uppercase">
              Teach<span className=' text-2xl text-[#5755E7]'>Tech</span>
              </span>
            </Link>
            <ul className="flex items-center hidden space-x-8 lg:flex text-[#2b3543]">
              <li>
                <NavLink
                  to="/home"
                  aria-label="courses"
                  title="courses"
                  className={({isActive})=>isActive?"font-medium text-[#5755E7] tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/courses"
                  aria-label="courses"
                  title="courses"
                  className={({isActive})=>isActive?"font-medium text-[#5755E7] tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"}
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faq"
                  aria-label="faq"
                  title="faq"
                  className={({isActive})=>isActive?"font-medium text-[#5755E7] tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"}
                >
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  aria-label="blog"
                  title="blog"
                  className={({isActive})=>isActive?"font-medium text-[#5755E7] tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <button
                  onClick={()=>setLight(!light)} 
                  className={light?"font-medium text-[#5755E7] border-main border px-3 py-1 rounded-lg" : "font-medium border border-black  px-3 py-1 rounded-lg"}
                >
                  {
                    light?"Light" : "Dark"
                  }
                </button>
              </li>
            </ul>
          </div>
         
          <div className='flex items-center'>
           <div className='flex items-center hidden lg:flex'>
          <p className={userExit? "opacity-100 text-blue-800 font-semibold" : 'opacity-0'}>{user?.displayName}</p>
            {
              !user?
              <Link to="login" className='bg-[#f9d423] py-1 px-6 text-lg rounded-full text-[#5755E7] font-semibold'>Login</Link> :
              <div className="dropdown dropdown-end ml-3" onMouseEnter={profileMouseEnter} onMouseLeave={profileMouseLeave}>
                <label tabIndex={0} className="btn btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src={user?.photoURL} alt="user" />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                    <Link to='/profile' className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </Link>
                    </li>
                    <li><button onClick={logOutHandle}>Logout</button></li>
                </ul>
              </div>
            }
            </div>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-50">
                <div className="p-5 bg-white border rounded shadow-sm ">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img src={logo} alt="logo" className='w-[20px]'/>
                        <span className="ml-2 text-[20px] font-bold tracking-wide text-gray-800 uppercase">
                        Teach<span className=' text-2xl text-[#5755E7]'>Tech</span>
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                    <li>
                      <NavLink
                        to="/home"
                        aria-label="courses"
                        title="courses"
                        className={({isActive})=>isActive?"font-medium text-[#5755E7] tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/courses"
                        aria-label="courses"
                        title="courses"
                        className={({isActive})=>isActive?"font-medium text-[#5755E7] tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"}
                      >
                        Courses
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/faq"
                        aria-label="faq"
                        title="faq"
                        className={({isActive})=>isActive?"font-medium text-[#5755E7] tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"}
                      >
                        FAQ
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog"
                        aria-label="blog"
                        title="blog"
                        className={({isActive})=>isActive?"font-medium text-[#5755E7] tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"}
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li>
                    <button
                      onClick={()=>setLight(!light)} 
                      className={light?"font-medium text-[#5755E7] border-main border px-3 py-1 rounded-lg" : "font-medium border border-black  px-3 py-1 rounded-lg"}
                    >
                      {
                        light?"Light" : "Dark"
                      }
                    </button>
                  </li>
                    <div className='flex items-center'>
                      <p className={userExit? "opacity-100 text-blue-800 font-semibold" : 'opacity-0'}>{user?.displayName}</p>
                        {
                          !user?
                          <Link to="login" className='bg-[#f9d423] py-1 px-6 text-lg rounded-full text-[#5755E7] font-semibold'>Login</Link> :
                          <div className="dropdown dropdown-start md:dropdown-end ml-3" onMouseEnter={profileMouseEnter} onMouseLeave={profileMouseLeave}>
                            <label tabIndex={0} className="btn btn-circle avatar">
                                <div className="w-10 rounded-full">
                                <img src={user?.photoURL} alt="user" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                <Link to='/profile' className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                                </li>
                                <li><button onClick={logOutHandle}>Logout</button></li>
                            </ul>
                          </div>
                        }
                        </div>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
          </div>
        </div>
        </div>
    );
};

export default Header;