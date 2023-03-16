import IncomingEvent from "./IncomingEvent"
import SectionContainer from "./SectionContainer"
import SectionHeader from "./SectionHeader"
import Spacer from "./Spacer"

function IncomingEvents() {
  return (
    <SectionContainer>
      <SectionHeader>Incoming events</SectionHeader>
      <Spacer value={2} />
      <IncomingEvent />
      <IncomingEvent />
      <IncomingEvent />
      <IncomingEvent />
      <IncomingEvent />
    </SectionContainer>
  )
}

export default IncomingEvents
