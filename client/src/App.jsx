import { useEffect } from "react"
import { useSelector } from 'react-redux'
import Navbar from "./components/Navbar";


const App = () => {

  // access state value
  const theme = useSelector((state) => state.theme.value)

  useEffect(() => {
    if(theme === "dark") {
      document.querySelector("body").classList.add("dark")
    } else {
      document.querySelector("body").classList.remove("dark")
    }
  }, [theme]);

  return (
    <div className="bg-white dark:bg-[#333] min-h-screen transition duration-500 ease-in-out">
      <Navbar />
    </div>
  )
}

export default App
