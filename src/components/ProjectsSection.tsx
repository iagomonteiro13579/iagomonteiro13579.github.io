import SectionHeader from "./SectionHeader";
import { ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    id: "01",
    name: "Plataforma de E-commerce Web",
    stack: ["React", "JavaScript", "CSS"],
    problem:
      "Desenvolver uma aplicação web de e-commerce focada em usabilidade, com navegação dinâmica, organização de produtos e experiência otimizada para o usuário.",
    link: "https://github.com/iagomonteiro13579/project-tabacaria",
    difficulty: "★★★",
  },
  {
    id: "02",
    name: "Game Web Interativo 2D",
    stack: ["JavaScript", "HTML", "CSS"],
    problem:
      "Implementar um jogo web interativo focado em lógica de programação, controle de eventos e renderização dinâmica de elementos, simulando mecânicas básicas de jogos em ambiente web.",
    link: "https://github.com/iagomonteiro13579/ZezinhoGame",
    difficulty: "★★★",
  },
  {
    id: "03",
    name: "Dashboard de Dados",
    stack: ["JavaScript", "SQL", "Charts"],
    problem:
      "Transformar dados brutos em insights visuais para apoiar decisões mais rápidas.",
    link: "https://github.com/iagomonteirosantos",
    difficulty: "★★★",
  },
  {
    id: "04",
    name: "Experimentos com IA",
    stack: ["Python", "LLMs", "Prompt Eng."],
    problem:
      "Explorar integração de modelos de linguagem em soluções práticas — protótipos vivos.",
    link: "https://github.com/iagomonteirosantos",
    difficulty: "★★★★",
  },
];

const ProjectsSection = () => (
  <section
    id="projetos"
    className="py-20 sm:py-28 px-4 bg-gradient-to-b from-transparent via-matrix-dark/20 to-transparent"
  >
    <div className="max-w-6xl mx-auto">
      <SectionHeader
        phase="FASE 04 // SYSTEM_MAP"
        title="PROJETOS.map"
        subtitle="Selecione uma fase executável para inspecionar o código-fonte"
      />

      <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
        {projects.map((p) => (
          <article
            key={p.id}
            className="hud-panel p-5 sm:p-6 group hover:border-matrix-green transition-all hover:translate-y-[-3px] hover:[box-shadow:var(--glow-md)]"
          >
            <header className="flex items-start justify-between gap-3 mb-4">
              <div className="flex items-center gap-3 min-w-0">
                <Folder
                  className="w-5 h-5 text-matrix-green shrink-0"
                  aria-hidden
                />
                <div className="min-w-0">
                  <div className="font-pixel text-[10px] text-matrix-dim mb-1">
                    STAGE_{p.id}
                  </div>
                  <h3 className="font-pixel text-sm sm:text-base text-matrix-green text-glow leading-snug truncate">
                    {p.name}
                  </h3>
                </div>
              </div>
              <span
                className="font-pixel text-xs text-matrix-green text-glow whitespace-nowrap"
                aria-label={`dificuldade ${p.difficulty}`}
              >
                {p.difficulty}
              </span>
            </header>

            <p className="font-mono-term text-matrix-green/90 text-base mb-4">
              {">"} {p.problem}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="font-pixel text-[9px] px-2 py-1 border border-matrix/50 text-matrix-green bg-matrix-black/60"
                >
                  {s}
                </span>
              ))}
            </div>

            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-pixel text-[10px] sm:text-xs text-matrix-green border-b border-matrix-green/40 hover:border-matrix-green pb-1 glitch-hover"
            >
              EXEC ./github <ExternalLink className="w-3 h-3" aria-hidden />
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
