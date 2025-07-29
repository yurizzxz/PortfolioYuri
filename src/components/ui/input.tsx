import type { ComponentProps } from "react";

interface InputRootProps extends ComponentProps<"div"> {
  error?: boolean;
}

export function InputRoot({ error = false, ...props }: InputRootProps) {
  return (
    <div
      className="w-full px-3 md:px-4 py-1.5 md:py-2 rounded-md text-base bg-[var(--input)] border border-[var(--border)] focus-within:border-zinc-600 data-[error=true]:border-red-500 flex items-center gap-2"
      {...props}
    />
  );
}

export function InputIcon(props: ComponentProps<"span">) {
  return (
    <span
      className="text-zinc-700 transition-all group-focus-within:text-zinc-400 group-[&:not(:has(input:placeholder-shown))]:text-zinc-400 group-data-[error=true]:text-red-500"
      {...props}
    />
  );
}

export function InputField(props: ComponentProps<"input">) {
  return (
    <input
      className="bg-transparent text-sm placeholder-zinc-500 transition-all outline-0 flex-1 text-zinc-200 px-1 py-2"
      {...props}
    />
  );
}

export function TextField(props: ComponentProps<"textarea">) {
  return (
    <textarea
      className="bg-transparent w-full resize-none placeholder-zinc-800 transition-all outline-0 text-zinc-200"
      {...props}
      rows={4}
    />
  );
}
