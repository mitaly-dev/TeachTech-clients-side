import React, { useContext, useState } from 'react';
import { FaFacebook, FaShoppingBasket } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

// Courses, FAQ, Blog, toggle
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
      <div className="px-4 py-5 mx-auto w-full md:px-24 lg:px-28 shadow-md ">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              className="inline-flex items-center mr-8"
            >
              <span className="ml-2 text-2xl font-bold tracking-wide text-gray-800 uppercase">
              Teach<span className=' text-3xl text-[#5755E7]'>Tech</span>
              </span>
            </Link>
            <ul className="flex items-center hidden space-x-8 lg:flex text-[#2b3543]">
              <li>
                <NavLink
                  to="/courses"
                  aria-label="courses"
                  title="courses"
                  className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faq"
                  aria-label="faq"
                  title="faq"
                  className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  aria-label="blog"
                  title="blog"
                  className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  aria-label="theme"
                  title="theme"
                  className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  theme
                </NavLink>
              </li>
            </ul>
          </div>
            {
              !user ?
              <Link to="login" className='bg-[#f9d423] py-1 px-6 text-lg rounded-full text-[#5755E7] font-semibold'>Login</Link> :
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/80/80/people" />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                    <Link className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </Link>
                    </li>
                    <li><Link>Settings</Link></li>
                    <li><Link>Logout</Link></li>
                </ul>
              </div>
            }
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
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <svg
                          className="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Company
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
                        <Link
                          to="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Product
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Features
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Pricing
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About us
                        </Link>
                      </li>
                      <li className='flex-col-reverse'>
                          <div className="dropdown dropdown-end">
                              <label tabIndex={0} className="btn btn-ghost btn-circle">
                                  <div className="indicator">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                  <span className="badge badge-sm indicator-item">8</span>
                                  </div>
                              </label>
                              <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                  <div className="card-body">
                                  <span className="font-bold text-lg">8 Items</span>
                                  <span className="text-info">Subtotal: $999</span>
                                  <div className="card-actions">
                                      <button className="btn btn-primary btn-block">View cart</button>
                                  </div>
                                  </div>
                              </div>
                          </div>
                          <div className="dropdown dropdown-end">
                              <label tabIndex={0} className="btn btn-circle avatar">
                                  <div className="w-10 rounded-full">
                                  <img src="https://placeimg.com/80/80/people" />
                                  </div>
                              </label>
                              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                  <li>
                                  <Link className="justify-between">
                                      Profile
                                      <span className="badge">New</span>
                                  </Link>
                                  </li>
                                  <li><Link>Settings</Link></li>
                                  <li><Link>Logout</Link></li>
                              </ul>
                          </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
        </div>
    );
};

export default Header;