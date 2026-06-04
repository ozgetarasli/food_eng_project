export function OverviewPanel() {
  type TableSection = {
    title: string;
    content?: string;
    list?: { title: string; desc: string }[];
    table?: {
      headers: string[];
      rows: string[][];
      cols?: string;
    };
  };

  const sections: TableSection[] = [
    {
      title: "System Overview",
      content: `This study presents the process design and engineering analysis of an industrial-scale bioethanol production facility based on dry-milling corn feedstock, with a target output capacity of 100,000 L/day (33,000,000 L/year based on 330 operational days per year).

The overall process encompasses four sequentially integrated unit operations: mechanical size reduction by hammer milling, enzymatic hydrolysis (liquefaction and saccharification), anaerobic fermentation, and continuous fractional distillation. The facility is designed for long-term continuous operation, contributing to the domestic renewable fuel supply chain and offering a competitive production cost structure relative to fossil-based fuel alternatives.`,
    },
    {
      title: "Process Description",
      content: `Raw corn is supplied at a wet mass flow rate of 12,170 kg/h, containing 14% moisture and 71% starch on a dry basis. The hammer mill reduces kernel size from F80 = 5,000 µm to P80 = 400 µm at a calculated net shaft power of 37.1 kW.

The resulting corn flour slurry undergoes two-stage enzymatic hydrolysis in a 276 m³ continuous stirred tank reactor (CSTR) with a 6-hour hydraulic retention time and a 138 kW agitator motor. A starch-to-glucose conversion efficiency of 95% is applied.

Anaerobic fermentation is carried out by Saccharomyces cerevisiae in four parallel bioreactors, each with a geometric volume of 552 m³, based on a 48-hour residence time and a 90% glucose-to-ethanol conversion yield. The total exothermic heat load generated during fermentation is 3,525 kW, which must be continuously removed via external cooling jackets to maintain the optimal yeast operating temperature of 30–32°C.

The dilute fermentation broth (8.06 wt% ethanol, xF = 0.0332) is fed as a saturated liquid (q = 1.0) to a continuous sieve-tray distillation column designed using the McCabe-Thiele graphical method with ethanol-water vapor-liquid equilibrium (VLE) data at 1 atm.`,
    },
    {
      title: "Distillation Column Design",
      content: `Based on the overall material balance, the feed, distillate, and bottoms molar flow rates were calculated as 2,123 kmol/h, 77.9 kmol/h, and 2,045 kmol/h, respectively. The minimum reflux ratio was determined as Rmin = 3.40, and the operating reflux ratio was set at R = 4.42 (1.3 × Rmin).

The McCabe-Thiele step-off procedure yielded 15 theoretical stages (including the reboiler), corresponding to 14 ideal stages within the column shell. Applying an overall Murphree tray efficiency of 70%, the number of actual physical sieve trays was calculated as 20, with the optimal feed tray identified at stage 7 from the top.

Column hydraulic sizing was conducted separately for the rectifying and stripping sections using the Souders-Brown flooding velocity correlation with an 80% safety factor. The top section vapor and liquid mass flow rates were 18,201 kg/h and 14,843 kg/h respectively, yielding a flooding velocity of 2.084 m/s and an operating velocity of 1.667 m/s. The final design column diameter is 1.80 m and total column height is 13.0 m. Distillate purity is 95.6 wt% ethanol (xD = 0.8948) with ethanol loss in the bottoms restricted to 0.1 wt% (xB = 0.000391).`,
    },
    {
      title: "Key Advantages",
      list: [
        { title: "High-Yield Fermentation", desc: "Four parallel bioreactors (552 m³ each) achieve 90% glucose-to-ethanol conversion with Saccharomyces cerevisiae at an optimal 30–32°C operating temperature." },
        { title: "Efficient Size Reduction", desc: "Hammer mill reduces corn kernel size from F80 = 5,000 µm to P80 = 400 µm at only 37.1 kW shaft power, enabling effective enzymatic access to starch." },
        { title: "McCabe-Thiele Design", desc: "Rigorous graphical design with Murphree efficiency correction yields 20 actual sieve trays achieving 95.6 wt% ethanol output from 8.06 wt% fermentation broth." },
        { title: "Enzymatic Hydrolysis", desc: "Continuous CSTR enzymatic hydrolysis (276 m³, 6-hour HRT) achieves 95% starch-to-glucose conversion via integrated liquefaction and saccharification stages." },
        { title: "Optimized Reflux Ratio", desc: "Operating reflux ratio R = 4.42 set at 1.3 × Rmin balances separation efficiency with energy consumption, applied across 20 actual column trays." },
        { title: "Large-Scale Output", desc: "Designed for 100,000 L/day continuous production (33 million L/year over 330 operating days), targeting domestic renewable fuel demand from corn dry-milling feedstock." },
      ],
    },
    {
      title: "Economic Summary",
      table: {
        headers: ["Cost Item", "Description", "Value (TL)"],
        cols: "2fr 3fr 1fr",
        rows: [
          ["Core Equipment Purchase Cost", "Distillation column, hydrolysis tank, 4× fermentation vessels", "4,737,339"],
          ["Material Module Factor (MMF)", "Equipment material correction factor applied: 0.71", "—"],
          ["Labor Module Factor (LMF)", "Installation labor correction factor applied: 0.42", "—"],
          ["Grassroots Capital (Cgr)", "Total factored capital cost estimation (Lang method)", "23,744,741"],
          ["Working Capital Reserve", "15% of Grassroots Capital reserve allocation", "3,561,711"],
          ["Total Capital Cost", "Cgr including 15% working capital reserve", "27,306,452"],
        ],
      },
    },
  ];

  return (
    <div style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
      {sections.map((section) => (
        <div key={section.title} style={{ marginBottom: "36px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
            <div style={{ width: "3px", height: "18px", background: "#0F62FE", borderRadius: "2px" }} />
            <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#1a1a2e", margin: 0 }}>{section.title}</h3>
          </div>

          {section.content && (
            <p style={{ fontSize: "13px", color: "#4b5563", lineHeight: 1.75, margin: 0, whiteSpace: "pre-line" }}>
              {section.content}
            </p>
          )}

          {section.list && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {section.list.map((item) => (
                <div key={item.title} style={{
                  background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "6px",
                  padding: "14px 16px", borderLeft: "3px solid #0F62FE",
                }}>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a2e", marginBottom: "5px" }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: "12px", color: "#6b7280", lineHeight: 1.6 }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          )}

          {section.table && (
            <div style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "6px", overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: section.table.cols || "2fr 3fr 80px 120px", background: "#1a1a2e", padding: "8px 16px" }}>
                {section.table.headers.map((h) => (
                  <div key={h} style={{ fontSize: "11px", fontWeight: 600, color: "#fff", letterSpacing: "0.05em", textTransform: "uppercase", fontFamily: "'IBM Plex Mono', monospace" }}>{h}</div>
                ))}
              </div>
              {section.table.rows.map((row, ri) => (
                <div key={ri} style={{
                  display: "grid", gridTemplateColumns: section.table!.cols || "2fr 3fr 80px 120px",
                  borderBottom: ri < section.table!.rows.length - 1 ? "1px solid #f0f2f5" : "none",
                  background: ri % 2 === 0 ? "#fff" : "#fafbfc",
                }}>
                  {row.map((cell, ci) => (
                    <div key={ci} style={{
                      padding: "9px 16px",
                      fontSize: "12px",
                      color: ci === 0 ? "#1a1a2e" : "#4b5563",
                      fontWeight: ci === 0 ? 500 : 400,
                      fontFamily: ci >= 2 ? "'IBM Plex Mono', monospace" : "'IBM Plex Sans', sans-serif",
                    }}>{cell}</div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* McCabe-Thiele Diagram */}
      <div style={{ marginBottom: "36px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
          <div style={{ width: "3px", height: "18px", background: "#0F62FE", borderRadius: "2px" }} />
          <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#1a1a2e", margin: 0 }}>McCabe-Thiele Diagram</h3>
        </div>
        <div style={{
          background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "6px",
          padding: "32px", display: "flex", alignItems: "center", justifyContent: "center",
          minHeight: "200px", position: "relative", overflow: "hidden",
        }}>
          <img
            src={`${import.meta.env.BASE_URL}images/image2.jpeg`}
            alt="McCabe-Thiele diagram for distillation column design"
            style={{ width: "100%", height: "220px", objectFit: "contain", borderRadius: "4px", opacity: 0.85, background: "#ffffff" }}
          />
          <div style={{
            position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(15,98,254,0.08) 0%, transparent 60%)",
            display: "flex", alignItems: "flex-end", padding: "16px",
          }}>
            <span style={{ fontSize: "11px", color: "#6b7280", fontFamily: "'IBM Plex Mono', monospace" }}>
              FIG. 1 — McCabe-Thiele Diagram for Distillation Column Design · Ethanol-Water VLE at 1 atm
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
