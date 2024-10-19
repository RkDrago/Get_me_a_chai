"use client"
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { fetchuser, updateProfile } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Dashboard = () => {
    const { data: session, update } = useSession()
    const router = useRouter()
    const [form, setForm] = useState({})

    useEffect(() => {
        if (!session) {
            router.push("/login")
        }
        else{
            getData()
        }
    }, [router, session])

    const getData = async () => {
        let u = await fetchuser(session.user.name)
        setForm(u)
    }


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        let a = await updateProfile(e, session.user.name)
        toast.success('Profile has been updated!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
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

            <div className='py-5'>
                <h1 className='text-white font-bold text-2xl text-center'>Welcome to your Dashboard</h1>
                <div className="flex md:w-[50svw] mx-auto">
                    <form className='flex flex-col px-10 py-5 w-full gap-2' action={handleSubmit}>
                        <div className='flex flex-col gap-1'>
                            <label className='pl-2' htmlFor="name">Name</label>
                            <input value={form.name ? form.name : ""} onChange={(e) => { handleChange(e) }} id='name' name='name' type="text" className="w-full px-3 py-1.5 rounded-lg bg-slate-800" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='pl-2' htmlFor="email">Email</label>
                            <input value={form.email ? form.email : ""} onChange={(e) => { handleChange(e) }} id='email' name='email' type="email" className="w-full px-3 py-1.5 rounded-lg bg-slate-800" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='pl-2' htmlFor="username">Username</label>
                            <input value={form.username ? form.username : ""} onChange={(e) => { handleChange(e) }} id='username' name='username' type="text" className="w-full px-3 py-1.5 rounded-lg bg-slate-800" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='pl-2' htmlFor="profilepic">Profile Picture</label>
                            <input value={form.profilepic ? form.profilepic : ""} onChange={(e) => { handleChange(e) }} id='profilepic' name='profilepic' type="text" className="w-full px-3 py-1.5 rounded-lg bg-slate-800" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='pl-2' htmlFor="coverpic">Cover Picture</label>
                            <input value={form.coverpic ? form.coverpic : ""} onChange={(e) => { handleChange(e) }} id='coverpic' name='coverpic' type="text" className="w-full px-3 py-1.5 rounded-lg bg-slate-800" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='pl-2' htmlFor="razorpayid">Razorpay ID</label>
                            <input value={form.razorpayid ? form.razorpayid : ""} onChange={(e) => { handleChange(e) }} id='razorpayid' name='razorpayid' type="text" className="w-full px-3 py-1.5 rounded-lg bg-slate-800" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='pl-2' htmlFor="razorpaysecret">Razorpay Secret</label>
                            <input value={form.razorpaysecret ? form.razorpaysecret : ""} onChange={(e) => { handleChange(e) }} id='razorpaysecret' name='razorpaysecret' type="password" className="w-full px-3 py-1.5 rounded-lg bg-slate-800" />
                        </div>

                        <button type="submit" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-5">Save</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Dashboard
