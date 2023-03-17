import PlannedEvent from "./PlannedEvent"
import Spacer from "./Spacer"
import { motion, AnimatePresence } from "framer-motion"
import { MdExpandMore } from "react-icons/md"
import { useAppSelector } from "../hooks/reduxHooks"
function PlannedEvents() {
  const { events } = useAppSelector((state) => state.events)
  console.log(events)
  return (
    <div className="[&>div:last-of-type]:border-none">
      <h3 className="text-lg font-bold">Planned events</h3>
      <Spacer value={2} />
      {events.map((event) => (
        <PlannedEvent
          key={event.id}
          title={event.title}
          description={event.description}
          location={event.location}
          category={event.category}
          time={event.time}
        />
      ))}
    </div>
  )
}

export default PlannedEvents
