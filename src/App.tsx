import CalendarContainer from "./components/CalendarContainer"
import DayDetails from "./components/DayDetails"
import IncomingEvents from "./components/IncomingEvents"
import LogoBar from "./components/LogoBar"

function App() {
  return (
    <>
      <LogoBar />
      <div className="flex flex-col lg:grid lg:grid-cols-2 xl:px-24">
        <IncomingEvents />
        <CalendarContainer />
        <DayDetails />
      </div>
    </>
  )
}

export default App
