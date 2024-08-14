import { useEffect } from "react"
import { useSelector } from 'react-redux'
import Navbar from "./components/Navbar"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"


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
    
    <div className="bg-[var(--bg-color)] dark:bg-[--bg-color-dark] min-h-screen transition duration-500 ease-in-out">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
