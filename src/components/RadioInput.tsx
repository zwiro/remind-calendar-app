import { FieldValues, UseFormRegister } from "react-hook-form/dist/types"

function RadioInput({ register }: { register: UseFormRegister<FieldValues> }) {
  return (
    <>
      <input
        {...register("category", { required: true })}
        type="radio"
        id="work"
        name="category"
        value="work"
        className={`peer/work hidden`}
      />
      <label
        htmlFor="work"
        className={`cursor-pointer border border-blue-500 p-2 capitalize text-blue-500 transition-colors peer-checked/work:bg-blue-500 peer-checked/work:text-slate-100`}
      >
        Work
      </label>
      <input
        {...register("category", { required: true })}
        type="radio"
        id="private"
        name="category"
        value="private"
        className={`peer/private hidden`}
        defaultChecked
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
