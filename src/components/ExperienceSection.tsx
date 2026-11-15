import SectionHeader from "./SectionHeader";

const logs = [
  {
    time: "[LOG_03]",
    role: "Desenvolvedor em Formação",
    place: "IFSC · Cubos Academy",
    detail:
      "Análise e Desenvolvimento de Sistemas em andamento. Imersão prática em desenvolvimento de software, lógica e arquitetura.",
    skills: ["Lógica", "Arquitetura", "Algoritmos"],
    status: "ACTIVE",
  },
  {
    time: "[LOG_02]",
    role: "Técnico de TI",
    place: "Atendimento técnico · Suporte",
    detail:
      "Diagnóstico e resolução de problemas reais de hardware, software e rede. Pensamento analítico aplicado em ambientes sob pressão.",
    skills: ["Troubleshooting", "Linux", "Hardware"],
    status: "DONE",
  },
  {
    time: "[LOG_01]",
    role: "Vendedor",
    place: "Atendimento ao cliente",
    detail:
      "Comunicação clara, escuta ativa, negociação e adaptação rápida. Soft skills hoje aplicadas em times técnicos.",
    skills: ["Comunicação", "Negociação", "Empatia"],
    status: "DONE",
  },
];

const ExperienceSection = () => (
  <section id="experiencia" className="py-20 sm:py-28 px-4">
    <div className="max-w-5xl mx-auto">
      <SectionHeader
        phase="FASE 03 // SYSTEM_LOGS"
        title="EXPERIÊNCIA.log"
        subtitle="Trilha de eventos registrados pelo kernel"
      />

      <ol className="relative border-l-2 border-matrix/60 pl-6 sm:pl-10 space-y-8">
        {logs.map((l, i) => (
          <li key={i} className="relative">
            <span
              className="absolute -left-[34px] sm:-left-[50px] top-1 w-3 h-3 bg-matrix-green border-glow-md"
              aria-hidden
            />
            <article className="hud-panel p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-3 mb-3 font-pixel text-[11px] sm:text-xs">
                <span className="text-matrix-dim">{l.time}</span>
                <span
                  className={`px-2 py-0.5 border ${
                    l.status === "ACTIVE"
                      ? "border-matrix-green text-matrix-green text-glow"
                      : "border-matrix/40 text-matrix-dim"
                  }`}
                >
                  {l.status}
                </span>
              </div>
              <h3 className="font-pixel text-sm sm:text-base text-matrix-green text-glow leading-snug">
                {l.role}
              </h3>
              <p className="font-mono-term text-matrix-copy text-lg sm:text-xl font-medium mt-2 leading-snug">
                {">"} {l.place}
              </p>
              <p className="font-mono-term text-matrix-copy text-lg sm:text-xl leading-relaxed mt-3">
                {l.detail}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {l.skills.map((s) => (
                  <span
                    key={s}
                    className="font-pixel text-[10px] sm:text-[11px] px-2 py-1 border border-matrix/50 text-matrix-green bg-matrix-black/50"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default ExperienceSection;
