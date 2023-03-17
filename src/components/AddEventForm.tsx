import TimePicker from "react-time-picker"
import Input from "./Input"
import InputContainer from "./InputContainer"
import { MdAddBox, MdExpandMore } from "react-icons/md"
import useExpand from "../hooks/useExpand"
import { motion, AnimatePresence } from "framer-motion"
import Spacer from "./Spacer"
import RadioInput from "./RadioInput"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"
import { nanoid } from "nanoid"
import { addEvent } from "../state/eventsSlice"
import { useForm } from "react-hook-form"

function AddEventForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { isExpanded, toggleMenu } = useExpand()
  const { date } = useAppSelector((state) => state.date)
  const dispatch = useAppDispatch()

  const expandAnimation = {
    initial: { height: 0, opacity: 0, padding: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0, padding: 0 },
    transition: { opacity: { duration: 0.1 } },
  }

  return (
    <form
      onSubmit={handleSubmit((data) => {
        const formData = {
          ...data,
          id: nanoid(),
          date,
          time: "12:20",
        }
        console.log(formData)
      })}
      className="flex flex-col"
    >
      <div
        onClick={toggleMenu}
        className="group flex items-center justify-between hover:cursor-pointer hover:bg-slate-300"
      >
        <h3 className="text-lg font-bold">Add a new event</h3>
        <MdExpandMore
          size={24}
          className={`ml-auto transition-transform group-hover:scale-125 ${
            isExpanded && "rotate-180"
          } `}
        />
      </div>
      <Spacer value={2} />
      <AnimatePresence>
        {isExpanded && (
          <motion.div {...expandAnimation} className="flex flex-col gap-2 py-2">
            <Input
              name="Title"
              value="title"
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
                value={new Date()}
                className="grow bg-slate-100 py-2 text-center"
              />
            </InputContainer>
            <div className="flex justify-end gap-2">
              <RadioInput register={register} />
              {/* Bug - radio inputs checking not working as
              reusable component with 'value' prop */}
            </div>
            <button
              type="submit"
              className="group flex items-center gap-2 self-end text-lg font-bold text-blue-500 hover:underline"
            >
              Add{" "}
              <MdAddBox className="transition-transform group-hover:scale-125" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}

export default AddEventForm
