"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { useSession } from 'next-auth/react'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { useSearchParams, useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaymentPage = ({ username }) => {
    // const { data: session } = useSession()

    const [paymentform, setPaymentform] = useState({name: "", message: "", amount: ""})
    const [currentUser, setCurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (searchParams.get("paymentdone") == "true") {
            toast.success('Thanks for your donation!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            router.push(`/${username}`)
        }
    }, [])



    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async () => {
        let u = await fetchuser(username)
        setCurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
    }



    const pay = async (amount) => {
        //Get the order ID
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            // Enter the Key ID generated from the Dashboard
            "key": currentUser.razorpayid,
            // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "amount": amount,
            "currency": "INR",
            //your business name
            "name": "Get me a Chai",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "order_id": orderId,
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                //Provide the customer's phone number for better conversion rates 
                "contact": "9000090000"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />

            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className='cover relative'>
                <img src={currentUser.coverpic} alt="" />
                <div className="absolute bottom-[-70px] left-[calc(50%-72px)] size-36 rounded-full border-4 border-slate-800 overflow-hidden ">
                    <img className='object-cover size-36' src={currentUser.profilepic} alt="" />
                </div>
            </div>
            <div className="flex mt-20 flex-col items-center gap-1">
                <div className="font-bold text-xl">
                    @{username}
                </div>
                <div className="text-sm text-slate-400">
                    Help {username} by buying a chai!
                </div>
                <div className=" text-slate-300">
                    {payments.length} Payments • ₹{payments.reduce((a, b) => a + b.amount, 0)}/raised
                </div>
                <div className="payment xl:w-[70svw] flex flex-col xl:flex-row gap-6 py-10">
                    <div className="supporters w-full bg-slate-900 rounded-xl p-4 xl:p-8 max-h-[500px]">
                        {/* show the list of supporters as a leaderboard */}
                        <h2 className='text-xl font-bold text-center mb-4'>Supporters leaderboard</h2>
                        <ul className='max-h-[390px] overflow-y-scroll'>
                            {payments.length == 0 && <li className='text-lg text-slate-400 italic p-3'>No payments yet</li>}
                            {payments.map((p, i) => {
                                return <li className='my-2 flex gap-4 items-center'>
                                    <span><img width={40} src="/imgs/newdonour.gif" alt="🧟" /></span>
                                    <div>
                                        <div>
                                            {p.name} donated<span className='font-bold'> ₹{p.amount} </span>with a message:
                                        </div>
                                        <span>"{p.message}"</span>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="makePayment w-full bg-slate-900 rounded-xl pt-8 p-4 xl:p-8 pb-16 relative">
                        <h2 className='text-xl font-bold text-center mb-4'>Make a Payment</h2>
                        <div className="flex gap-2 flex-col">
                            <input onChange={handleChange} name="name" value={paymentform.name} type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                            <input onChange={handleChange} name="message" value={paymentform.message} type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
                            <div className="flex gap-2">
                                <input onChange={handleChange} name="amount" value={paymentform.amount} type="text" className='w-2/3 p-3 rounded-lg bg-slate-800' placeholder='Enter Ammount' />
                                <button onClick={() => { pay(Number.parseInt(paymentform.amount) * 100) }} className='w-1/3 p-3 rounded-lg text-white bg-gradient-to-br from-purple-900 to-blue-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold disabled:from-purple-200' disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount?.length < 1}>Pay</button>
                            </div>
                        </div>
                        <div className='flex gap-2 mt-5'>
                            <button className='p-3 rounded-lg bg-slate-800 disabled:bg-red-300' onClick={() => { pay(1000) }} disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4} >Pay ₹10</button>
                            <button className='p-3 rounded-lg bg-slate-800 disabled:bg-red-300' onClick={() => { pay(2000) }} disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4} >Pay ₹20</button>
                            <button className='p-3 rounded-lg bg-slate-800 disabled:bg-red-300' onClick={() => { pay(3000) }} disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4} >Pay ₹30</button>
                        </div>
                        <div className="flex absolute right-10 bottom-4 opacity-40">
                            <img width={150} src="/icons/razorpay.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
