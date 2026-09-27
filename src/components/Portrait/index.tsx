import { motion, useReducedMotion } from "motion/react";
import PortraitMorph from "../PortraitMorph";
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
        {reducedMotion ? (
          <img
            src="/josh.webp"
            alt="Josh portrait"
            width={840}
            height={840}
            fetchPriority="high"
          />
        ) : (
          <PortraitMorph
            srcA="/josh.webp"
            srcB="/josh_wave.webp"
            alt="Josh portrait"
          />
        )}
      </div>
    </motion.div>
  );
}
