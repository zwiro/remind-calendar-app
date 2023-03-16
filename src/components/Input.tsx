import InputContainer from "./InputContainer"

interface InputProps {
  value: string
  name: string
  placeholder: string
}

function Input({ value, name, placeholder }: InputProps) {
  return (
    <InputContainer>
      <label htmlFor={value} className="w-1/5">
        {name}
      </label>
      <input
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
