"use client";

type PacketProps = {
  left: string;
  top: string;
  delay?: string;
};

export default function Packet({
  left,
  top,
  delay = "0s",
}: PacketProps) {
  return (
    <div
      className="absolute w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#22c55e] animate-pulse"
      style={{
        left,
        top,
        animationDelay: delay,
      }}
    />
  );
}