import IncomingEvent from "./IncomingEvent"
import SectionContainer from "./SectionContainer"
import SectionHeader from "./SectionHeader"
import Spacer from "./Spacer"
import { MdExpandMore } from "react-icons/md"
import { motion, AnimatePresence } from "framer-motion"
import useExpand from "../hooks/useExpand"
import useMediaQuery from "../hooks/useMediaQuery"

function IncomingEvents() {
  const { isExpanded, toggleMenu } = useExpand(true)

  console.log(isExpanded)

  const isLgScreen = useMediaQuery("(min-width: 1024px)")

  const expandAnimation = {
    initial: { height: 0 },
    animate: { height: "auto" },
    exit: { height: 0 },
  }

  return (
    <SectionContainer>
      <Spacer value={2} />
      <div
        onClick={!isLgScreen ? toggleMenu : () => {}}
        className="group flex items-center justify-between hover:cursor-pointer hover:bg-slate-300 lg:hover:cursor-default lg:hover:bg-inherit"
      >
        <SectionHeader>Incoming events</SectionHeader>
        {!isLgScreen && (
          <MdExpandMore
            size={24}
            className={`ml-auto transition-transform group-hover:scale-125 ${
              isExpanded && "rotate-180"
            } `}
          />
        )}
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
