export function SpecificationsPanel() {
  const keyAttributes = [
    { label: "System Type", value: "Corn Dry-Milling Bioethanol Plant" },
    { label: "Feedstock", value: "Corn (14% moisture, 71% starch d.b.)" },
    { label: "Production Capacity", value: "100,000 L/day" },
    { label: "Annual Production", value: "3.30 × 10⁷ L/year (330 op. days)" },
    { label: "Distillate Purity", value: "95.6 wt% Ethanol (xD = 0.8948)" },
    { label: "Feed Composition", value: "8.06 wt% Ethanol (xF = 0.0332)" },
    { label: "Distillation Method", value: "McCabe-Thiele · Continuous Sieve Tray" },
    { label: "Number of Actual Trays", value: "20 (Murphree EO = 70%)" },
    { label: "Column Dimensions", value: "Ø 1.80 m × 13.0 m height" },
    { label: "Reflux Ratio (R)", value: "4.42  (1.3 × Rmin = 3.40)" },
    { label: "Fermentation Organism", value: "Saccharomyces cerevisiae" },
    { label: "Optimal Feed Tray", value: "Stage 7 from the top" },
  ];

  const technicalSpecs = [
    {
      category: "Distillation Column",
      rows: [
        { param: "Column Type", value: "Continuous Sieve Tray", unit: "—" },
        { param: "Operating Pressure", value: "1", unit: "atm" },
        { param: "Top Temperature", value: "78", unit: "°C" },
        { param: "Bottom Temperature", value: "100", unit: "°C" },
        { param: "Column Diameter (D)", value: "1.80", unit: "m" },
        { param: "Column Height (H)", value: "13.0", unit: "m" },
        { param: "Bottom Clearance (sump)", value: "2.0", unit: "m" },
        { param: "Top Clearance (disengagement)", value: "1.5", unit: "m" },
        { param: "Number of Theoretical Trays", value: "15", unit: "—" },
        { param: "Tray Efficiency (Murphree, EO)", value: "70", unit: "%" },
        { param: "Number of Actual Trays", value: "20", unit: "—" },
        { param: "Tray Spacing", value: "0.5", unit: "m" },
        { param: "Downcomer Area (Adc)", value: "0.27", unit: "m²" },
        { param: "Maximum Vapor Velocity (umax)", value: "2.084", unit: "m/s" },
        { param: "Operating Vapor Velocity (uop)", value: "1.667", unit: "m/s" },
        { param: "Reflux Ratio (R)", value: "4.42", unit: "—" },
        { param: "Minimum Reflux Ratio (Rmin)", value: "3.40", unit: "—" },
        { param: "Optimal Feed Tray Location", value: "Stage 7 (from top)", unit: "—" },
      ],
    },
    {
      category: "Distillate Stream (Ethanol-Rich Product)",
      rows: [
        { param: "Composition", value: "95.6 wt% EtOH, 4.4 wt% H₂O", unit: "—" },
        { param: "Mol Fraction of Ethanol (xD)", value: "0.8948", unit: "—" },
        { param: "Temperature", value: "78", unit: "°C" },
        { param: "Density (ρD)", value: "806", unit: "kg/m³" },
        { param: "Avg Molecular Weight (MD)", value: "43.12", unit: "g/mol" },
        { param: "Molar Flow Rate (D)", value: "77.9", unit: "kmol/h" },
        { param: "Mass Flow Rate (ṁD)", value: "3,358", unit: "kg/h" },
        { param: "Volumetric Flow Rate", value: "100,000", unit: "L/day" },
        { param: "Annual Production", value: "3.30 × 10⁷", unit: "L/year" },
      ],
    },
    {
      category: "Bottom Stream (Water-Rich Waste)",
      rows: [
        { param: "Composition", value: "0.1 wt% EtOH, 99.9 wt% H₂O", unit: "—" },
        { param: "Mol Fraction of Ethanol (xB)", value: "0.000391", unit: "—" },
        { param: "Temperature", value: "100", unit: "°C" },
        { param: "Density (ρB)", value: "958", unit: "kg/m³" },
        { param: "Avg Molecular Weight (MB)", value: "18.02", unit: "g/mol" },
        { param: "Molar Flow Rate (B)", value: "2,045", unit: "kmol/h" },
        { param: "Mass Flow Rate (ṁB)", value: "36,720", unit: "kg/h" },
      ],
    },
    {
      category: "Feed Stream",
      rows: [
        { param: "Composition", value: "8.06 wt% EtOH, 91.94 wt% H₂O", unit: "—" },
        { param: "Mol Fraction of Ethanol (xF)", value: "0.0332", unit: "—" },
        { param: "Feed Condition", value: "Saturated liquid (q = 1)", unit: "—" },
        { param: "Avg Molecular Weight (MF)", value: "18.94", unit: "g/mol" },
        { param: "Molar Flow Rate (F)", value: "2,123", unit: "kmol/h" },
        { param: "Mass Flow Rate (ṁF)", value: "40,210", unit: "kg/h" },
        { param: "Volumetric Flow Rate (VF)", value: "38.3", unit: "m³/h" },
      ],
    },
    {
      category: "Hammer Mill",
      rows: [
        { param: "Equipment Type", value: "Dry-milling hammer mill", unit: "—" },
        { param: "Raw Material Feed Rate", value: "12,170 (≈ 292 t/day)", unit: "kg/h" },
        { param: "Feed Moisture Content", value: "14", unit: "%" },
        { param: "Bond's Work Index (Wi)", value: "8.5", unit: "kWh/ton" },
        { param: "Feed Particle Size (F80)", value: "5,000", unit: "μm" },
        { param: "Product Particle Size (P80)", value: "400", unit: "μm" },
        { param: "Calculated Shaft Power", value: "37.1", unit: "kW" },
        { param: "Design Motor Specification", value: "40.0", unit: "kW" },
      ],
    },
    {
      category: "Hydrolysis Reactor",
      rows: [
        { param: "Process Operation", value: "Continuous enzymatic hydrolysis", unit: "—" },
        { param: "Brand Name", value: "Cycle Columbus / OEM", unit: "—" },
        { param: "Operating Temperature", value: "70", unit: "°C" },
        { param: "Residence Time", value: "6", unit: "h" },
        { param: "Safety Factor", value: "20% allowance included", unit: "—" },
        { param: "Total Reactor Volume", value: "276", unit: "m³" },
        { param: "Mechanical Agitation Power", value: "138", unit: "kW" },
      ],
    },
    {
      category: "Fermenter System",
      rows: [
        { param: "Process Operation", value: "Continuous anaerobic fermentation", unit: "—" },
        { param: "Brand Name", value: "BLBIO / Bailun Jacket Tank", unit: "—" },
        { param: "Material", value: "316L stainless steel", unit: "—" },
        { param: "Microorganism Culture", value: "Saccharomyces cerevisiae", unit: "—" },
        { param: "Residence Time", value: "48", unit: "h" },
        { param: "Bioreactor Configuration", value: "4 parallel units", unit: "—" },
        { param: "Unit Bioreactor Volume", value: "552", unit: "m³/vessel" },
        { param: "Total Fermenter Volume", value: "2,205", unit: "m³" },
        { param: "Fermentation Efficiency", value: "90", unit: "%" },
        { param: "Starch-to-Glucose Conversion", value: "95", unit: "%" },
        { param: "Exothermic Cooling Load", value: "3,525", unit: "kW" },
      ],
    },
  ];

  return (
    <div style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
      {/* Key Attributes */}
      <div style={{ marginBottom: "32px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <div style={{ width: "3px", height: "18px", background: "#0F62FE", borderRadius: "2px" }} />
          <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#1a1a2e", margin: 0 }}>Key Attributes</h3>
        </div>
        <div style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "6px", overflow: "hidden" }}>
          {keyAttributes.map((attr, i) => (
            <div
              key={attr.label}
              style={{
                display: "grid",
                gridTemplateColumns: "220px 1fr",
                borderBottom: i < keyAttributes.length - 1 ? "1px solid #f0f2f5" : "none",
              }}
            >
              <div style={{
                padding: "10px 16px",
                background: "#fafbfc",
                borderRight: "1px solid #f0f2f5",
                fontSize: "12px",
                color: "#6b7280",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
              }}>
                {attr.label}
              </div>
              <div style={{
                padding: "10px 16px",
                fontSize: "13px",
                color: "#1a1a2e",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
              }}>
                {attr.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Specifications */}
      {technicalSpecs.map((section) => (
        <div key={section.category} style={{ marginBottom: "28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <div style={{ width: "3px", height: "16px", background: "#0F62FE", borderRadius: "2px", opacity: 0.6 }} />
            <h4 style={{ fontSize: "13px", fontWeight: 600, color: "#4b5563", margin: 0, letterSpacing: "0.02em", textTransform: "uppercase" }}>
              {section.category}
            </h4>
          </div>
          <div style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "6px", overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 160px 110px", background: "#0F62FE", padding: "8px 16px" }}>
              {["Parameter", "Value", "Unit"].map((h) => (
                <div key={h} style={{ fontSize: "11px", fontWeight: 600, color: "#fff", letterSpacing: "0.05em", textTransform: "uppercase", fontFamily: "'IBM Plex Mono', monospace" }}>
                  {h}
                </div>
              ))}
            </div>
            {section.rows.map((row, i) => (
              <div
                key={row.param}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 160px 110px",
                  borderBottom: i < section.rows.length - 1 ? "1px solid #f0f2f5" : "none",
                  background: i % 2 === 0 ? "#fff" : "#fafbfc",
                }}
              >
                <div style={{ padding: "9px 16px", fontSize: "12px", color: "#4b5563" }}>{row.param}</div>
                <div style={{ padding: "9px 16px", fontSize: "12px", color: "#1a1a2e", fontWeight: 600, fontFamily: "'IBM Plex Mono', monospace" }}>{row.value}</div>
                <div style={{ padding: "9px 16px", fontSize: "11px", color: "#9ca3af", fontFamily: "'IBM Plex Mono', monospace" }}>{row.unit}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
