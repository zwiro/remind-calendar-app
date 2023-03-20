import { MdBusinessCenter } from "react-icons/md"
import { BiTimeFive } from "react-icons/bi"
import { RiParentFill } from "react-icons/ri"
import { formatDate } from "../utils/formatDate"
import { formatTime } from "../utils/formatTime"

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
  const remainingDays = Math.ceil(
    (new Date(date).getTime() - new Date().getTime()) / (1000 * 3600 * 24)
  )

  return (
    <div className="flex justify-between border-b border-zinc-400 py-2 px-1 dark:border-zinc-300">
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
            {remainingDays === 0
              ? "Today"
              : remainingDays === 1
              ? "Tomorrow"
              : `${remainingDays} days remaining`}
          </p>
        </div>
        <p>
          {formatDate(new Date(date))}, {formatTime(time)}
        </p>
      </div>
    </div>
  )
}

export default IncomingEvent
