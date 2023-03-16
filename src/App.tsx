import CalendarContainer from "./components/CalendarContainer"
import DayDetails from "./components/DayDetails"
import IncomingEvents from "./components/IncomingEvents"

function App() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 xl:px-24">
      <IncomingEvents />
      <CalendarContainer />
      <DayDetails />
    </div>
  )
}

export default App
