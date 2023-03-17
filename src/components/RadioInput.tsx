import { FieldValues, UseFormRegister } from "react-hook-form/dist/types"

interface RadioInputProps {
  register: UseFormRegister<FieldValues>
  defaultValue?: string
  isEditing?: boolean
}

function RadioInput({ register, defaultValue, isEditing }: RadioInputProps) {
  return (
    <>
      <input
        {...register("category", { required: true })}
        type="radio"
        id={`${isEditing ? "workEdit" : "work"}`}
        name="category"
        value="work"
        className={` ${isEditing ? "peer/workEdit" : "peer/work"} hidden`}
        defaultChecked={defaultValue === "work"}
      />
      <label
        htmlFor={`${isEditing ? "workEdit" : "work"}`}
        className={`cursor-pointer border border-blue-500 p-2 capitalize text-blue-500 transition-colors ${
          !isEditing
            ? "peer-checked/work:bg-blue-500 peer-checked/work:text-slate-100"
            : "peer-checked/workEdit:bg-blue-500 peer-checked/workEdit:text-slate-100"
        }`}
      >
        Work
      </label>
      <input
        {...register("category", { required: true })}
        type="radio"
        id={`${isEditing ? "privateEdit" : "private"}`}
        name="category"
        value="private"
        className={`${isEditing ? "peer/privateEdit" : "peer/private"} hidden`}
        defaultChecked={defaultValue === "private" || !isEditing}
      />
      <label
        htmlFor={`${isEditing ? "privateEdit" : "private"}`}
        className={`cursor-pointer border border-blue-500 p-2 capitalize text-blue-500 transition-colors ${
          !isEditing
            ? "peer-checked/private:bg-blue-500 peer-checked/private:text-slate-100"
            : "peer-checked/privateEdit:bg-blue-500 peer-checked/privateEdit:text-slate-100"
        } `}
      >
        Private
      </label>
    </>
  )
}

export default RadioInput
