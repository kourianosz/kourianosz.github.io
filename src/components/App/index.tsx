import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation";
import RouteEffects from "../RouteEffects";
import ContactStatus from "../ContactStatus";
import BlobBackground from "../BlobBackground";
import Home from "../../pages/Home";
import ProjectsPage from "../../pages/ProjectsPage";
import ProjectDetail from "../../pages/ProjectDetail";
import About from "../../pages/About";
import NotFound from "../../pages/NotFound";
import "./index.css";

export default function App() {
  return (
    <>
      <BlobBackground />
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          const main = document.getElementById("main-content");
          main?.focus({ preventScroll: true });
          main?.scrollIntoView({ behavior: "instant" });
        }}
      >
        Skip to main content
      </a>
      <Navigation />
      <RouteEffects />
      <ContactStatus />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
