import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { BlobBackground } from "./components/BlobBackground.jsx";
import { HomePage } from "./components/HomePage.jsx";
import { ProjectPage } from "./components/ProjectPage.jsx";
import { SimplePage } from "./components/SimplePage.jsx";
import { SiteHeader } from "./components/SiteHeader.jsx";

export default function App() {
  return (
    <HashRouter>
      <main className="home-page">
        <BlobBackground />
        <SiteHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route
            path="/about"
            element={
              <SimplePage
                eyebrow="About Zoey"
                title="A playful designer with a practical eye."
                text="This page is ready for Zoey's full bio, design values, tools, and resume details."
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </HashRouter>
  );
}
