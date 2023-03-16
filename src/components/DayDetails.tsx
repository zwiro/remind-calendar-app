import AddEventForm from "./AddEventForm"
import PlannedEvents from "./PlannedEvents"
import SectionContainer from "./SectionContainer"
import SectionHeader from "./SectionHeader"
import Spacer from "./Spacer"

function DayDetails() {
  return (
    <SectionContainer>
      <SectionHeader>16 march 2023</SectionHeader>
      <Spacer value={2} />
      <AddEventForm />
      <PlannedEvents />
    </SectionContainer>
  )
}

export default DayDetails
