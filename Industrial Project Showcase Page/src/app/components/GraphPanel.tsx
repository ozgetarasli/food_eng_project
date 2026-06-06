import image2Img from "../../imports/image2.jpeg";
import grafikImg from "../../imports/grafik.jpeg";

export function GraphPanel() {
  const annotationRows = [
    { symbol: "VLE Curve", desc: "Ethanol-water vapor-liquid equilibrium data at 1 atm (experimental)" },
    { symbol: "45° Diagonal", desc: "y = x reference line (equilibrium line)" },
    { symbol: "Rectifying Line", desc: "y = 0.8155x + 0.1651  (R = 4.42)" },
    { symbol: "Stripping Line", desc: "Line extending from the reboiler to the feed-line intersection" },
    { symbol: "q-Line", desc: "x = 0.0332 (saturated liquid feed, q = 1)" },
    { symbol: "Steps", desc: "15 theoretical stages; optimal feed tray at stage 7 from the top" },
  ];

  return (
    <div style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>

      {/* Section header */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <div style={{ width: "3px", height: "18px", background: "#0F62FE", borderRadius: "2px" }} />
        <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#1a1a2e", margin: 0 }}>
          McCabe-Thiele Diagram — Ethanol-Water Distillation Column
        </h3>
      </div>

      {/* Description */}
      <p style={{ fontSize: "13px", color: "#4b5563", lineHeight: 1.75, margin: "0 0 20px 0" }}>
        The diagram below shows the application of the McCabe-Thiele stage-counting method on the
        ethanol-water vapor-liquid equilibrium (VLE) curve at 1 atm. The rectifying and stripping
        section operating lines, the feed (q) line, and the theoretical stage steps are all shown.
        A total of 15 theoretical stages were determined, with the optimal feed location identified
        at stage 7 from the top.
      </p>

      {/* grafik.jpeg image */}
      <div style={{ marginBottom: "20px" }}>
        <img
          src={grafikImg}
          alt="McCabe-Thiele VLE graph"
          style={{ width: "100%", borderRadius: "6px", display: "block" }}
        />
      </div>

      {/* Graph image */}
      <div style={{
        background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "8px",
        padding: "24px", marginBottom: "20px",
      }}>
        <img
          src={image2Img}
          alt="McCabe-Thiele diagram for ethanol-water distillation column design"
          style={{ width: "100%", maxHeight: "520px", objectFit: "contain", borderRadius: "4px", display: "block" }}
        />
        <div style={{
          marginTop: "12px", padding: "8px 12px", background: "#f0f4ff",
          borderRadius: "5px", display: "flex", alignItems: "center", gap: "8px",
        }}>
          <div style={{ width: "2px", height: "14px", background: "#0F62FE", borderRadius: "1px", flexShrink: 0 }} />
          <span style={{ fontSize: "11px", color: "#6b7280", fontFamily: "'IBM Plex Mono', monospace" }}>
            FIG. 1 — McCabe-Thiele Diagram · Ethanol-Water VLE @ 1 atm · 15 Theoretical Stages · R = 4.42
          </span>
        </div>
      </div>

      {/* Annotation table */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
        <div style={{ width: "3px", height: "18px", background: "#0F62FE", borderRadius: "2px" }} />
        <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#1a1a2e", margin: 0 }}>Diagram Legend</h3>
      </div>

      <div style={{
        background: "#fff", border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: "6px", overflow: "hidden", marginBottom: "28px",
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", background: "#1a1a2e", padding: "8px 16px" }}>
          {["Element", "Description"].map((h) => (
            <div key={h} style={{
              fontSize: "11px", fontWeight: 600, color: "#fff",
              letterSpacing: "0.05em", textTransform: "uppercase",
              fontFamily: "'IBM Plex Mono', monospace",
            }}>{h}</div>
          ))}
        </div>
        {annotationRows.map((row, i) => (
          <div key={row.symbol} style={{
            display: "grid", gridTemplateColumns: "220px 1fr",
            borderBottom: i < annotationRows.length - 1 ? "1px solid #f0f2f5" : "none",
            background: i % 2 === 0 ? "#fff" : "#fafbfc",
          }}>
            <div style={{
              padding: "9px 16px", fontSize: "12px", color: "#1a1a2e",
              fontWeight: 600, fontFamily: "'IBM Plex Mono', monospace",
              borderRight: "1px solid #f0f2f5",
            }}>
              {row.symbol}
            </div>
            <div style={{ padding: "9px 16px", fontSize: "12px", color: "#4b5563" }}>
              {row.desc}
            </div>
          </div>
        ))}
      </div>

      {/* Key design points */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
        <div style={{ width: "3px", height: "18px", background: "#0F62FE", borderRadius: "2px" }} />
        <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#1a1a2e", margin: 0 }}>Key Design Points</h3>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
        {[
          { label: "xF (Feed)", value: "0.0332", sub: "mol fraction ethanol" },
          { label: "xD (Distillate)", value: "0.8948", sub: "mol fraction ethanol" },
          { label: "xB (Bottoms)", value: "0.000391", sub: "mol fraction ethanol" },
          { label: "Rmin", value: "3.40", sub: "minimum reflux ratio" },
          { label: "R (operating)", value: "4.42", sub: "1.3 × Rmin" },
          { label: "Theoretical Stages", value: "15", sub: "including reboiler" },
        ].map((item) => (
          <div key={item.label} style={{
            background: "#f0f4ff", border: "1px solid #dbeafe",
            borderRadius: "6px", padding: "12px 14px",
          }}>
            <div style={{ fontSize: "10px", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
              {item.label}
            </div>
            <div style={{
              fontSize: "20px", fontWeight: 700, color: "#0043CE",
              fontFamily: "'IBM Plex Mono', monospace", lineHeight: 1.2, marginBottom: "3px",
            }}>
              {item.value}
            </div>
            <div style={{ fontSize: "10px", color: "#9ca3af" }}>{item.sub}</div>
          </div>
        ))}
      </div>

    </div>
  );
}
