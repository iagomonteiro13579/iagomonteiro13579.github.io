const links = [
  { id: "sobre", label: "01.SOBRE" },
  { id: "skills", label: "02.SKILLS" },
  { id: "experiencia", label: "03.LOGS" },
  { id: "projetos", label: "04.MAP" },
  { id: "metricas", label: "05.HUD" },
  { id: "contato", label: "06.ROOT" },
];

const SystemNav = () => (
  <nav
    aria-label="Navegação do sistema"
    className="sticky top-0 z-30 backdrop-blur-md bg-matrix-black/80 border-b border-matrix/40"
  >
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
      <a
        href="#top"
        className="font-pixel text-[10px] sm:text-xs text-matrix-green text-glow shrink-0"
      >
        ◢ IAGO.sys
      </a>
      <ul className="flex gap-1 sm:gap-3 overflow-x-auto no-scrollbar text-[9px] sm:text-[10px] font-pixel">
        {links.map((l) => (
          <li key={l.id}>
            <a
              href={`#${l.id}`}
              className="px-2 py-1 text-matrix-dim hover:text-matrix-green hover:text-glow whitespace-nowrap transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default SystemNav;
