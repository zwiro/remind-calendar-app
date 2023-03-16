import IncomingEvent from "./IncomingEvent"
import SectionContainer from "./SectionContainer"
import SectionHeader from "./SectionHeader"
import Spacer from "./Spacer"
import { MdExpandMore } from "react-icons/md"
import { motion, AnimatePresence } from "framer-motion"
import useExpand from "../hooks/useExpand"

function IncomingEvents() {
  const { isExpanded, toggleMenu } = useExpand()

  const expandAnimation = {
    initial: { height: 0 },
    animate: { height: "auto" },
    exit: { height: 0 },
  }

  return (
    <SectionContainer>
      <div
        onClick={toggleMenu}
        className="group flex items-center justify-between hover:cursor-pointer"
      >
        <SectionHeader>Incoming events</SectionHeader>
        <MdExpandMore
          size={24}
          className={`ml-auto transition-transform group-hover:scale-125 ${
            isExpanded && "rotate-180"
          } `}
        />
      </div>
      <Spacer value={2} />
      <AnimatePresence>
        {isExpanded && (
          <motion.div {...expandAnimation}>
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
