import { motion } from "framer-motion";

const socialLinks = [
  {
    href: "https://github.com/yurizzxz",
    iconClass: "fab fa-github",
    hoverY: -3,
  },
  {
    href: "https://www.linkedin.com/in/yurizzxz/",
    iconClass: "fab fa-linkedin",
    hoverY: -5,
  },
  {
    href: "https://behance.net/yurizzxz",
    iconClass: "fab fa-behance",
    hoverY: -5,
  },
];

export default function SocialNetwork() {
  return (
    <>
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          className="hover:text-spanhover transition-all"
          target="_blank"
          rel="noopener noreferrer"
          transition={{ delay: -1 }}
          whileHover={{
            y: link.hoverY,
            scale: 1.1,
          }}
        >
          <i className={link.iconClass} ></i>
        </motion.a>
      ))}
    </>
  );
}
