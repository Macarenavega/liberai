export default function MockupInforme() {
  const pisos = [
    { piso: "1º A", firma: true },
    { piso: "1º B", firma: true },
    { piso: "2º A", firma: false },
    { piso: "2º B", firma: true },
    { piso: "3º A", firma: false },
    { piso: "3º B", firma: false },
  ];

  return (
    <div className="rounded-lg overflow-hidden border border-black/10 text-xs" style={{ background: "#fff", fontFamily: "inherit", letterSpacing: "normal" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4" style={{ background: "#0b252a" }}>
        <div>
          <div className="w-16 h-3.5 rounded-sm mb-1" style={{ background: "#406e7a" }} />
          <div style={{ color: "#9AA0AB", fontSize: "9px" }}>Informe de Conformidad</div>
        </div>
        <div className="text-right">
          <div className="font-bold" style={{ color: "#fff", fontFamily: "var(--font-serif), serif", fontSize: "14px", letterSpacing: "0.05em" }}>HOJA DE FIRMAS</div>
          <div style={{ color: "#9AA0AB", fontSize: "9px" }}>Escalera B · 15/01/2025</div>
        </div>
      </div>

      {/* Work description */}
      <div className="px-5 py-3" style={{ background: "#f6f5f5", borderBottom: "1px solid #eee" }}>
        <div style={{ color: "#9AA0AB", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "3px" }}>Trabajo realizado</div>
        <div style={{ color: "#0b252a", fontWeight: 600 }}>Mantenimiento instalación PCI + recarga extintores</div>
      </div>

      {/* Signature grid */}
      <div className="grid grid-cols-2 gap-px p-1" style={{ background: "#eee" }}>
        {pisos.map(({ piso, firma }) => (
          <div key={piso} className="p-3" style={{ background: "#fff" }}>
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold" style={{ color: "#0b252a" }}>{piso}</span>
              {firma ? (
                <span style={{ color: "#406e7a", fontSize: "9px", fontWeight: 600 }}>✓ Firmado</span>
              ) : (
                <span style={{ color: "#9AA0AB", fontSize: "9px" }}>Pendiente</span>
              )}
            </div>
            <div
              className="h-6 rounded-sm flex items-center justify-center"
              style={{ background: firma ? "#d4e6eb" : "#f9f9f9", border: `1px dashed ${firma ? "#406e7a" : "#ddd"}` }}
            >
              {firma ? (
                <svg width="60" height="16" viewBox="0 0 60 16">
                  <path d="M4 10 C10 4, 14 13, 20 8 C26 3, 30 12, 38 7 C44 3, 50 11, 56 8" stroke="#0b252a" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                </svg>
              ) : (
                <span style={{ color: "#d7cecc", fontSize: "9px" }}>Sin firma</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 flex items-center justify-between" style={{ borderTop: "1px solid #eee" }}>
        <div style={{ color: "#9AA0AB", fontSize: "9px" }}>4 de 6 firmados</div>
        <div
          className="px-3 py-1 rounded-sm text-white font-semibold"
          style={{ background: "#406e7a", fontSize: "9px" }}
        >
          Descargar PDF
        </div>
      </div>
    </div>
  );
}
