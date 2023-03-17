import AddEventForm from "./AddEventForm"
import PlannedEvents from "./PlannedEvents"
import SectionContainer from "./SectionContainer"
import SectionHeader from "./SectionHeader"
import Spacer from "./Spacer"
import { useAppSelector } from "../hooks/reduxHooks"
import { formatDate } from "../utils/formatDate"

function DayDetails() {
  const { date } = useAppSelector((state) => state.date)
  return (
    <SectionContainer>
      <Spacer value={2} />
      <SectionHeader>{formatDate(new Date(date))}</SectionHeader>
      <Spacer value={2} />
      <AddEventForm />
      <PlannedEvents />
    </SectionContainer>
  )
}

export default DayDetails
