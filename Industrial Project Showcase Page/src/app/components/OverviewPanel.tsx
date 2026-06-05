export function OverviewPanel() {
  type TableSection = {
    title: string;
    content?: string;
    list?: { title: string; desc: string }[];
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
        </div>
      ))}
    </div>
  );
}
