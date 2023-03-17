import TimePicker from "react-time-picker"
import Input from "./Input"
import InputContainer from "./InputContainer"
import RadioInput from "./RadioInput"
import { useForm } from "react-hook-form"
import { useState } from "react"

function EditEventForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm()
  const [time, setTime] = useState("12:00")

  return (
    <form>
      <InputContainer>
        <Input
          name="Location"
          value="location"
          placeholder="London, Long St. 48"
          register={register}
          error={errors.location}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="description" className="w-1/5">
          Description
        </label>
        <textarea
          {...register("description", { required: true })}
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
          value={time}
          onChange={(e) => setTime(e.toString())}
          className="grow bg-slate-100 py-2 text-center"
        />
      </InputContainer>
      <div className="flex justify-end gap-2">
        <RadioInput register={register} />
      </div>
    </form>
  )
}

export default EditEventForm
