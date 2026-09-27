/** Patrón decorativo de líneas que irradian desde un punto, en naranja muy suave. */
export default function Rays({ originY = 0, className = "" }: { originY?: number; className?: string }) {
  const count = 36;
  const lines = Array.from({ length: count }, (_, i) => {
    const a = (Math.PI * i) / (count - 1);
    return { x: 600 + Math.cos(a) * 1400, y: originY + Math.sin(a) * 1400 };
  });
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMin slice"
      aria-hidden="true"
    >
      {lines.map((l, i) => (
        <line key={i} x1="600" y1={originY} x2={l.x} y2={l.y} stroke="#ffe0d6" strokeWidth="1" />
      ))}
    </svg>
  );
}
