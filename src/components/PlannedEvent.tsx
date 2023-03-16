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
        <div className="space-x-2 text-sm font-bold">
          <button className="invisible text-blue-500 hover:underline group-hover:visible">
            Edit
          </button>
          <button className="invisible text-red-500 hover:underline group-hover:visible">
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlannedEvent
