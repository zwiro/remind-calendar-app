import AddEventForm from "./AddEventForm"
import PlannedEvents from "./PlannedEvents"
import SectionContainer from "./SectionContainer"
import SectionHeader from "./SectionHeader"
import Spacer from "./Spacer"
import { useAppSelector } from "../hooks/reduxHooks"

function DayDetails() {
  const { date } = useAppSelector((state) => state.date)
  return (
    <SectionContainer>
      <Spacer value={2} />
      <SectionHeader>
        {new Date(date).toLocaleDateString("en-UK", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </SectionHeader>
      <Spacer value={2} />
      <AddEventForm />
      <PlannedEvents />
    </SectionContainer>
  )
}

export default DayDetails
