import { useState } from "react"

function RadioInput() {
  const [option, setOption] = useState("private")
  console.log(option)
  return (
    <>
      <input
        type="radio"
        id="work"
        name="category"
        value="work"
        className={`peer/work hidden`}
        onChange={(e) => setOption(e.target.value)}
      />
      <label
        htmlFor="work"
        className={`cursor-pointer border border-blue-500 p-2 capitalize text-blue-500 transition-colors peer-checked/work:bg-blue-500 peer-checked/work:text-slate-100`}
      >
        Work
      </label>
      <input
        type="radio"
        id="private"
        name="category"
        value="private"
        className={`peer/private hidden`}
        defaultChecked
        onChange={(e) => setOption(e.target.value)}
      />
      <label
        htmlFor="private"
        className={`cursor-pointer border border-blue-500 p-2 capitalize text-blue-500 transition-colors peer-checked/private:bg-blue-500 peer-checked/private:text-slate-100`}
      >
        Private
      </label>
    </>
  )
}

export default RadioInput
