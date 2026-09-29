import { motion, useReducedMotion } from "motion/react";
import "./index.css";

export default function Portrait() {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className="portrait"
      initial={
        reducedMotion ? false : { opacity: 0, scale: 0.7, filter: "blur(20px)" }
      }
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="portrait__image">
        <img src="/zoey.jpg" alt="Zoey portrait" fetchPriority="high" />
      </div>
    </motion.div>
  );
}
