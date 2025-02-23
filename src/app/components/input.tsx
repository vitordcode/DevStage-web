import type { ComponentProps } from 'react'

interface InputRootProps extends ComponentProps<'div'> {
  error?: boolean
}

export function InputRoot({ error = false, ...props }: InputRootProps) {
  return (
    <div
      {...props}
      data-error={error}
      className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger"
    />
  )
}

interface InputIconProps extends ComponentProps<'span'> {}

export function InputIcon(props: InputIconProps) {
  return (
    <span
      {...props}
      className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
    />
  )
}

interface InputFieldProps extends ComponentProps<'input'> {}

export function InputField(props: InputFieldProps) {
  return <input {...props} className="flex-1  outline-0 placeholder-gray-400" />
}
