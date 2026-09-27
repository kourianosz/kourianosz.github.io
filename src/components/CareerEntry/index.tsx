import "./index.css";
type Entry = {
  name: string;
  description: string;
  period: string;
};
export default function CareerEntry({ entry }: { entry: Entry }) {
  return (
    <li className="career-entry">
      <div>
        <h3>{entry.name}</h3>
        <p>
          {entry.description}
          <span className="career-entry__period">{entry.period}</span>
        </p>
      </div>
    </li>
  );
}
