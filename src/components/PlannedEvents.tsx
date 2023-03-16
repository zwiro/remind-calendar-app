import PlannedEvent from "./PlannedEvent"
import Spacer from "./Spacer"
import { motion, AnimatePresence } from "framer-motion"
import { MdExpandMore } from "react-icons/md"

function PlannedEvents() {
  return (
    <div className="[&>div:last-of-type]:border-none">
      <h3 className="text-lg font-bold">Planned events</h3>
      <Spacer value={2} />
      <PlannedEvent />
      <PlannedEvent />
      <PlannedEvent />
      <PlannedEvent />
      <PlannedEvent />
    </div>
  )
}

export default PlannedEvents
