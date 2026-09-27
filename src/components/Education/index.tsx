import { education } from "../../data/about";
import CareerEntry from "../CareerEntry";
import "./index.css";
export default function Education() {
  return (
    <section className="education">
      <h2 className="section-heading section-heading--about">Education</h2>
      <ul>
        {education.map((entry) => (
          <CareerEntry key={entry.name} entry={entry} />
        ))}
      </ul>
    </section>
  );
}
