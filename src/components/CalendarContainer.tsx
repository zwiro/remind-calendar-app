import { useState, useEffect } from "react"
import Calendar from "react-calendar"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"
import { changeDate } from "../state/dateSlice"
import "react-calendar/dist/Calendar.css"

function CalendarContainer() {
  const dispatch = useAppDispatch()

  const [value, onChange] = useState(new Date())

  const { events } = useAppSelector((state) => state.events)

  useEffect(() => {
    dispatch(changeDate(value.toString()))
  }, [value])

  const tileContent = (calendar: any) => {
    if (
      events.some(
        (event) =>
          new Date(event.date).getDate() === calendar.date.getDate() &&
          new Date(event.date).getMonth() === calendar.date.getMonth() &&
          new Date(event.date).getFullYear() === calendar.date.getFullYear()
      )
    ) {
      return <div className="mx-auto h-1 w-6 bg-blue-500" />
    }
    return null
  }

  return (
    <section className="lg:col-span-2 lg:row-start-1 lg:px-12 lg:pt-12">
      <Calendar
        onChange={onChange}
        tileContent={tileContent}
        value={value}
        className="bg-slate-200 text-zinc-900 dark:bg-zinc-700 dark:text-slate-200"
      />
    </section>
  )
}

export default CalendarContainer
