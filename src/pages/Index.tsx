import { useState } from "react";
import MatrixRain from "@/components/MatrixRain";
import BootScreen from "@/components/BootScreen";
import SystemNav from "@/components/SystemNav";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import MetricsSection from "@/components/MetricsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    setEntered(true);
    requestAnimationFrame(() => {
      document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <main
      id="top"
      className="relative min-h-screen text-matrix-green scan-overlay"
    >
      <MatrixRain opacity={entered ? 0.18 : 0.4} />

      {/* JSON-LD person */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Iago Monteiro dos Santos",
            jobTitle: "Fullstack Developer",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Florianópolis",
              addressRegion: "SC",
              addressCountry: "BR",
            },
            email: "mailto:iagomonteiro13579@gmail.com",
            knowsAbout: [
              "React",
              "Node.js",
              "Python",
              "SQL",
              "Linux",
              "Inteligência Artificial",
            ],
          }),
        }}
      />

      {!entered ? (
        <BootScreen onEnter={handleEnter} />
      ) : (
        <>
          <SystemNav />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <MetricsSection />
          <ContactSection />
        </>
      )}
    </main>
  );
};

export default Index;
