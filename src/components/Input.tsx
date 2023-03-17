import { FieldValues, UseFormRegister } from "react-hook-form/dist/types"

import InputContainer from "./InputContainer"

interface InputProps {
  value: string
  name: string
  placeholder: string
  register: UseFormRegister<FieldValues>
}

function Input({ value, name, placeholder, register }: InputProps) {
  return (
    <InputContainer>
      <label htmlFor={value} className="w-1/5">
        {name}
      </label>
      <input
        {...register(value, { required: true })}
        type="text"
        name={value}
        id={value}
        placeholder={placeholder}
        className="grow bg-slate-100 p-2"
      />
    </InputContainer>
  )
}

export default Input
