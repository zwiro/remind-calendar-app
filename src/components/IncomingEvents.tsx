import { MdExpandMore } from "react-icons/md"
import { motion, AnimatePresence } from "framer-motion"
import { useAppSelector } from "../hooks/reduxHooks"
import { setDateHour } from "../utils/setDateHour"
import useExpand from "../hooks/useExpand"
import useMediaQuery from "../hooks/useMediaQuery"
import IncomingEvent from "./IncomingEvent"
import SectionContainer from "./SectionContainer"
import SectionHeader from "./SectionHeader"
import Spacer from "./Spacer"

function IncomingEvents() {
  const isLgScreen = useMediaQuery("(min-width: 1024px)")

  const { isExpanded, toggleMenu } = useExpand(true)

  const { events } = useAppSelector((state) => state.events)

  const incomingEvents = events
    .filter(
      (ev) =>
        new Date(ev.date).getTime() - new Date().getTime() > -86400000 &&
        new Date(ev.date).getTime() - new Date().getTime() < 1209600000
    )
    .slice(0, 10)
    .sort(
      (a, b) =>
        setDateHour(new Date(a.date), a.time) -
        setDateHour(new Date(b.date), b.time)
    )

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
        className={`group flex items-center justify-between hover:cursor-pointer hover:bg-slate-300 dark:hover:bg-zinc-700 lg:hover:cursor-default lg:hover:bg-transparent lg:dark:hover:bg-transparent`}
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
                key={`${event.id}-incoming`}
                title={event.title}
                location={event.location}
                date={event.date}
                time={event.time}
                category={event.category}
              />
            ))}
          </motion.div>
        )}
        {!incomingEvents.length && (
          <p>You have no events planned in next 2 weeks.</p>
        )}
      </AnimatePresence>
    </SectionContainer>
  )
}

export default IncomingEvents
