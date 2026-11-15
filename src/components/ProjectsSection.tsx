import SectionHeader from "./SectionHeader";
import { ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    id: "01",
    name: "Plataforma de E-commerce Web",
    stack: ["React", "JavaScript", "Firebase", "Express", "Prisma", "Stripe"],
    problem:
      "Desenvolvimento de uma aplicação de e-commerce com navegação dinâmica, organização de produtos, gerenciamento de usuários e integração entre front-end, back-end e serviços externos.",
    highlights: [
      "Arquitetura dividida entre front-end e back-end",
      "Integração com Firebase",
      "Estrutura com serviços e componentes reutilizáveis",
      "Integração com APIs e serviços externos",
      "Configuração de regras e índices do Firestore",
      "29 commits no desenvolvimento do projeto",
    ],
    link: "https://github.com/iagomonteiro13579/project-tabacaria",
    difficulty: "★★★★★",
    category: "Full Stack",
    status: "Projeto em evolução",
  },

  {
    id: "02",
    name: "Game 2D em Java",
    stack: ["Java", "Programação Orientada a Objetos", "Game Development"],
    problem:
      "Desenvolvimento de um jogo 2D aplicando conceitos de lógica de programação, orientação a objetos, gerenciamento de entidades, controles de jogador e mecânicas de combate.",
    highlights: [
      "Estrutura orientada a objetos",
      "Sistema de jogador e inimigos",
      "Boss e sistema de ataques",
      "Gerenciamento de sprites",
      "Controle de eventos e movimentação",
      "Organização do projeto em múltiplas classes",
    ],
    link: "https://github.com/iagomonteiro13579/ZezinhoGame",
    difficulty: "★★★★☆",
    category: "Java / Game Development",
    status: "Projeto acadêmico / experimental",
  },

  {
    id: "03",
    name: "Green Smoke — Website de Tabacaria",
    stack: ["HTML5", "CSS3", "JavaScript"],
    problem:
      "Criação de uma interface web para uma tabacaria, trabalhando navegação entre páginas, estrutura visual, formulários e interação com elementos da aplicação.",
    highlights: [
      "Página inicial e catálogo",
      "Página de produtos",
      "Tela de login",
      "Tela de cadastro",
      "Área de usuário",
      "Organização de estilos, scripts e imagens",
    ],
    link: "https://github.com/iagomonteiro13579/green-smoke",
    difficulty: "★★★☆☆",
    category: "Front-end",
    status: "Projeto base",
  },

  {
    id: "04",
    name: "NPC SniperBot",
    stack: ["Java", "Robocode", "Lógica de programação"],
    problem:
      "Desenvolvimento de um agente autônomo para ambiente de batalha, explorando tomada de decisão, movimentação e comportamento programado.",
    highlights: [
      "Comportamento autônomo",
      "Lógica de combate",
      "Programação orientada a eventos",
      "Tomada de decisão em tempo de execução",
    ],
    link: "https://github.com/iagomonteiro13579/robocode.NPC",
    difficulty: "★★★☆☆",
    category: "Java / Robótica",
    status: "Projeto experimental",
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
        {projects.map((p) => (
          <article
            key={p.id}
            className="hud-panel p-5 sm:p-6 group hover:border-matrix-green transition-all hover:translate-y-[-3px] hover:[box-shadow:var(--glow-md)]"
          >
            <header className="flex items-start gap-3 mb-4">
              <Folder
                className="w-5 h-5 text-matrix-green shrink-0 mt-1"
                aria-hidden
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3 mb-1">
                  <div className="font-pixel text-[11px] text-matrix-dim">
                    STAGE_{p.id}
                  </div>
                  <span
                    className="font-pixel text-xs text-matrix-green text-glow whitespace-nowrap shrink-0"
                    aria-label={`dificuldade ${p.difficulty}`}
                  >
                    {p.difficulty}
                  </span>
                </div>
                <h3 className="font-pixel text-sm sm:text-base text-matrix-green text-glow leading-snug whitespace-normal break-words">
                  {p.name}
                </h3>
              </div>
            </header>

            <p className="font-mono-term text-matrix-copy text-lg sm:text-xl leading-relaxed mb-4">
              {">"} {p.problem}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="font-pixel text-[10px] sm:text-[11px] px-2 py-1 border border-matrix/50 text-matrix-green bg-matrix-black/60"
                >
                  {s}
                </span>
              ))}
            </div>

            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-pixel text-[11px] sm:text-xs text-matrix-green border-b border-matrix-green/40 hover:border-matrix-green pb-1 glitch-hover"
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
