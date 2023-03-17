import PlannedEvent from "./PlannedEvent"
import Spacer from "./Spacer"
import { motion, AnimatePresence } from "framer-motion"
import { MdExpandMore } from "react-icons/md"
import { useAppSelector, useAppDispatch } from "../hooks/reduxHooks"
import { removeEvent } from "../state/eventsSlice"
function PlannedEvents() {
  const dispatch = useAppDispatch()
  const { events } = useAppSelector((state) => state.events)
  const { date } = useAppSelector((state) => state.date)

  const plannedEvents = events.filter(
    (ev) =>
      new Date(ev.date).toLocaleDateString("en-UK") ===
      new Date(date).toLocaleDateString("en-UK")
  )

  function handleClick(e: React.MouseEvent) {
    if (
      e.target instanceof HTMLButtonElement &&
      e.target.dataset.action === "delete"
    ) {
      dispatch(removeEvent(e.target.dataset.id!))
    }
  }

  return (
    <div onClick={handleClick} className="[&>div:last-of-type]:border-none">
      <h3 className="text-lg font-bold">Planned events</h3>
      <Spacer value={2} />
      {plannedEvents.map((event) => (
        <PlannedEvent
          key={event.id}
          id={event.id}
          title={event.title}
          description={event.description}
          location={event.location}
          category={event.category}
          time={event.time}
          date={event.date}
        />
      ))}
      {!plannedEvents.length && (
        <div>You have no planned events on this day.</div>
      )}
    </div>
  )
}

export default PlannedEvents
