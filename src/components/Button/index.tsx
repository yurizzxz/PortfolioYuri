import Link from "next/link";
import React from "react";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export default function RedirectButton({ href, ...props }: ButtonProps) {
  return (
    <Link href={href}
      {...props}
      className="bg-spancolor hover:bg-spanhover text-white font-bold py-3 px-7 transition-all rounded-lg"
    />
  );
}
