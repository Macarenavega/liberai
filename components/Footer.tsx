export default function Footer() {
  return (
    <footer
      className="py-8 px-6"
      style={{
        background: "var(--steel)",
        borderTop: "1px solid #2E333D",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <span
          className="font-[family-name:var(--font-bebas)] text-xl tracking-widest text-white"
        >
          Liber<span style={{ color: "var(--safety)" }}>AI</span>
        </span>
        <p className="text-xs" style={{ color: "var(--smoke)" }}>
          © {new Date().getFullYear()} LiberAI · Barcelona ·{" "}
          <a
            href="mailto:hola@liberai.es"
            className="underline underline-offset-2 hover:text-white transition-colors"
            style={{ color: "var(--smoke)" }}
          >
            hola@liberai.es
          </a>
        </p>
      </div>
    </footer>
  );
}
