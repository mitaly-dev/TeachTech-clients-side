import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import paypal from '../../assets/images/paypal.png'
import visa from '../../assets/images/visa.png'
import mastercard from '../../assets/images/mastercard.png'
import { toast } from 'react-toastify';
import Lottie from 'lottie-react'

const PrimiumAccess = () => {
    const course = useLoaderData()
    const {id,title,picture,price,rating,description,lectures} = course
    const [payment,setPayment] = useState()
    const navigate = useNavigate()

    const checkOutHandle=(event)=>{
        event.preventDefault()
        if(payment){
            navigate('/checkout-success')
        }
        else{
            toast.error('Please select a payment method',{autoClose:1500})
        }
    }
 
    return (
        <div className='py-14 bg-main'>
         <div className="leading-3 w-full font-semibold max-w-md p-8 space-y-3 rounded-xl shadow-lg border bg-white border-[#ddd]  text-gray-800 m-auto">
            <h1 className="text-2xl font-bold font-barlow text-main uppercase">{title}</h1>
            <p>id: {id}</p>
            <p className='text-[#ff0844] text-xl '>Price : ${price}</p>
            <form onSubmit={checkOutHandle} className="space-y-4 ng-untouched ng-pristine ng-valid font-lato">
               <h3 className="text-xl font-semibold font-barlow text-main mt-5">Payment method :</h3>
               <div className="flex items-center justify-between mb-4 border rounded-lg py-2 px-3">
                    <div className='flex items-center'>
                    <img src={paypal} alt="" className='h-[30px] w-[30px]'/>
                    <label htmlFor="paypal" className="cursor-pointer ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Paypal</label>
                    </div>
                    <input onChange={()=>setPayment('paypal')} id="paypal" type="radio" value="" name="payment" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  focus:outline-none "/>
                </div>
               <div className="flex items-center justify-between mb-4 border rounded-lg py-2 px-3">
                    <div className='flex items-center'>
                    <img src={visa} alt="" className='h-[30px] w-[30px]'/>
                    <label htmlFor="visa" className=" cursor-pointer ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Visa Payment</label>
                    </div>
                    <input onChange={()=>setPayment('visa')} id="visa" type="radio" value="" name="payment" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  focus:outline-none "/>
                </div>
               <div className="flex items-center justify-between mb-4 border rounded-lg py-2 px-3">
                    <div className='flex items-center'>
                    <img src={mastercard} alt="" className='h-[30px] w-[30px]'/>
                    <label htmlFor="mastercard" className="cursor-pointer ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Master Card</label>
                    </div>
                    <input onChange={()=>setPayment('mastercard')} id="mastercard" type="radio" value="" name="payment" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  focus:outline-none "/>
                </div>
                <button type='submit' className="block w-full py-5 text-center rounded-xl bg-gradient-to-r from-[#ff8b67] to-[#ff0844] hover:from-[#ff0844] hover:to-[#ff8b67] text-white  font-semibold text-[17px] ">CheckOut</button>
            </form>
        </div>
        </div>
    );
};

export default PrimiumAccess;