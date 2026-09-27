import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { experience } from "../../data/about";
import CareerEntry from "../CareerEntry";
import "./index.css";
export default function Experience() {
  const [open, setOpen] = useState(false);
  const listId = useId();
  return (
    <section className="experience">
      <h2 className="section-heading section-heading--about">Experience</h2>
      <div className="experience__panel">
        <ul className="experience__list">
          {experience.slice(0, 2).map((entry) => (
            <CareerEntry key={entry.name} entry={entry} />
          ))}
        </ul>
        <div className="experience__expanded" data-open={open} id={listId}>
          <ul className="experience__list">
            {experience.slice(2).map((entry) => (
              <CareerEntry key={entry.name} entry={entry} />
            ))}
          </ul>
        </div>
        <button
          className="experience__toggle"
          type="button"
          aria-expanded={open}
          aria-controls={listId}
          onClick={() => setOpen(!open)}
        >
          {open ? "Show less" : `Show ${experience.length - 2} more`}
          <motion.span animate={{ rotate: open ? 180 : 0 }}>
            <ChevronDown size={16} aria-hidden="true" />
          </motion.span>
        </button>
      </div>
    </section>
  );
}
