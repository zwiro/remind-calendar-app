import { BiTimeFive } from "react-icons/bi"
import { formatDate } from "../utils/formatDate"
import { MdBusinessCenter } from "react-icons/md"
import { RiParentFill } from "react-icons/ri"
import { useAppDispatch } from "../hooks/reduxHooks"

interface IncomingEventProps {
  title: string
  location: string
  date: string
  time: string
  category: string
}

function IncomingEvent({
  title,
  location,
  date,
  time,
  category,
}: IncomingEventProps) {
  return (
    <div className="flex justify-between border-b border-zinc-300 py-2 px-1">
      <div>
        <p className="flex items-center gap-2 font-bold">
          {title}{" "}
          {category === "private" ? <RiParentFill /> : <MdBusinessCenter />}
        </p>
        <p className="text-sm">{location}</p>
      </div>
      <div className="flex flex-col items-end text-sm">
        <div className="flex items-center gap-1">
          <BiTimeFive />
          <p className="text-base">
            {Math.ceil(
              (new Date(date).getTime() - new Date().getTime()) /
                (1000 * 3600 * 24)
            )}{" "}
            days remaining
          </p>
        </div>
        <p>
          {formatDate(new Date(date))}, {time}
        </p>
      </div>
    </div>
  )
}

export default IncomingEvent
