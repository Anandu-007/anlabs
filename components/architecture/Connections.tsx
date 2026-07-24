"use client";

import { useEffect, useRef, useState } from "react";

const connections = [
  { id: "client-api", start: [350, 62], end: [350, 110] },

  { id: "api-auth", start: [320, 165], end: [180, 245] },

  { id: "api-ai", start: [350, 165], end: [350, 245] },

  { id: "api-dashboard", start: [380, 165], end: [520, 245] },

  { id: "auth-db", start: [180, 325], end: [130, 390] },

  { id: "ai-redis", start: [350, 325], end: [350, 390] },

  { id: "redis-docker", start: [410, 430], end: [520, 430] },
];

function Connection({
  start,
  end,
  progress,
}: {
  start: number[];
  end: number[];
  progress: number;
}) {
  const pathRef = useRef<SVGPathElement>(null);

  const [point, setPoint] = useState({
    x: start[0],
    y: start[1],
  });

  const controlOffset = Math.max(
    50,
    Math.abs(start[0] - end[0]) * 0.35
  );

  const dx = end[0] - start[0];
const dy = end[1] - start[1];

const d = `
M ${start[0]} ${start[1]}
C
${start[0]} ${start[1] + Math.abs(dy) * 0.45},
${end[0]} ${end[1] - Math.abs(dy) * 0.45},
${end[0]} ${end[1]}
`;

  useEffect(() => {
    if (!pathRef.current) return;

    const length = pathRef.current.getTotalLength();

    const p = pathRef.current.getPointAtLength(
      length * progress
    );

    setPoint({
      x: p.x,
      y: p.y,
    });
  }, [progress]);

  return (
    <>
      <path
        ref={pathRef}
        d={d}
        fill="none"
        stroke="url(#line)"
        strokeWidth="2"
      />

      <circle
        cx={point.x}
        cy={point.y}
        r="4"
        fill="#6ee7b7"
      />

      <circle
        cx={point.x}
        cy={point.y}
        r="8"
        fill="#22c55e"
        opacity="0.25"
      />
    </>
  );
}

export default function Connections() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame: number;

    const animate = () => {
      setProgress((p) => {
        const next = p + 0.0025;
        return next > 1 ? 0 : next;
      });

      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <svg
      className="absolute inset-0 w-full h-full overflow-visible"
      viewBox="0 0 700 500"
    >
      <defs>
        <linearGradient
          id="line"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop
            offset="0%"
            stopColor="#22c55e"
            stopOpacity="0.2"
          />

          <stop
            offset="50%"
            stopColor="#22c55e"
            stopOpacity="1"
          />

          <stop
            offset="100%"
            stopColor="#22c55e"
            stopOpacity="0.2"
          />
        </linearGradient>
      </defs>

      {connections.map((connection) => (
        <Connection
          key={connection.id}
          start={connection.start}
          end={connection.end}
          progress={progress}
        />
      ))}
    </svg>
  );
}