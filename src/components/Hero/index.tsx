import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import ContactButton from "../ContactButton";
import Portrait from "../Portrait";
import "./index.css";
export default function Hero() {
  return (
    <section className="hero container">
      <motion.div
        className="hero__copy"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="hero__greeting">Product Designer</p>
        <h1>Zoey Kourianos</h1>
        <p className="hero__description">
          I bring creative solutions and a unique perspective to any problem.
        </p>
        <div className="hero__actions">
          <ContactButton />
          <Link className="button button--secondary" to="/projects">
            View my work
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </motion.div>
      <Portrait />
    </section>
  );
}
