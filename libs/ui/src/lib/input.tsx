
interface InputnputProps  {
  value?: string
  onChange?: any
  placeholder?: string
  onEnter?: () => void
  className?: string
}

export function Input({
  value,
  onChange,
  placeholder = "",
  onEnter,
  className = "",
}: InputnputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`flex-1 text-lg outline-none ${className}`}
      onKeyDown={(e) => e.key === "Enter" && onEnter?.()}
    />
  )
}
export default Input;
