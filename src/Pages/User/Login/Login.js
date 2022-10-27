import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-toastify';
import ResetPasswordModal from '../ResetPasswordModal/ResetPasswordModal';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const {
        userSignIn,
        signWithGoogle,
        signWithGithub
    } = useContext(AuthContext)
    const navigate=useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'

    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [disabled,setDisabled] = useState(true)
    const [open,setOpen] = useState(false)

    // form error handling
    const [formError,setFormError] = useState({
        emailError:'',
        passwordError:''
    })
    const {emailError,passwordError} = formError

    const handleEmail=(event)=>{
        const value = event.target.value
        if(!/\S+@\S+\.\S+/.test(value)){
            setFormError(prev=>{
                return {...prev,emailError:'Email is not valid!'}
            })
            setEmail("")
            return
        }
            setFormError(prev=>{
                return {...prev,emailError:''}
            })
            setEmail(value)
    }

    const handlePassword=(event)=>{
        const value = event.target.value
        setPassword(value)
    }
    // handle remember me checkbox
    const handleRememberMe=()=>{
        setDisabled(!disabled)
    }

    // user signIn handle
    const userSignInHandle=(event)=>{
        event.preventDefault()
        if(email && password){
            userSignIn(email,password)
            .then(result=>{
              toast.success('Login Successfull',{autoClose:1000})
              navigate(from, {replace:true})
            })
            .catch(error=>toast.error(error.message,{autoClose:1500}))
        }
        else{toast.error('Plase provide us all valid information',{autoClose:1500})}
    }

    // sign with socialprovider
    const googleSignInHandle=()=>{
        signWithGoogle()
        .then(result=>{
            navigate(from,{replace:true})
        })
    }

    const githubSignInHandle=()=>{
       signWithGithub()
       .then(result=>{
        navigate(from,{replace:true})
    })
    }

    return (
        <div className='py-14 bg-main'>
         <div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-lg border bg-white border-[#ddd]  text-gray-800 m-auto">
            <h1 className="text-2xl font-bold text-center font-barlow text-main uppercase">LogIn</h1>
            <form onSubmit={userSignInHandle} className="space-y-4 ng-untouched ng-pristine ng-valid font-lato">
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block text-gray-600">Email<span className='text-main text-[19px] font-bold'>*</span></label>
                    <input onBlur={handleEmail} type="email" name="email" id="email" placeholder="Enter your email" className="border border-[d5d5d5] w-full px-4 py-3 rounded-md outline-none text-gray-600" />
                    <p className='font-semibold text-red-600'>{emailError}</p>
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block text-gray-500">Password<span className='text-main text-[19px] font-bold'>*</span></label>
                    <div className='relative'>
                    <input onBlur={handlePassword} type={open? "text" : "password"} name="password" id="password" placeholder="Enter your password" className="border border-[d5d5d5] w-full px-4 py-3 rounded-md outline-none text-gray-600" />
                    {
                        open?
                        <FaEye onClick={()=>setOpen(!open)} className='cursor-pointer absolute right-3 text-lg text-gray-500 text-[17px] top-4'></FaEye> : 
                        <FaEyeSlash onClick={()=>setOpen(!open)} className='cursor-pointer absolute right-3 text-lg text-gray-500 text-[17px] top-4'></FaEyeSlash> 
                    }
                    </div>
                    <p className='font-semibold text-red-600'>{passwordError}</p>
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <input
                         onChange={handleRememberMe}
                         type="checkbox" name="remember" id="remember" aria-label="Remember me" className="mr-1 rounded-sm focus:ring-violet-400 focus:dark:border-violet-400 focus:ring-2 accent-violet-400" />
                        <label htmlFor="remember" className="text-sm dark:text-gray-400">Remember me</label>
                    </div>
                    <div>
                    <label htmlFor="my-modal-6" className="cursor-pointer font-semibold modal-button text-sm dark:text-gray-400">
                        Forgot your password?
                    </label>
                    <ResetPasswordModal></ResetPasswordModal>
                    </div>
                </div>
                <button type='submit' className="block w-full p-3 text-center rounded-xl bg-gradient-to-r from-[#ff8b67] to-[#ff0844] hover:from-[#ff0844] hover:to-[#ff8b67] text-white  font-semibold text-[18px] " disabled={disabled}>Log In</button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            </div>
            <div className="flex justify-center space-x-4">
                <button onClick={googleSignInHandle} aria-label="Log in with Google" className="p-3 rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                </button>
                <button onClick={githubSignInHandle} aria-label="Log in with GitHub" className="p-3 rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                    </svg>
                </button>
            </div>
            <p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
                <Link rel="noopener noreferrer" to="/register" className="underline text-main">Register</Link>
            </p>
        </div>
    </div>
    );
};

export default Login;