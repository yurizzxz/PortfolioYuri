import type { ComponentProps } from "react";

interface InputRootProps extends ComponentProps<"div"> {
  error?: boolean;
}

export function InputRoot({ error = false, ...props }: InputRootProps) {
  return (
    <div
      className="w-full p-4 rounded-lg text-base bg-[var(--cardColor)] border border-[var(--border)] focus-within:border-gray-400 data-[error=true]:border-red-500 flex items-center gap-3"
      {...props}
    />
  );
}

interface InputIconProps extends ComponentProps<"span"> {}

export function InputIcon({ ...props }: InputIconProps) {
  return (
    <span
      className="text-gray-400 transition-all group-focus-within:text-gray-400 group-[&:not(:has(input:placeholder-shown))]:text-gray-400 group-data-[error=true]:text-red-500"
      {...props}
    />
  );
}

interface InputFieldProps extends ComponentProps<"input"> {}

export function InputField({ ...props }: InputFieldProps) {
  return (
    <input
      className="bg-transparent placeholder-gray-400 transition-all outline-0 flex-1 text-gray-200 p-2"
      {...props}
    />
  );
}

interface TextFieldProps extends ComponentProps<"textarea"> {}
export function TextField({ ...props }: TextFieldProps) {
  return (
    <textarea
      className="bg-transparent resize-none placeholder-gray-400 transition-all outline-0  text-gray-200 px-2"
      {...props}
      rows={4}
    />
  );
}
