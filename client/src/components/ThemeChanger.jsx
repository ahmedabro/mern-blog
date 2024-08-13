import { useState } from "react"
import { IoSunnyOutline, IoMoonOutline, IoSunny, IoMoon } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux'
import { changeThemeValue } from "../features/theme/themeSlice";


const ThemeChanger = () => {
    // access state value
    const theme = useSelector((state) => state.theme.value)

    const dispatch = useDispatch()

    const [showDropdown, setShowDropdown] = useState(false)


    const changeTheme = (themeOption) => {
        dispatch(changeThemeValue(themeOption))
        setShowDropdown(false)
    }
  
    return (
      <>
        <div className="relative w-fit hidden sm:block">
            <div className="inline-flex items-center gap-2 px-4 py-3 mb-1 rounded-lg text-sm bg-white dark:bg-transparent border border-gray-500 text-black dark:text-white hover:cursor-pointer" onClick={() => setShowDropdown(!showDropdown)}>
                {theme === "light" ? <><IoSunny /></> : <><IoMoon /></> }
            </div>
            <div className={`absolute ${showDropdown ? 'block' : 'hidden'} border border-gray-500 rounded-lg w-full bg-white dark:bg-[#333] text-black dark:text-white`}>
                <div className="flex items-center justify-center py-2 border-b border-gray-500 gap-2 hover:cursor-pointer" onClick={() => changeTheme("light")}><IoSunnyOutline /></div>
                <div className="flex items-center justify-center py-2 gap-2 hover:cursor-pointer" onClick={() => changeTheme("dark")}><IoMoonOutline /></div>
            </div>
        </div>
      </>
    )
}

export default ThemeChanger
