import { Github, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export function SocialIcons() {
  return (
    <div className="flex flex-row gap-4">
      <Link
        className="duration-300 hover:text-spanhover"
        href="https://github.com/yurizzxz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github />
      </Link>
      <Link
        className="duration-300 hover:text-spanhover"
        href="https://linkedin.com/in/yurizzxz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin />
      </Link>
      <Link
        className="duration-300 hover:text-spanhover"
        href="https://instagram.com/yurinsights"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram />
      </Link>
    </div>
  );
}
