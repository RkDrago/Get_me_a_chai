"use client"
import React, { useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'


const Login = () => {
    const { data: session } = useSession()
    const router = useRouter()
    
    useEffect(() => {
        document.title = "Login - Get Me A Chai"
        if (session) {
            router.push("/dashboard")
        }
    }, [router, session])


    return (
        <>
            <div className='py-5'>
                <h1 className='text-white font-bold text-2xl text-center'>Login to get Started</h1>
                <div className="flex justify-center gap-24 mt-4">
                    <div className="hidden xl:flex">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" width={500} className="img-fluid" alt="Phone image" />
                    </div>
                    <div className="text-white">
                        <form className='justify-center flex flex-col px-10 py-5 '>
                            <div className='mb-4'>
                                <input type="email" placeholder='Email Address' className="outline-blue-700 outline-offset-2 w-full text-black py-[5px] px-4 rounded-lg" />
                            </div>
                            <div className='mb-4'>
                                <input type="password" placeholder='Password' className="outline-blue-700 outline-offset-2 w-full text-black py-[5px] px-4 rounded-lg" />
                            </div>
                            <div className="flex justify-between px-4">
                                <div className="form-check">
                                    <input type="checkbox" onClick={(e) => { e.checked = !e.checked }} />
                                    <label> Remember me </label>
                                </div>
                                <a href="/">Forgot password?</a>
                            </div>

                            <button type="submit" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-7">Sign in</button>

                            <div className="my-1 flex items-center">
                                <div className="h-[1px] w-full bg-gray-500"></div>
                                <p className="px-2 text-gray-200">OR</p>
                                <div className="h-[1px] w-full bg-gray-500"></div>
                            </div>
                        </form>
                        <div className='grid xl:grid-cols-2 gap-x-4 justify-center'>
                            <button className="bg-sky-100 text-black flex items-center gap-5 py-3 pl-3 rounded-xl mb-4 font-bold w-72" href="/">
                                <img src="/icons/google.png" width={30} alt="" />
                                Continue with Google
                            </button>
                            <button className="bg-sky-100 text-black flex items-center gap-5 py-3 pl-3 rounded-xl mb-4 font-bold w-72" href="/">
                                <img src="/icons/linkedin.png" width={30} alt="" />
                                Continue with LinkedIn
                            </button>
                            <button className="bg-sky-100 text-black flex items-center gap-5 py-3 pl-3 rounded-xl mb-4 font-bold w-72" href="/">
                                <img src="/icons/twitter.png" width={30} alt="" />
                                Continue with Twitter
                            </button>
                            <button className="bg-sky-100 text-black flex items-center gap-5 py-3 pl-3 rounded-xl mb-4 font-bold w-72" href="/">
                                <img src="/icons/facebook.png" width={30} alt="" />
                                Continue with Facebook
                            </button>
                            <button className="bg-sky-100 text-black flex items-center gap-5 py-3 pl-3 rounded-xl mb-4 font-bold w-72" href="/" onClick={() => { signIn() }}>
                                <img src="/icons/github.png" width={30} alt="" />
                                Continue with Github
                            </button>
                            <button className="bg-sky-100 text-black flex items-center gap-5 py-3 pl-3 rounded-xl mb-4 font-bold w-72" href="/">
                                <img src="/icons/apple.png" width={30} alt="" />
                                Continue with Apple
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Login

