import SectionContainer from "./SectionContainer"
import SectionHeader from "./SectionHeader"
import Spacer from "./Spacer"
import TimePicker from "react-time-picker"
import Input from "./Input"
import InputContainer from "./InputContainer"

function DayDetails() {
  return (
    <SectionContainer>
      <div>
        <form className="flex flex-col">
          <SectionHeader>Add a new event</SectionHeader>
          <Spacer value={2} />
          <div className="flex flex-col gap-2 py-2">
            <Input
              name="Title"
              value="title"
              placeholder="Meeting with client"
            />
            <InputContainer>
              <label htmlFor="description" className="w-1/5">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                placeholder="Meeting with John Doe to discuss details about the new business project"
                className="grow bg-slate-100 p-2"
              />
            </InputContainer>
            <Input
              name="Location"
              value="location"
              placeholder="London, Long St. 48"
            />
            <InputContainer>
              <label htmlFor="time" className="w-1/5">
                Time
              </label>
              <TimePicker className="grow" />
            </InputContainer>
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
