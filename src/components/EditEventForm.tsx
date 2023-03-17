import TimePicker from "react-time-picker"
import Input from "./Input"
import InputContainer from "./InputContainer"
import RadioInput from "./RadioInput"
import { useForm } from "react-hook-form"
import { useState, useEffect } from "react"
import { AiFillCheckSquare } from "react-icons/ai"
import { useAppDispatch } from "../hooks/reduxHooks"
import { editEvent } from "../state/eventsSlice"

interface PlannedEventProps {
  id: string
  title: string
  description: string
  time: string
  location: string
  category: string
  date: string
  closeEditForm: () => void
}

function EditEventForm({
  id,
  title,
  location,
  description,
  time,
  category,
  date,
  closeEditForm,
}: PlannedEventProps) {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm()
  const [pickedTime, setPickedTime] = useState(time)

  return (
    <form
      onSubmit={handleSubmit((data) => {
        const formData = {
          id,
          title: data.title,
          description: data.description,
          location: data.location,
          date,
          time: pickedTime,
          category: data.category,
        }
        dispatch(editEvent(formData))
        closeEditForm()
      })}
      className="flex flex-col gap-2 py-2"
    >
      <Input
        name="Title"
        value="title"
        defaultValue={title}
        placeholder="Meeting with client"
        register={register}
        error={errors.title}
      />
      <InputContainer>
        <label htmlFor="description" className="w-1/5">
          Description
        </label>
        <textarea
          {...register("description", { required: true })}
          defaultValue={description}
          name="description"
          id="description"
          placeholder="Meeting with John Doe to discuss details about the new business project"
          className={`grow border bg-slate-100 p-2 ${
            errors.description && "border-red-500"
          } `}
        />
      </InputContainer>
      <Input
        name="Location"
        value="location"
        defaultValue={location}
        placeholder="London, Long St. 48"
        register={register}
        error={errors.location}
      />
      <InputContainer>
        <label htmlFor="time" className="w-1/5">
          Time
        </label>
        <TimePicker
          disableClock={true}
          clearIcon={null}
          name="date"
          format="hh:mm a"
          value={pickedTime}
          onChange={(e) => setPickedTime(e.toString())}
          className="grow bg-slate-100 py-2 text-center"
        />
      </InputContainer>
      <div className="flex justify-end gap-2">
        <RadioInput register={register} defaultValue={category} isEditing />
      </div>
      <button
        type="submit"
        className="group flex items-center gap-2 self-end text-lg font-bold text-blue-500 hover:underline"
      >
        Save{" "}
        <AiFillCheckSquare className="transition-transform group-hover:scale-125" />
      </button>
    </form>
  )
}

export default EditEventForm
