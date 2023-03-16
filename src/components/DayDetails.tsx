import SectionContainer from "./SectionContainer"
import SectionHeader from "./SectionHeader"
import Spacer from "./Spacer"
import TimePicker from "react-time-picker"

function DayDetails() {
  return (
    <SectionContainer>
      <div>
        <form className="flex flex-col">
          <SectionHeader>Add a new event</SectionHeader>
          <Spacer value={2} />
          <div className="grid grid-cols-[1fr_3fr] gap-2 py-2">
            <label htmlFor="title">Title</label>
            <input type="text" className="bg-slate-100" />
            <label htmlFor="description">Description</label>
            <input type="text" className="bg-slate-100" />
            <label htmlFor="location">Location</label>
            <input type="text" className="bg-slate-100" />
            <label htmlFor="time">Time</label>
            <TimePicker />
          </div>
          <button
            type="submit"
            className="self-end border bg-blue-500 px-4 py-2 font-bold text-slate-200 transition-colors hover:border-blue-500 hover:bg-slate-200 hover:text-blue-500"
          >
            Add
          </button>
        </form>
      </div>
    </SectionContainer>
  )
}

export default DayDetails
