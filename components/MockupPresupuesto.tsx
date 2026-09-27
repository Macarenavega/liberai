export default function MockupPresupuesto() {
  return (
    <div className="rounded-lg overflow-hidden border border-black/10 text-xs" style={{ background: "#fff", fontFamily: "inherit", letterSpacing: "normal" }}>
      {/* Header stripe */}
      <div className="h-1.5" style={{ background: "#406e7a" }} />
      <div className="flex items-start justify-between p-5" style={{ background: "#f6f5f5" }}>
        <div>
          <div className="w-20 h-4 rounded-sm mb-1.5" style={{ background: "#d7cecc" }} />
          <div style={{ color: "#9AA0AB", fontSize: "10px" }}>Instalaciones Técnicas SL</div>
        </div>
        <div className="text-right">
          <div className="font-bold" style={{ color: "#0b252a", fontFamily: "var(--font-serif), serif", fontSize: "18px", letterSpacing: "0.05em" }}>PRESUPUESTO</div>
          <div style={{ color: "#9AA0AB", fontSize: "10px" }}>Ref: PRE-2025-018 · Válido 30 días</div>
        </div>
      </div>

      {/* Summary box */}
      <div className="mx-5 my-3 p-3 rounded-sm" style={{ background: "#f6f5f5", border: "1px solid #406e7a33" }}>
        <div style={{ color: "#9AA0AB", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>Trabajo</div>
        <div className="font-semibold" style={{ color: "#0b252a" }}>Instalación sistema detección incendios — Nave industrial</div>
        <div style={{ color: "#9AA0AB", marginTop: "2px" }}>Pol. Industrial Can Salvatella, Barcelona</div>
      </div>

      {/* Lines */}
      <table className="w-full" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {["Partida", "Uds.", "P. unit.", "Importe"].map(h => (
              <th key={h} className="px-5 py-1.5 text-left" style={{ color: "#9AA0AB", fontWeight: 600, fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.07em", borderBottom: "1px solid #eee" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            ["Central detección analógica", "1", "1.240,00 €", "1.240,00 €"],
            ["Detector óptico humo (suministro + mont.)", "18", "38,50 €", "693,00 €"],
            ["Pulsador alarma + sirena", "4", "55,00 €", "220,00 €"],
            ["Cableado y canalizaciones", "1", "480,00 €", "480,00 €"],
            ["Mano de obra instalación (jornadas)", "3", "320,00 €", "960,00 €"],
          ].map(([d, u, p, t], i) => (
            <tr key={i} style={{ borderBottom: "1px solid #f5f5f5" }}>
              <td className="px-5 py-1.5" style={{ color: "#0b252a" }}>{d}</td>
              <td className="px-5 py-1.5" style={{ color: "#4A4F5A" }}>{u}</td>
              <td className="px-5 py-1.5" style={{ color: "#4A4F5A", fontVariantNumeric: "tabular-nums" }}>{p}</td>
              <td className="px-5 py-1.5 font-semibold" style={{ color: "#0b252a", fontVariantNumeric: "tabular-nums" }}>{t}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total */}
      <div className="px-5 py-4 flex justify-end">
        <div className="w-48">
          {[["Subtotal", "3.593,00 €"], ["IVA 21%", "754,53 €"]].map(([k, v]) => (
            <div key={k} className="flex justify-between py-0.5" style={{ color: "#9AA0AB" }}>
              <span>{k}</span><span style={{ fontVariantNumeric: "tabular-nums" }}>{v}</span>
            </div>
          ))}
          <div className="flex justify-between pt-2 mt-2 font-bold" style={{ borderTop: "2px solid #406e7a", color: "#0b252a", fontSize: "13px" }}>
            <span>TOTAL</span><span style={{ fontVariantNumeric: "tabular-nums" }}>4.347,53 €</span>
          </div>
        </div>
      </div>
    </div>
  );
}
