import IncomingEvent from "./IncomingEvent"
import SectionContainer from "./SectionContainer"
import SectionHeader from "./SectionHeader"
import Spacer from "./Spacer"
import { MdExpandMore } from "react-icons/md"
import { motion, AnimatePresence } from "framer-motion"
import useExpand from "../hooks/useExpand"
import useMediaQuery from "../hooks/useMediaQuery"
import { useAppSelector } from "../hooks/reduxHooks"

function IncomingEvents() {
  const isLgScreen = useMediaQuery("(min-width: 1024px)")
  const { isExpanded, toggleMenu } = useExpand(true)
  const { events } = useAppSelector((state) => state.events)

  const incomingEvents = events
    .filter(
      (ev) =>
        new Date(ev.date).getTime() - new Date().getTime() > 0 &&
        new Date(ev.date).getTime() - new Date().getTime() < 1209600000
    )
    .slice(0, 10)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

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
        <div>
          <SectionHeader>Incoming events</SectionHeader>
          <p>Next 2 weeks</p>
        </div>
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
            {incomingEvents.map((event) => (
              <IncomingEvent
                key={event.id}
                title={event.title}
                location={event.location}
                date={event.date}
                time={event.time}
                category={event.category}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </SectionContainer>
  )
}

export default IncomingEvents
