import { useEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";

const metrics = [
  { label: "PROJETOS", value: 12, suffix: "+", note: "shipped & shelved" },
  { label: "TECNOLOGIAS", value: 9, suffix: "", note: "stack ativa" },
  { label: "HORAS DE ESTUDO", value: 1500, suffix: "+", note: "auto-tracked" },
  { label: "NÍVEL ATUAL", value: 27, suffix: "", note: "fullstack tier" },
];

const useCount = (target: number, active: boolean) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setN(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);
  return n;
};

const MetricCard = ({
  label,
  value,
  suffix,
  note,
  active,
}: (typeof metrics)[number] & { active: boolean }) => {
  const n = useCount(value, active);
  return (
    <div className="hud-panel p-5 sm:p-6 text-center relative overflow-hidden">
      <div className="absolute top-2 right-2 font-pixel text-[8px] text-matrix-dim">
        ◉ LIVE
      </div>
      <div className="font-pixel text-[10px] sm:text-xs text-matrix-dim mb-3">
        {label}
      </div>
      <div className="font-pixel text-3xl sm:text-5xl text-matrix-green text-glow-strong tabular-nums">
        {n}
        {suffix}
      </div>
      <div className="mt-3 font-mono-term text-xs sm:text-sm text-matrix-dim">
        // {note}
      </div>
    </div>
  );
};

const MetricsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (e) => e[0].isIntersecting && setActive(true),
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="metricas" className="py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          phase="HUD // CONTROL_PANEL"
          title="MÉTRICAS.dash"
          subtitle="Painel de controle do desenvolvedor — em tempo real"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((m) => (
            <MetricCard key={m.label} {...m} active={active} />
          ))}
        </div>

        <div className="hud-panel mt-8 p-5 sm:p-6 font-mono-term text-base">
          <div className="font-pixel text-xs text-matrix-dim mb-3">
            EVOLUTION_TRACK
          </div>
          <div className="grid sm:grid-cols-3 gap-4 text-matrix-green">
            <div>
              <span className="text-matrix-dim">{">"} fase atual:</span>{" "}
              fullstack
            </div>
            <div>
              <span className="text-matrix-dim">{">"} próxima fase:</span> ai
              engineer
            </div>
            <div>
              <span className="text-matrix-dim">{">"} status:</span>{" "}
              <span className="text-glow">leveling up_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
