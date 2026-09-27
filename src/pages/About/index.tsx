import Biography from "../../components/Biography";
import Experience from "../../components/Experience";
import Education from "../../components/Education";
import Skills from "../../components/Skills";
import ContactSection from "../../components/ContactSection";
import "./index.css";
export default function About() {
  return (
    <>
      <div className="about-page">
        <Biography />
        <div className="about-page__details">
          <Experience />
          <Education />
          <Skills />
        </div>
      </div>
      <ContactSection />
    </>
  );
}
