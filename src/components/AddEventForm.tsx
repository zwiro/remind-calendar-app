import TimePicker from "react-time-picker"
import Input from "./Input"
import InputContainer from "./InputContainer"
import { MdAddBox } from "react-icons/md"

function AddEventForm() {
  return (
    <form className="flex flex-col">
      <h3 className="text-lg font-bold">Add a new event</h3>
      <div className="flex flex-col gap-2 py-2">
        <Input name="Title" value="title" placeholder="Meeting with client" />
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
          <TimePicker
            disableClock={true}
            clearIcon={null}
            name="date"
            format="h:m a"
            value={new Date()}
            className="grow bg-slate-100 py-2 text-center"
          />
        </InputContainer>
      </div>
      <button
        type="submit"
        className="group flex items-center gap-2 self-end font-bold text-blue-500 hover:underline"
      >
        Add <MdAddBox className="transition-transform group-hover:scale-125" />
      </button>
    </form>
  )
}

export default AddEventForm
