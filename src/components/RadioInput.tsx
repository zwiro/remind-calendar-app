import { useState } from "react"

function RadioInput({ value }: { value: string }) {
  const [option, setOption] = useState("private")
  console.log(option)
  return (
    <>
      <input
        type="radio"
        id={value}
        name="category"
        value={value}
        className={`peer/${value} hidden`}
        defaultChecked={value === "private"}
        onChange={(e) => setOption(e.target.value)}
      />
      <label
        htmlFor={value}
        className={`cursor-pointer border border-blue-500 p-2 text-blue-500 transition-colors peer-checked/${value}:bg-blue-500 peer-checked/${value}:text-slate-100 capitalize`}
      >
        {value}
      </label>
    </>
  )
}

export default RadioInput
