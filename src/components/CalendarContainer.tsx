import { useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import "../calendar.css"

function CalendarContainer() {
  const [value, onChange] = useState(new Date())
  return (
    <section>
      <Calendar
        onChange={onChange}
        value={value}
        className="bg-slate-100 text-zinc-900"
      />
    </section>
  )
}

export default CalendarContainer
