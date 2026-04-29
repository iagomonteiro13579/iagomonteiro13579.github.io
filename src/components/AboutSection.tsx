import SectionHeader from "./SectionHeader";
import Typewriter from "./Typewriter";
import { useEffect, useRef, useState } from "react";

const lines = [
  "$ cat /etc/iago.profile",
  "",
  "// Origem: Acre — onde o sinal era fraco mas a curiosidade era forte.",
  "// Migrou para Florianópolis em busca de imersão tecnológica.",
  "",
  "// Da resolução de problemas técnicos ao desenvolvimento de sistemas,",
  "// descobriu na programação uma forma de pensar — não só de construir.",
  "",
  "// Hoje, explora Inteligência Artificial como próxima fronteira:",
  "// dados, lógica e automação como ferramentas de impacto real.",
  "",
  "$ traits --list",
  "  ▸ autodidata",
  "  ▸ aprendizado rápido",
  "  ▸ pensamento analítico",
  "  ▸ orientado a problemas",
];

const AboutSection = () => {
  const [start, setStart] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries[0].isIntersecting && setStart(true),
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="sobre" className="py-20 sm:py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          phase="FASE 01 // MÓDULO_USER"
          title="SOBRE_MIM.exe"
          subtitle="Acessando registros pessoais..."
        />
        <div className="hud-panel p-5 sm:p-8 font-mono-term text-base sm:text-lg min-h-[420px]">
          <div className="text-matrix-dim text-xs mb-4 font-pixel flex justify-between">
            <span>~/iago/about</span>
            <span>● REC</span>
          </div>
          {start && <Typewriter lines={lines} speed={14} className="text-matrix-green" />}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
