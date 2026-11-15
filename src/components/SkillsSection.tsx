import SectionHeader from "./SectionHeader";
import XPBar from "./XPBar";

const skills = [
  {
    category: "FRONTEND",
    items: [
      { label: "HTML / CSS", level: 90, tag: "estrutura · semântica · responsivo" },
      { label: "JavaScript", level: 80, tag: "ES6+ · DOM · async" },
      { label: "React", level: 75, tag: "hooks · state · components" },
    ],
  },
  {
    category: "BACKEND",
    items: [
      { label: "Node.js", level: 70, tag: "express · APIs REST" },
      { label: "SQL / Supabase", level: 70, tag: "modelagem · queries · joins" },
      { label: "n8n", level: 65, tag: "workflows · integrações · automação" },
    ],
  },
  {
    category: "PROGRAMAÇÃO & INFRA",
    items: [
      { label: "Java", level: 70, tag: "POO · Spring Boot · aplicações" },
      { label: "Python", level: 70, tag: "scripting · automação · data" },
      { label: "Linux", level: 75, tag: "shell · permissões · servidores" },
      { label: "Docker", level: 55, tag: "Dockerfile · Compose · containers" },
    ],
  },
  {
    category: "INTELIGÊNCIA ARTIFICIAL",
    items: [
      { label: "IA / ML", level: 45, tag: "[evoluindo] · LLMs · prompt eng." },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 px-4 bg-gradient-to-b from-transparent via-matrix-dark/20 to-transparent">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          phase="FASE 02 // SKILL_TREE"
          title="HABILIDADES.sys"
          subtitle="XP acumulada por área de combate técnico"
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skills.map((group) => (
            <div key={group.category} className="hud-panel p-5 sm:p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-pixel text-xs sm:text-sm text-matrix-green text-glow">
                  ▣ {group.category}
                </h3>
                <span className="font-mono-term text-sm text-matrix-dim">
                  {group.items.length} STREAM(S)
                </span>
              </div>
              <div className="space-y-5">
                {group.items.map((s) => (
                  <XPBar key={s.label} label={s.label} level={s.level} tag={s.tag} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
