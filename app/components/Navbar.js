"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {

    const { data: session } = useSession()
    const [showdropdown, setShowdropdown] = useState(false)

    return (
        <nav className='bg-blue-950 text-white flex flex-col md:flex-row justify-between px-8 md:h-16 gap-1 py-2 md:py-0 items-center'>
            <Link href={"/"} className='flex font-bold text-2xl items-center'>
                <span>GetMeA_Chai</span>
                <span><img width={30} src="/imgs/chailogo.gif" alt="" /></span>
            </Link>
            <div className='relative'>
                {session && <>
                    <button id="dropdownDefaultButton" onClick={() => { setShowdropdown(!showdropdown) }} onBlur={() => { setTimeout(() => { setShowdropdown(false) }, 100); }} data-dropdown-toggle="dropdown" className="text-white bg-gradient-to-br from-purple-600 to-blue-500
                     hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 inline-flex items-center" type="button">Welcome {session.user.email}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>

                    {/* Dropdown menu */}
                    <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} absolute left-32 top-11 bg-gray-800 divide-y divide-gray-100 rounded-lg shadow w-44 `}>
                        <ul className="py-2 text-sm text-white dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-700">Dashboard</Link>
                            </li>
                            <li>
                                <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-700">Your Page</Link>
                            </li>
                            <li>
                                <Link onClick={() => { signOut() }} href="#" className="block px-4 py-2 hover:bg-gray-700">Log out</Link>
                            </li>
                        </ul>
                    </div></>
                }
                {!session && <Link href={"/login"}>
                    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2">Login</button>
                </Link>}
            </div>
        </nav>
    )
}

export default Navbar
