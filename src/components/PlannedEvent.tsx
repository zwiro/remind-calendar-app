import { AiFillDelete, AiFillEdit } from "react-icons/ai"

function PlannedEvent() {
  return (
    <div className="group space-y-2 border-b border-zinc-300 py-2 px-1 hover:bg-slate-300">
      <div className="flex items-center justify-between">
        <p className="font-bold">Meeting with client</p>
        <p>12:30 am</p>
      </div>
      <p>
        Meeting with John Doe to discuss details about the new business project
      </p>
      <div className="flex justify-between">
        <p>London, Long St. 21/37</p>
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
