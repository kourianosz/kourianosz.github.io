import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { skills } from "../../data/about";
import "./index.css";
export default function Skills() {
  const [open, setOpen] = useState(false);
  const expandedId = useId();
  const visibleSkills = skills.slice(0, 2);
  const hiddenSkills = skills.slice(2);

  return (
    <section className="skills">
      <h2 className="section-heading section-heading--about">Capabilities</h2>
      <div className="skills__groups">
        {visibleSkills.map((skillGroup) => (
          <div className="skills__group" key={skillGroup.group}>
            <h3>{skillGroup.group}</h3>
            <ul>
              {skillGroup.items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="skills__more" data-open={open} id={expandedId}>
          <div className="skills__more-inner">
            {hiddenSkills.map((skillGroup) => (
              <div className="skills__group" key={skillGroup.group}>
                <h3>{skillGroup.group}</h3>
                <ul>
                  {skillGroup.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <button
          className="skills__toggle"
          type="button"
          aria-expanded={open}
          aria-controls={expandedId}
          onClick={() => setOpen(!open)}
        >
          {open ? "Show less" : "Show all"}
          <motion.span animate={{ rotate: open ? 180 : 0 }}>
            <ChevronDown size={16} aria-hidden="true" />
          </motion.span>
        </button>
      </div>
    </section>
  );
}
