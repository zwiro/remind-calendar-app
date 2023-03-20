import CalendarContainer from "./components/CalendarContainer"
import DayDetails from "./components/DayDetails"
import IncomingEvents from "./components/IncomingEvents"
import LogoBar from "./components/LogoBar"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkTheme")!) || false
  )

  function toggleDarkMode() {
    setIsDarkMode((prevMode: boolean) => !prevMode)
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("darkTheme", JSON.stringify(isDarkMode))
  }, [isDarkMode])

  return (
    <>
      <LogoBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <motion.div
        key={`${isDarkMode}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`flex flex-col lg:grid lg:grid-cols-2 xl:px-24 `}
      >
        <IncomingEvents />
        <CalendarContainer />
        <DayDetails />
      </motion.div>
    </>
  )
}

export default App
