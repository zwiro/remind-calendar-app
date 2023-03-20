import AddEventForm from "./AddEventForm"
import PlannedEvents from "./PlannedEvents"
import SectionContainer from "./SectionContainer"
import SectionHeader from "./SectionHeader"
import Spacer from "./Spacer"
import { useAppSelector } from "../hooks/reduxHooks"
import { formatDate } from "../utils/formatDate"
import { AnimatePresence, motion } from "framer-motion"

function DayDetails() {
  const { date } = useAppSelector((state) => state.date)
  const dateAnimation = {
    initial: { y: -10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 10, opacity: 0 },
  }
  return (
    <SectionContainer>
      <Spacer value={2} />
      <SectionHeader>
        <AnimatePresence mode="popLayout">
          <motion.div {...dateAnimation} key={date}>
            {formatDate(new Date(date))}
          </motion.div>
        </AnimatePresence>
      </SectionHeader>
      <Spacer value={2} />
      <AddEventForm />
      <PlannedEvents />
    </SectionContainer>
  )
}

export default DayDetails
