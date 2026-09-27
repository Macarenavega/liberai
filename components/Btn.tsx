interface BtnProps {
  href: string;
  children: React.ReactNode;
  /** "dark": relleno negro para superficies claras. "light": relleno blanco para bandas oscuras. */
  variant?: "dark" | "light" | "outline-light";
  large?: boolean;
  className?: string;
}

const styles = {
  dark: "bg-black text-white border-white hover:bg-[#222222] focus-visible:ring-black",
  light: "bg-white text-black border-white hover:bg-[#f6f5f5] focus-visible:ring-white focus-visible:ring-offset-[#0b252a]",
  "outline-light": "bg-transparent text-white border-white/60 hover:border-white hover:bg-white/10 focus-visible:ring-white focus-visible:ring-offset-[#0b252a]",
};

export default function Btn({ href, children, variant = "dark", large, className = "" }: BtnProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full border font-medium tracking-[-0.02em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${large ? "text-lg px-8 py-4" : "text-base px-6 py-3"} ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
