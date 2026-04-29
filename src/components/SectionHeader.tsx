interface SectionHeaderProps {
  phase: string;
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ phase, title, subtitle }: SectionHeaderProps) => (
  <header className="mb-10 sm:mb-14">
    <div className="flex items-center gap-3 mb-4">
      <span className="font-pixel text-[10px] sm:text-xs px-2 py-1 border border-matrix bg-matrix-black text-matrix-green text-glow">
        {phase}
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-matrix-green/80 to-transparent" />
    </div>
    <h2 className="font-pixel text-xl sm:text-3xl md:text-4xl text-matrix-green text-glow-strong leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 font-mono-term text-base sm:text-lg text-matrix-dim">
        {"> "}{subtitle}
      </p>
    )}
  </header>
);

export default SectionHeader;
