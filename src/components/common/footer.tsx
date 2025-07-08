import React from "react";
import Link from "next/link";
import { Instagram, Linkedin, Github } from "lucide-react";
import { links } from "@/constants/links";
import { SocialIcons } from "../ui/social-icons";

export default function Footer() {
  return (
    <footer className="bg-common px-4 md:px-0 border-t border-[var(--border)] py-10 ">
      <div className="max-w-6xl  mx-auto flex flex-col md:flex-row justify-between gap-16">
        <div className="flex-1">
          <h1 className="text-[1.5rem] font-bold ">
            Yuri <span className="text-[var(--primary)]">Alves</span>
          </h1>
          <p className="text-sm text-zinc-300">
            Desenvolvo soluções com foco em experiência e
            performance do usuário.
          </p>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-3">Links úteis</h3>
          <ul className="flex flex-col gap-2 text-sm text-zinc-300">
            {links.map((link) => (
              <li key={link.id}>
                <Link href={link.href}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-3">Redes sociais</h3>
          <div className="flex flex-row gap-4 text-zinc-300">
           <SocialIcons />
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Yuri Alves. Todos os direitos reservados.
      </div>
    </footer>
  );
}
