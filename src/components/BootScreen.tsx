import { useEffect, useState } from "react";

interface BootScreenProps {
  onEnter: () => void;
}

const bootLines = [
  "[ OK ] BIOS v3.14 ... loaded",
  "[ OK ] Mounting /dev/iago ...",
  "[ OK ] Initializing neural core ...",
  "[ OK ] Loading stack: react · node · python · sql ...",
  "[ OK ] AI module: training ...",
  "[ >> ] System ready.",
];

const BootScreen = ({ onEnter }: BootScreenProps) => {
  const [shown, setShown] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = window.setInterval(() => {
      setShown((prev) => [...prev, bootLines[i]]);
      i++;
      if (i >= bootLines.length) {
        window.clearInterval(id);
        setTimeout(() => setReady(true), 350);
      }
    }, 380);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      aria-label="Tela de boot do sistema"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-10"
    >
      <div className="w-full max-w-3xl mx-auto">
        {/* Boot log */}
        <div className="hud-panel p-4 sm:p-6 mb-8 font-mono-term text-lg sm:text-xl leading-relaxed crt-flicker">
          <div className="text-matrix-dim text-xs sm:text-sm mb-3 font-pixel">SYSTEM BOOT // FLN-SC</div>
          {shown.map((line, i) => (
            <div key={i} className="animate-boot-fade text-matrix-green">
              {line}
            </div>
          ))}
          {!ready && <div className="terminal-cursor inline-block" />}
        </div>

        {/* Hero block */}
        {ready && (
          <div className="text-center space-y-6 animate-boot-fade">
            <div>
              <h1 className="font-pixel text-2xl sm:text-4xl md:text-5xl text-matrix-green text-glow-strong leading-tight">
                IAGO MONTEIRO
              </h1>
              <p className="mt-3 font-mono-term text-lg sm:text-xl text-matrix-dim">
                {"> "}Fullstack Developer · IA em evolução
              </p>
              <p className="font-mono-term text-base sm:text-lg text-matrix-dim">
                Florianópolis · SC · BR
              </p>
            </div>

            <button
              onClick={onEnter}
              className="btn-matrix glitch-hover"
              aria-label="Entrar no sistema"
            >
              ▶ ENTER THE SYSTEM
            </button>

            <p className="font-mono-term text-sm text-matrix-dim mt-4">
              press button to continue_
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BootScreen;
