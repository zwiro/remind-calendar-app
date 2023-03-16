function IncomingEvent() {
  return (
    <div className="flex justify-between border-b border-zinc-300 py-2 px-1 hover:cursor-pointer hover:bg-slate-300">
      <div>
        <p className="font-bold">Meeting with client</p>
        <p className="text-sm">London, East District, High St. 21/37</p>
      </div>
      <div className="flex flex-col items-end text-sm">
        <p className="text-base">8 days left</p>
        <p>12 august 2023, 12:30 am</p>
      </div>
    </div>
  )
}

export default IncomingEvent
