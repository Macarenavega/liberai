interface LogoProps {
  className?: string;
  /** Color de "Liber"; "AI" siempre va en naranja de marca. */
  color?: string;
}

export default function Logo({ className = "text-2xl", color = "#1C1F26" }: LogoProps) {
  return (
    <span
      className={`font-[family-name:var(--font-bebas)] tracking-widest leading-none ${className}`}
      style={{ color, letterSpacing: "0.1em" }}
    >
      Liber<span style={{ color: "#F4700F" }}>AI</span>
    </span>
  );
}
