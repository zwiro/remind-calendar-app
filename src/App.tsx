import CalendarContainer from "./components/CalendarContainer"
import DayDetails from "./components/DayDetails"
import IncomingEvents from "./components/IncomingEvents"

function App() {
  return (
    <div className="flex flex-col">
      <IncomingEvents />
      <CalendarContainer />
      <DayDetails />
    </div>
  )
}

export default App
