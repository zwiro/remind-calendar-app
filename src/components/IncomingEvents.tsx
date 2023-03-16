import IncomingEvent from "./IncomingEvent"
import SectionContainer from "./SectionContainer"
import SectionHeader from "./SectionHeader"
import Spacer from "./Spacer"
import { MdExpandMore } from "react-icons/md"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function IncomingEvents() {
  const [incomingEventsExpanded, setIncomingEventsExpanded] = useState(false)

  const incomingEventsAnimation = {
    initial: { height: 0 },
    animate: { height: "auto" },
    exit: { height: 0 },
  }

  return (
    <SectionContainer>
      <div className="flex items-center justify-between">
        <SectionHeader>Incoming events</SectionHeader>
        <MdExpandMore
          onClick={() => setIncomingEventsExpanded((prevState) => !prevState)}
          size={24}
          className={`ml-auto transition-transform hover:scale-125 hover:cursor-pointer ${
            incomingEventsExpanded && "rotate-180"
          } `}
        />
      </div>
      <Spacer value={2} />
      <AnimatePresence>
        {incomingEventsExpanded && (
          <motion.div {...incomingEventsAnimation}>
            <IncomingEvent />
            <IncomingEvent />
            <IncomingEvent />
            <IncomingEvent />
            <IncomingEvent />
          </motion.div>
        )}
      </AnimatePresence>
    </SectionContainer>
  )
}

export default IncomingEvents
