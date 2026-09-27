import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import ContactSection from "../../components/ContactSection";
import "./index.css";
export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Projects />
      <ContactSection />
    </div>
  );
}
