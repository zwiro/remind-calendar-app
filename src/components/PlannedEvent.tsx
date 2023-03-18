import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import { MdBusinessCenter } from "react-icons/md"
import { RiParentFill } from "react-icons/ri"
import { GoLocation } from "react-icons/go"
import { useState } from "react"
import AddEventForm from "./AddEventForm"
import InputContainer from "./InputContainer"
import Input from "./Input"
import RadioInput from "./RadioInput"
import TimePicker from "react-time-picker"
import EditEventForm from "./EditEventForm"
import { formatTime } from "../utils/formatTime"

interface PlannedEventProps {
  id: string
  title: string
  description: string
  time: string
  location: string
  category: string
  date: string
}

function PlannedEvent({
  id,
  title,
  description,
  time,
  location,
  category,
  date,
}: PlannedEventProps) {
  const [isEditing, setIsEditing] = useState(false)

  function closeEditForm() {
    setIsEditing(false)
  }

  return (
    <>
      {!isEditing ? (
        <div className="group space-y-2 border-b border-zinc-300 py-2 px-1 hover:bg-slate-300">
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-2 font-bold">
              {title}{" "}
              {category === "work" ? <MdBusinessCenter /> : <RiParentFill />}
            </p>
            <p>{formatTime(time)}</p>
          </div>
          <p>{description}</p>
          <div className="flex justify-between">
            <p className="flex items-center gap-1">
              <GoLocation size={12} />
              {location}
            </p>
            <div className="space-x-3 font-bold">
              <button
                onClick={() => setIsEditing(true)}
                className="invisible text-blue-500 transition-transform hover:scale-125 group-hover:visible"
              >
                <AiFillEdit size={24} className="pointer-events-none" />
              </button>
              <button
                data-action="delete"
                data-id={id}
                className="invisible text-red-500 transition-transform hover:scale-125 group-hover:visible"
              >
                <AiFillDelete size={24} className="pointer-events-none" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <EditEventForm
          id={id}
          location={location}
          description={description}
          title={title}
          time={time}
          category={category}
          date={date}
          closeEditForm={closeEditForm}
        />
      )}
    </>
  )
}

export default PlannedEvent
