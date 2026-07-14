export default function MockupFactura() {
  return (
    <div className="rounded-sm overflow-hidden shadow-2xl text-xs" style={{ background: "#fff", fontFamily: "var(--font-dm-sans), sans-serif" }}>
      {/* Header */}
      <div className="flex items-start justify-between p-5" style={{ background: "#1C1F26" }}>
        <div>
          <div className="w-24 h-5 rounded-sm mb-1" style={{ background: "#F4700F" }} />
          <div className="text-[10px]" style={{ color: "#9AA0AB" }}>Empresa de Obras S.L.</div>
          <div className="text-[10px]" style={{ color: "#9AA0AB" }}>NIF: B-00000000</div>
        </div>
        <div className="text-right">
          <div className="font-bold text-base" style={{ color: "#F4700F", fontFamily: "var(--font-bebas), sans-serif", letterSpacing: "0.05em" }}>FACTURA</div>
          <div style={{ color: "#9AA0AB", fontSize: "10px" }}>Nº 2024-0042</div>
          <div style={{ color: "#9AA0AB", fontSize: "10px" }}>15 / 01 / 2025</div>
        </div>
      </div>

      {/* Client */}
      <div className="px-5 py-3 flex justify-between" style={{ borderBottom: "1px solid #eee" }}>
        <div>
          <div style={{ color: "#9AA0AB", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Facturado a</div>
          <div className="font-semibold mt-0.5" style={{ color: "#1C1F26" }}>Comunidad Escalera A-3</div>
          <div style={{ color: "#9AA0AB" }}>C/ Major 14, Barcelona</div>
        </div>
        <div className="text-right">
          <div style={{ color: "#9AA0AB", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Vencimiento</div>
          <div className="font-semibold mt-0.5" style={{ color: "#1C1F26" }}>15 / 02 / 2025</div>
        </div>
      </div>

      {/* Lines */}
      <table className="w-full px-5" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#F5F3F0" }}>
            {["Descripción", "Ud.", "Precio", "Total"].map(h => (
              <th key={h} className="px-5 py-2 text-left" style={{ color: "#9AA0AB", fontWeight: 600, fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.08em" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            ["Mantenimiento instalación PCI", "1", "480,00 €", "480,00 €"],
            ["Recarga extintor CO₂", "4", "32,00 €", "128,00 €"],
            ["Revisión BIE + señalización", "1", "95,00 €", "95,00 €"],
          ].map(([d, u, p, t], i) => (
            <tr key={i} style={{ borderBottom: "1px solid #f0f0f0" }}>
              <td className="px-5 py-2" style={{ color: "#1C1F26" }}>{d}</td>
              <td className="px-5 py-2" style={{ color: "#4A4F5A" }}>{u}</td>
              <td className="px-5 py-2" style={{ color: "#4A4F5A", fontVariantNumeric: "tabular-nums" }}>{p}</td>
              <td className="px-5 py-2 font-semibold" style={{ color: "#1C1F26", fontVariantNumeric: "tabular-nums" }}>{t}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Totals */}
      <div className="px-5 py-4 flex justify-end">
        <div className="w-44">
          {[["Base imponible", "703,00 €"], ["IVA 21%", "147,63 €"]].map(([k, v]) => (
            <div key={k} className="flex justify-between py-0.5" style={{ color: "#9AA0AB" }}>
              <span>{k}</span><span style={{ fontVariantNumeric: "tabular-nums" }}>{v}</span>
            </div>
          ))}
          <div className="flex justify-between pt-2 mt-2 font-bold" style={{ borderTop: "2px solid #F4700F", color: "#1C1F26", fontSize: "13px" }}>
            <span>TOTAL</span><span style={{ fontVariantNumeric: "tabular-nums" }}>850,63 €</span>
          </div>
        </div>
      </div>
    </div>
  );
}
