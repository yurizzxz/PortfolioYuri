import { motion } from "framer-motion";
export default function SocialNetwork() {
  return (
    <>
      <motion.a
        href="https://github.com/yurizzxz"
        className="aboutLink"
        target="_blank"
        transition={{
          delay: -1,
        }}
        whileHover={{
          y: -3,
          scale: 1.1,
        }}
      >
        <i className="fab fa-github"></i>
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/yurizzxz/"
        className="aboutLink"
        target="_blank"
        transition={{
          delay: -1,
        }}
        whileHover={{
          y: -5,
          scale: 1.1,
        }}
      >
        <i className="fab fa-linkedin"></i>
      </motion.a>
      <motion.a
        href="https://behance.net/yurizzxz"
        className="aboutLink"
        target="_blank"
        transition={{
          delay: -1,
        }}
        whileHover={{
          y: -5,
          scale: 1.1,
        }}
      >
        <i className="fab fa-behance"></i>
      </motion.a>
    </>
  );
}
