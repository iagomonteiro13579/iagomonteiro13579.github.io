import { useEffect, useState } from "react";

interface TypewriterProps {
  lines: string[];
  speed?: number;
  startDelay?: number;
  onDone?: () => void;
  className?: string;
  showCursor?: boolean;
}

const Typewriter = ({
  lines,
  speed = 22,
  startDelay = 0,
  onDone,
  className,
  showCursor = true,
}: TypewriterProps) => {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let timeouts: number[] = [];

    const start = window.setTimeout(() => {
      let lineIndex = 0;
      let charIndex = 0;
      const tick = () => {
        if (cancelled) return;
        if (lineIndex >= lines.length) {
          setDone(true);
          onDone?.();
          return;
        }
        const line = lines[lineIndex];
        if (charIndex <= line.length) {
          setCurrentLine(line.slice(0, charIndex));
          charIndex++;
          timeouts.push(window.setTimeout(tick, speed));
        } else {
          setDisplayed((prev) => [...prev, line]);
          setCurrentLine("");
          lineIndex++;
          charIndex = 0;
          timeouts.push(window.setTimeout(tick, 180));
        }
      };
      tick();
    }, startDelay);

    return () => {
      cancelled = true;
      window.clearTimeout(start);
      timeouts.forEach((t) => window.clearTimeout(t));
    };
  }, [lines, speed, startDelay, onDone]);

  return (
    <div className={className}>
      {displayed.map((l, i) => (
        <div key={i} className="whitespace-pre-wrap">{l || "\u00A0"}</div>
      ))}
      {!done && (
        <div className={`whitespace-pre-wrap ${showCursor ? "terminal-cursor" : ""}`}>
          {currentLine}
        </div>
      )}
    </div>
  );
};

export default Typewriter;
