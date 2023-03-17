import {
  FieldValues,
  UseFormRegister,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form/dist/types"

import InputContainer from "./InputContainer"

interface InputProps {
  value: string
  name: string
  placeholder: string
  register: UseFormRegister<FieldValues>
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>
  defaultValue?: string
}

function Input({
  value,
  name,
  placeholder,
  register,
  error,
  defaultValue,
}: InputProps) {
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
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={`grow border bg-slate-100 p-2 ${error && "border-red-500"} `}
      />
    </InputContainer>
  )
}

export default Input
