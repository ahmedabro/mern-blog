import React from 'react'
import { Link } from 'react-router-dom'

const SignInButton = () => {
  return (
    <Link to="/sign-in" class="bg-gradient-to-br from-[#b92b27] to-[#1565C0] rounded p-[1px]">
        <span class="flex w-full bg-[var(--header-bg-color)] text-black dark:text-white font-semibold text-sm lg:text-base dark:bg-[var(--header-bg-color-dark)] rounded px-4 py-2 hover:bg-gradient-to-br hover:from-[#b92b27] hover:to-[#1565C0] hover:text-white">
            Sign In
        </span>
    </Link>
  )
}

export default SignInButton
