import React from 'react'
import ThemeChanger from './ThemeChanger'
import { IoSearch, IoClose, IoInformationCircleOutline, IoHomeOutline } from 'react-icons/io5'
import { FaBars } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import SignInButton from './SignInButton'
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const sideNavLinks = [
    {
        path: "/",
        title: "Home",
        icon: <IoHomeOutline />,
    },
    {
        path: "/about",
        title: "About",
        icon: <IoInformationCircleOutline />,
    },
    {
        path: "/projects",
        title: "Projects",
        icon: <FaLaptopCode />,
    },
]

const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className='flex items-center justify-between bg-[--header-bg-color] dark:bg-[--header-bg-color-dark] border-b border-gray-300 dark:border-gray-500 dark:border-opacity-50 py-4 px-3 sm:px-6 md:px-10 lg:px-12 2xl:px-14'>
        <Link to="/" className='font-bold text-base md:text-xl text-black dark:text-white'><span className='bg-gradient-to-r from-[#b92b27] to-[#1565C0] px-3 py-2 rounded-tl-3xl rounded-br-3xl text-white'>A.F</span>Blogspot</Link>
        <form className='relative lg:flex items-center min-w-52 hidden'>
            <input type='text' placeholder='Search...' className='w-full bg-transparent outline-none border border-gray-500 rounded-lg py-2 px-2 focus:border-blue-600' />
            <span className='absolute right-2'><IoSearch /></span>
        </form>
        <button className='border border-gray-500 rounded-full px-4 py-2 lg:hidden'><IoSearch /></button>
        <ul className={`fixed h-screen top-0 ${showSidebar ? 'right-0' : 'right-[-100%]'} bg-[#E2E1DF] dark:bg-[var(--sidenav-bg-color-dark)] w-[250px] 
        sm:bg-transparent sm:dark:bg-transparent sm:h-auto sm:w-fit sm:relative sm:right-0 flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-8 sm:text-sm md:text-base
        transition-all duration-500 ease-in-out py-20 sm:py-0 px-2 sm:px-0`}>
            <span className='absolute right-3 top-6 text-black dark:text-white text-2xl sm:hidden' onClick={() => setShowSidebar(false)}><IoClose /></span>
            {
                sideNavLinks.map(link => (
                    <li key={link.title}>
                        <NavLink to={link.path} className={({isActive}) => 
                        (isActive ? `flex items-center justify-center w-full gap-3 py-3 sm:py-1 text-black font-bold dark:text-white rounded-lg sm:rounded-none bg-[var(--active-link)] dark:bg-[var(--active-link-dark)] sm:bg-transparent sm:dark:bg-transparent sm:border-b-[3px] sm:border-[var(--active-link)] sm:dark:border-[var(--active-link-dark)]` 
                        : `flex items-center justify-center w-full gap-3 py-3 sm:py-1 text-black dark:text-white transition-all duration-500 ease-linear rounded-none`)}>
                            <span className='sm:hidden text-2xl'>{link.icon}</span> {link.title}
                        </NavLink>
                    </li>
                ))
            }
        </ul>
        <div className='flex items-center gap-3 sm:flex-row-reverse'>
            <SignInButton />
            <button className='sm:hidden text-2xl' onClick={() => setShowSidebar(true)}><FaBars /></button>
            <ThemeChanger />
        </div>
    </div>
  )
}

export default Navbar
