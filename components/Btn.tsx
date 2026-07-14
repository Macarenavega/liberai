"use client";

interface BtnProps {
  href: string;
  children: React.ReactNode;
  large?: boolean;
  className?: string;
}

export default function Btn({ href, children, large, className = "" }: BtnProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 font-semibold rounded-sm text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1F26] ${large ? "text-lg px-8 py-5" : "px-6 py-3"} ${className}`}
      style={{ background: "var(--safety)" }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#d95e08")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "var(--safety)")}
    >
      {children}
    </a>
  );
}
