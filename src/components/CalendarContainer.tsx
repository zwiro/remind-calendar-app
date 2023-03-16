import { useState, useEffect } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import "../calendar.css"
import { useAppDispatch } from "../hooks/reduxHooks"
import { changeDate } from "../state/dateSlice"

function CalendarContainer() {
  const dispatch = useAppDispatch()
  const [value, onChange] = useState(new Date())

  useEffect(() => {
    dispatch(changeDate(value.toString()))
  }, [value])

  return (
    <section className="lg:col-span-2 lg:row-start-1 lg:px-12 lg:pt-12">
      <Calendar
        onChange={onChange}
        value={value}
        className="bg-slate-200 text-zinc-900"
      />
    </section>
  )
}

export default CalendarContainer
