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
          A product designer based in the Bay Area. My designs are all about
          making users feel organized, confident, and inspired. I think that
          designs should meet users where they are at and support them in their
          journey instead of assuming everyone needs the same experience. I
          bring curiosity, attention to detail, and a collaborative mindset to
          the way I approach design challenges.
        </p>
        <p>
          Outside of design, you'll often find me going down research rabbit
          holes about restaurants and places I want to visit. Another creative
          outlet of mine is an ongoing illustration project that imagines
          desserts from around the world as bunnies. I love hearing about
          people's niche interests, so tell me what rabbit holes you’ve
          explored!
        </p>
      </div>
    </section>
  );
}
