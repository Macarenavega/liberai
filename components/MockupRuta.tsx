const stops = [
  { x: 80,  y: 60,  label: "Taller",         time: "08:00", done: true },
  { x: 220, y: 130, label: "C/ Aragó 42",     time: "08:40", done: true },
  { x: 160, y: 230, label: "Av. Meridiana 7", time: "09:25", done: false },
  { x: 300, y: 200, label: "C/ Balmes 118",   time: "10:10", done: false },
  { x: 370, y: 100, label: "Pg. Gràcia 55",   time: "11:00", done: false },
];

const path = stops.map((s, i) => `${i === 0 ? "M" : "L"} ${s.x} ${s.y}`).join(" ");

export default function MockupRuta() {
  return (
    <div className="rounded-sm overflow-hidden shadow-2xl" style={{ background: "#1C1F26", fontFamily: "var(--font-dm-sans), sans-serif" }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: "1px solid #2E333D" }}>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-widest mb-0.5" style={{ color: "#F4700F" }}>Ruta del día</div>
          <div className="text-sm font-semibold" style={{ color: "#fff" }}>Lunes 13 Enero — 5 servicios</div>
        </div>
        <div className="text-right">
          <div className="text-[10px]" style={{ color: "#9AA0AB" }}>Distancia total</div>
          <div className="font-semibold text-sm" style={{ color: "#D8D4CC" }}>38,4 km</div>
        </div>
      </div>

      {/* Map area */}
      <div className="relative" style={{ height: "200px", background: "#16181f" }}>
        {/* Fake map grid */}
        <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.15 }}>
          {[40, 80, 120, 160, 200].map(y => (
            <line key={`h${y}`} x1="0" y1={y} x2="460" y2={y} stroke="#9AA0AB" strokeWidth="0.5" />
          ))}
          {[60, 120, 180, 240, 300, 360, 420].map(x => (
            <line key={`v${x}`} x1={x} y1="0" x2={x} y2="200" stroke="#9AA0AB" strokeWidth="0.5" />
          ))}
        </svg>

        {/* Route path */}
        <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }} viewBox="0 0 460 260">
          <path d={path} fill="none" stroke="#F4700F" strokeWidth="2.5" strokeDasharray="6 3" opacity="0.7" />
          {stops.map((s, i) => (
            <g key={i}>
              <circle cx={s.x} cy={s.y} r="10" fill={s.done ? "#F4700F" : "#2E333D"} stroke={s.done ? "#F4700F" : "#9AA0AB"} strokeWidth="1.5" />
              <text x={s.x} y={s.y + 1} textAnchor="middle" dominantBaseline="middle" fontSize="9" fontWeight="bold" fill={s.done ? "#fff" : "#9AA0AB"}>{i + 1}</text>
            </g>
          ))}
        </svg>
      </div>

      {/* Stops list */}
      <div>
        {stops.map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-4 py-2.5"
            style={{
              borderBottom: i < stops.length - 1 ? "1px solid #2E333D" : "none",
              opacity: s.done ? 0.5 : 1,
            }}
          >
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0"
              style={{ background: s.done ? "#F4700F" : "#2E333D", color: s.done ? "#fff" : "#9AA0AB" }}
            >
              {i + 1}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold truncate" style={{ color: s.done ? "#9AA0AB" : "#fff" }}>{s.label}</div>
            </div>
            <div className="text-[10px] shrink-0" style={{ color: s.done ? "#9AA0AB" : "#F4700F", fontVariantNumeric: "tabular-nums" }}>{s.time}</div>
            {s.done && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="#F4700F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
