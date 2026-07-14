export default function MockupTicket() {
  return (
    <div className="rounded-sm overflow-hidden shadow-2xl" style={{ background: "#1C1F26", fontFamily: "var(--font-dm-sans), sans-serif" }}>
      {/* Phone header */}
      <div className="px-4 pt-4 pb-3" style={{ borderBottom: "1px solid #2E333D" }}>
        <div className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: "#F4700F" }}>Captura de gasto</div>
        <div className="text-sm font-semibold" style={{ color: "#fff" }}>Foto del ticket → datos extraídos</div>
      </div>

      <div className="grid grid-cols-2" style={{ minHeight: "220px" }}>
        {/* Left: fake ticket photo */}
        <div className="p-3 flex items-center justify-center" style={{ background: "#16181f", borderRight: "1px solid #2E333D" }}>
          <div className="w-full rounded-sm p-3 text-[9px]" style={{ background: "#fff", color: "#333", lineHeight: "1.6", fontFamily: "monospace" }}>
            <div className="text-center font-bold mb-1" style={{ fontSize: "8px" }}>FERRETERÍA INDUSTRIAL</div>
            <div className="text-center mb-2" style={{ color: "#999", fontSize: "7px" }}>C/ Aragó 302 · Barcelona</div>
            <div style={{ borderTop: "1px dashed #ddd", paddingTop: "6px" }}>
              <div className="flex justify-between"><span>Tornillo M8×40 (50u)</span><span>12,40</span></div>
              <div className="flex justify-between"><span>Silicona neutra 300ml</span><span>8,90</span></div>
              <div className="flex justify-between"><span>Brida nylon 4.8×200</span><span>4,15</span></div>
            </div>
            <div className="flex justify-between font-bold mt-2 pt-1" style={{ borderTop: "1px solid #333", fontSize: "10px" }}>
              <span>TOTAL</span><span>25,45 €</span>
            </div>
            <div className="text-center mt-1" style={{ color: "#999", fontSize: "7px" }}>IVA 21% incl. · 14/01/2025</div>
          </div>
        </div>

        {/* Right: extracted fields */}
        <div className="p-3 flex flex-col gap-2">
          {[
            { label: "Proveedor", value: "Ferretería Industrial" },
            { label: "Fecha", value: "14/01/2025" },
            { label: "Importe", value: "25,45 €" },
            { label: "IVA", value: "21%" },
            { label: "Categoría", value: "Material obra" },
          ].map(({ label, value }) => (
            <div key={label}>
              <div style={{ color: "#9AA0AB", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</div>
              <div className="text-xs font-semibold" style={{ color: "#fff" }}>{value}</div>
            </div>
          ))}

          <div className="mt-auto pt-2 flex items-center gap-1.5" style={{ borderTop: "1px solid #2E333D" }}>
            <div className="w-2 h-2 rounded-full" style={{ background: "#22c55e" }} />
            <span style={{ color: "#22c55e", fontSize: "9px", fontWeight: 600 }}>Datos extraídos con IA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
