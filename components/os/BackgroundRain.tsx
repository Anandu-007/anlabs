"use client";

import { useEffect, useRef } from "react";

export default function BackgroundRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const chars =
      "01ABCDEF{}[]<>/$#@+=-*".split("");

    const fontSize = 16;
    const columns = Math.ceil(canvas.width / fontSize);

    const drops = new Array(columns)
      .fill(0)
      .map(() => Math.floor(Math.random() * canvas.height / fontSize));

    let frame = 0;
    let animationId = 0;

    const draw = () => {
      frame++;

      // Update roughly 20 FPS
      if (frame % 3 === 0) {
        ctx.fillStyle = "rgba(0,0,0,0.08)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = `${fontSize}px monospace`;

        // Soft mint green
        ctx.fillStyle = "#7CFFB4";

        for (let i = 0; i < columns; i++) {
          const text =
            chars[Math.floor(Math.random() * chars.length)];

          ctx.fillText(
            text,
            i * fontSize,
            drops[i] * fontSize
          );

          if (
            drops[i] * fontSize > canvas.height &&
            Math.random() > 0.985
          ) {
            drops[i] = 0;
          }

          drops[i]++;
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);
return (
  <canvas
    ref={canvasRef}
    className="fixed inset-0 -z-10 pointer-events-none opacity-80"
  />
);
}