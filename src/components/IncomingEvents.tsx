import { useState } from "react"
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
import PeriodSlider from "./PeriodSlider"
import { filterEventsByDate } from "../utils/filterEventsByDate"
import { Period } from "../types"

function IncomingEvents() {
  const [chosenPeriod, setChosenPeriod] = useState<Period>(Period.week)

  const isLgScreen = useMediaQuery("(min-width: 1024px)")

  const { isExpanded, toggleMenu } = useExpand(true)

  const { events } = useAppSelector((state) => state.events)

  const incomingEvents = events
    .filter((ev) => {
      if (chosenPeriod === Period.week) {
        return filterEventsByDate(ev, 7)
      } else if (chosenPeriod === Period.twoWeeks) {
        return filterEventsByDate(ev, 14)
      } else if (chosenPeriod === Period.month) {
        return filterEventsByDate(ev, 30)
      }
    })
    .slice(0, 10)
    .sort(
      (a, b) =>
        setDateHour(new Date(a.date), a.time) -
        setDateHour(new Date(b.date), b.time)
    )

  const expandAnimation = {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
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
      <AnimatePresence>
        {isExpanded && (
          <motion.div {...expandAnimation}>
            <PeriodSlider
              chosenPeriod={chosenPeriod}
              setChosenPeriod={setChosenPeriod}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <Spacer value={2} />
      <AnimatePresence>
        {isExpanded && (
          <motion.div {...expandAnimation}>
            <AnimatePresence>
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
            </AnimatePresence>
          </motion.div>
        )}
        {!incomingEvents.length && (
          <p>
            You have no events planned in next{" "}
            {chosenPeriod === Period.week
              ? "week"
              : chosenPeriod === Period.twoWeeks
              ? "two weeks"
              : "month"}
          </p>
        )}
      </AnimatePresence>
    </SectionContainer>
  )
}

export default IncomingEvents
