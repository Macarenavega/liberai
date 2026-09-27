interface BtnProps {
  href: string;
  children: React.ReactNode;
  /** "primary": relleno naranja. "ghost": borde naranja sin relleno. */
  variant?: "primary" | "ghost";
  large?: boolean;
  className?: string;
}

const styles = {
  primary: "bg-[#f53900] text-[#fffafa] border-[#f53900] hover:bg-[#d93200] hover:border-[#d93200]",
  ghost: "bg-transparent text-[#f53900] border-[#f53900] hover:bg-[#ffe0d6]",
};

export default function Btn({ href, children, variant = "primary", large, className = "" }: BtnProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-[4px] border font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f53900] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffafa] ${large ? "text-lg px-8 py-4" : "text-base px-6 py-3"} ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
