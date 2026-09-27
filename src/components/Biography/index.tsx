import { profile } from "../../data/profile";
import "./index.css";
export default function Biography() {
  return (
    <section className="biography">
      <h1 className="section-heading">
        Hello! I’m <span>{profile.name}</span>.
      </h1>
      <div className="biography__copy">
        <p>
          A <strong>product designer and frontend engineer</strong> passionate
          about building intuitive, human-centered digital experiences. With a
          background in <strong>visual craft</strong> and{" "}
          <strong>interaction design</strong>, I bring a unique blend of design
          thinking and technical execution to every project.
        </p>
        <p>
          My journey into design began when I realized how often good user
          experience was missing from powerful tools. That led me to embrace{" "}
          <strong>user-centered design</strong> as both a mindset and a craft,
          one that balances clarity, creativity, and functionality.
        </p>
        <p>
          Currently leading design at small product teams shipping software for{" "}
          <strong>creative professionals</strong>, I’m always looking for
          opportunities to{" "}
          <strong>
            shape thoughtful interfaces and build scalable design systems
          </strong>
          .
        </p>
      </div>
    </section>
  );
}
