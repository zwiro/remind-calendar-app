import CalendarContainer from "./components/CalendarContainer"
import DayDetails from "./components/DayDetails"
import IncomingEvents from "./components/IncomingEvents"
import LogoBar from "./components/LogoBar"
import { useState, useEffect } from "react"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  function toggleDarkMode() {
    setIsDarkMode((prevMode) => !prevMode)
  }

  useEffect(() => {
    isDarkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark")
  }, [isDarkMode])

  return (
    <>
      <LogoBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div className={`flex flex-col lg:grid lg:grid-cols-2 xl:px-24 `}>
        <IncomingEvents />
        <CalendarContainer />
        <DayDetails />
      </div>
    </>
  )
}

export default App
