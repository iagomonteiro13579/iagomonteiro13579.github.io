import { useEffect, useRef, useState } from "react";

interface XPBarProps {
  label: string;
  level: number; // 0-100
  tag?: string;
}

const XPBar = ({ label, level, tag }: XPBarProps) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setWidth(level), 120);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-baseline justify-between text-xs sm:text-sm font-pixel">
        <span className="text-matrix-green text-glow uppercase">{label}</span>
        <span className="text-matrix-dim">
          LV.{Math.floor(level / 10)} <span className="text-matrix-green">{level}/100</span>
        </span>
      </div>
      <div className="xp-bar">
        <div className="xp-bar-fill" style={{ width: `${width}%` }} />
      </div>
      {tag && <p className="text-sm sm:text-base text-matrix-dim font-mono-term">// {tag}</p>}
    </div>
  );
};

export default XPBar;
