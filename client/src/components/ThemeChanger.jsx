import { useState, useEffect } from "react"
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux'
import { changeThemeValue } from "../features/theme/themeSlice";


const ThemeChanger = () => {
    const theme = useSelector((state) => state.theme.value)
    const dispatch = useDispatch()
    const [showDropdown, setShowDropdown] = useState(false)

    useEffect(() => {
      if(theme == "dark") {
        document.querySelector("body").classList.add("dark")
      } else {
        document.querySelector("body").classList.remove("dark")
      }
    }, [theme]);

    const changeTheme = (themeOption) => {
        dispatch(changeThemeValue(themeOption))
        setShowDropdown(false)
    }
  
    return (
      <>
        <div className="relative w-fit">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-3xl bg-gray-200 dark:bg-black border-2 border-gray-500 text-black dark:text-white" onClick={() => setShowDropdown(!showDropdown)}>
                {theme === "light" ? <><IoSunnyOutline /> Light</> : <><IoMoonOutline /> Dark</> }
            </div>
            <div className={`absolute ${showDropdown ? 'block' : 'hidden'} border-2 border-gray-500 rounded-lg w-full bg-gray-200 dark:bg-black text-black dark:text-white`}>
                <div className="flex items-center justify-center py-2 border-b-2 border-gray-800 dark:border-gray-300 gap-2" onClick={() => changeTheme("light")}><IoSunnyOutline /> Light</div>
                <div className="flex items-center justify-center py-2 gap-2" onClick={() => changeTheme("dark")}><IoMoonOutline /> Dark</div>
            </div>
        </div>
      </>
    )
}

export default ThemeChanger
