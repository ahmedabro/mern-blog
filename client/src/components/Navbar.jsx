import React from 'react'
import ThemeChanger from './ThemeChanger'
import { IoSearch, IoClose } from 'react-icons/io5'
import { FaBars } from "react-icons/fa6";
import SignInButton from './SignInButton'
import { useState } from 'react';

const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false)
  return (
    <div className='flex items-center justify-between border-b border-gray-300 dark:border-gray-500 dark:border-opacity-50 py-4 px-3 sm:px-6 md:px-10 lg:px-12 2xl:px-14'>
        <h1 className='font-bold text-base md:text-xl text-black dark:text-white'><span className='bg-gradient-to-r from-[#b92b27] to-[#1565C0] px-3 py-2 rounded-tl-3xl rounded-br-3xl text-white'>A.F</span>Blogspot</h1>
        <form className='relative lg:flex items-center min-w-52 hidden'>
            <input type='text' placeholder='Search...' className='w-full bg-transparent outline-none border border-gray-500 rounded-lg py-2 px-2 focus:border-blue-600' />
            <span className='absolute right-2'><IoSearch /></span>
        </form>
        <button className='border border-gray-500 rounded-full px-4 py-2 lg:hidden'><IoSearch /></button>
        <ul className={`fixed h-screen top-0 ${showSidebar ? 'right-0' : 'right-[-100%]'} bg-black w-[250px] sm:bg-transparent sm:h-auto sm:w-fit sm:relative sm:right-0 sm:flex sm:items-center sm:justify-center sm:gap-8 sm:text-sm md:text-base`}>
            <span className='absolute right-3 top-3 sm:hidden' onClick={() => setShowSidebar(false)}><IoClose /></span>
            <li>Home</li>
            <li>About</li>
            <li>Blogs</li>
        </ul>
        <div className='flex items-center gap-3'>
            <SignInButton />
            <button className='sm:hidden text-2xl' onClick={() => setShowSidebar(true)}><FaBars /></button>
            <ThemeChanger />
        </div>
    </div>
  )
}

export default Navbar
