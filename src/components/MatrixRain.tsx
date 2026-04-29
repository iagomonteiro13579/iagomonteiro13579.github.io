import { useEffect, useRef } from "react";

/**
 * Canvas-based subtle Matrix code rain.
 * Performant: single canvas, frame-throttled, low alpha for subtlety.
 */
const MatrixRain = ({ opacity = 0.35 }: { opacity?: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let width = 0;
    let height = 0;
    const fontSize = 16;
    let columns = 0;
    let drops: number[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      columns = Math.floor(width / fontSize);
      drops = Array(columns).fill(0).map(() => Math.random() * -height);
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノ01ABCDEF{}[]<>/*-+=";

    let last = 0;
    const draw = (t: number) => {
      animationId = requestAnimationFrame(draw);
      if (t - last < 60) return;
      last = t;

      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px "VT323", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i];

        // Head (brighter)
        ctx.fillStyle = `rgba(180, 255, 200, ${opacity})`;
        ctx.fillText(text, x, y);

        // Trail
        ctx.fillStyle = `rgba(0, 255, 65, ${opacity * 0.6})`;
        ctx.fillText(text, x, y - fontSize);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += fontSize;
      }
    };
    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [opacity]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
};

export default MatrixRain;
