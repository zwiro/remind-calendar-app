import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import { MdBusinessCenter } from "react-icons/md"
import { RiParentFill } from "react-icons/ri"
import { GoLocation } from "react-icons/go"

interface PlannedEventProps {
  title: string
  description: string
  time: string
  location: string
  category: string
}

function PlannedEvent({
  title,
  description,
  time,
  location,
  category,
}: PlannedEventProps) {
  return (
    <div className="group space-y-2 border-b border-zinc-300 py-2 px-1 hover:bg-slate-300">
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-2 font-bold">
          {title}{" "}
          {category === "work" ? <MdBusinessCenter /> : <RiParentFill />}
        </p>
        <p>{time}</p>
      </div>
      <p>{description}</p>
      <div className="flex justify-between">
        <p className="flex items-center gap-1">
          <GoLocation size={12} />
          {location}
        </p>
        <div className="space-x-3 font-bold">
          <button className="invisible text-blue-500 transition-transform hover:scale-125 group-hover:visible">
            <AiFillEdit size={24} />
          </button>
          <button className="invisible text-red-500 transition-transform hover:scale-125 group-hover:visible">
            <AiFillDelete size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlannedEvent
