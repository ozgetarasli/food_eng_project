import grafikImg from "../../imports/grafik.jpeg";

export function MethodsPanel() {
  type FormulaEntry = { label: string; expr: string; note?: string };

  const sectionHead = (title: string) => (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
      <div style={{ width: "3px", height: "18px", background: "#0F62FE", borderRadius: "2px" }} />
      <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#1a1a2e", margin: 0 }}>{title}</h3>
    </div>
  );

  const FormulaBlock = ({ formulas }: { formulas: FormulaEntry[] }) => (
    <div style={{ display: "grid", gap: "8px", marginBottom: "28px" }}>
      {formulas.map((f) => (
        <div key={f.label} style={{
          display: "grid", gridTemplateColumns: "220px 1fr",
          background: "#f8f9ff", border: "1px solid #dbeafe",
          borderRadius: "6px", overflow: "hidden",
        }}>
          <div style={{
            padding: "10px 14px", background: "#f0f4ff", borderRight: "1px solid #dbeafe",
            fontSize: "12px", color: "#4b5563", fontWeight: 500, display: "flex", alignItems: "center",
          }}>
            {f.label}
          </div>
          <div style={{ padding: "10px 16px" }}>
            <div style={{
              fontFamily: "'IBM Plex Mono', monospace", fontSize: "13px",
              color: "#0043CE", fontWeight: 600, marginBottom: f.note ? "4px" : 0,
            }}>
              {f.expr}
            </div>
            {f.note && (
              <div style={{ fontSize: "11px", color: "#6b7280" }}>{f.note}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>

      {/* 1 — McCabe-Thiele Method */}
      <div style={{ marginBottom: "28px" }}>
        {sectionHead("McCabe-Thiele Method")}
        <p style={{ fontSize: "13px", color: "#4b5563", lineHeight: 1.75, margin: "0 0 20px 0" }}>
          The McCabe-Thiele method is a graphical stage-counting technique for designing continuous distillation
          columns. The vapor-liquid equilibrium (VLE) curve for the ethanol-water system at 1 atm is plotted
          together with the rectifying and stripping section operating lines and the feed (q) line.
          Theoretical stages are counted by stepping off between the 45° diagonal and the VLE curve.
          An overall Murphree tray efficiency of 70% is then applied to obtain the number of actual physical trays.
        </p>

        {/* McCabe-Thiele diagram */}
        <div style={{
          background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "8px",
          padding: "20px", marginBottom: "8px",
        }}>
          <img
            src={grafikImg}
            alt="McCabe-Thiele diagram for ethanol-water distillation column design"
            style={{ width: "100%", maxHeight: "500px", objectFit: "contain", borderRadius: "4px", display: "block" }}
          />
        </div>
        <div style={{
          padding: "8px 12px", background: "#f0f4ff", borderRadius: "5px",
          display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px",
        }}>
          <div style={{ width: "2px", height: "14px", background: "#0F62FE", borderRadius: "1px", flexShrink: 0 }} />
          <span style={{ fontSize: "11px", color: "#6b7280", fontFamily: "'IBM Plex Mono', monospace" }}>
            FIG. 1 — McCabe-Thiele Diagram · Ethanol-Water VLE @ 1 atm · 15 Theoretical Stages · R = 4.42
          </span>
        </div>
      </div>

      {/* 2 — Overall Material Balance */}
      <div style={{ marginBottom: "36px" }}>
        {sectionHead("Overall Material Balance")}
        <FormulaBlock formulas={[
          {
            label: "Total balance",
            expr: "F = D + B",
            note: "F: feed, D: distillate, B: bottoms molar flow rate [kmol/h]",
          },
          {
            label: "Component balance",
            expr: "F · xF = D · xD + B · xB",
            note: "x: mole fraction of ethanol",
          },
          {
            label: "Distillate flow rate",
            expr: "D = F · (xF − xB) / (xD − xB)",
            note: "D = 2,123 · (0.0332 − 0.000391) / (0.8948 − 0.000391) = 77.9 kmol/h",
          },
          {
            label: "Bottoms flow rate",
            expr: "B = F − D",
            note: "B = 2,123 − 77.9 = 2,045 kmol/h",
          },
        ]} />
      </div>

      {/* 3 — Reflux Ratio */}
      <div style={{ marginBottom: "36px" }}>
        {sectionHead("Reflux Ratio")}
        <FormulaBlock formulas={[
          {
            label: "Reflux ratio",
            expr: "R = L / D",
            note: "L: liquid return flow rate [kmol/h]",
          },
          {
            label: "Minimum reflux (Underwood)",
            expr: "Rmin = 3.40",
            note: "Determined from the pinch point on the VLE curve",
          },
          {
            label: "Design reflux ratio",
            expr: "R = 1.3 × Rmin = 1.3 × 3.40 = 4.42",
            note: "Factor of 1.3 chosen to balance separation efficiency and energy consumption",
          },
        ]} />
      </div>

      {/* 4 — Operating Lines */}
      <div style={{ marginBottom: "36px" }}>
        {sectionHead("Operating Lines")}
        <FormulaBlock formulas={[
          {
            label: "Rectifying section",
            expr: "y = (R / (R+1)) · x + xD / (R+1)",
            note: "y = 0.8155 · x + 0.1651   [slope = R/(R+1) = 0.8155]",
          },
          {
            label: "Stripping section",
            expr: "y = (L' / V') · x − (B / V') · xB",
            note: "L' and V': stripping section liquid and vapor molar flow rates",
          },
          {
            label: "Intersection",
            expr: "Operating lines intersect at the q-line and rectifying line crossing",
            note: "This intersection point determines the optimal feed tray location",
          },
        ]} />
      </div>

      {/* 5 — Feed Line (q-line) */}
      <div style={{ marginBottom: "36px" }}>
        {sectionHead("Feed Condition — q-Line")}
        <FormulaBlock formulas={[
          {
            label: "q definition",
            expr: "q = (heat required to vaporize 1 mol of feed) / λF",
            note: "Saturated liquid feed → q = 1.0",
          },
          {
            label: "q-line equation",
            expr: "y = (q / (q−1)) · x − xF / (q−1)",
            note: "For q = 1: vertical line at x = xF = 0.0332",
          },
          {
            label: "Feed tray",
            expr: "Optimal feed tray: Stage 7 from the top",
            note: "Determined by McCabe-Thiele stage counting within 15 theoretical stages",
          },
        ]} />
      </div>

      {/* 6 — Murphree Tray Efficiency */}
      <div style={{ marginBottom: "36px" }}>
        {sectionHead("Murphree Tray Efficiency")}
        <FormulaBlock formulas={[
          {
            label: "Murphree efficiency",
            expr: "EO = (yn − yn−1) / (yn* − yn−1)",
            note: "yn*: equilibrium vapor mole fraction at tray n",
          },
          {
            label: "Actual tray count",
            expr: "Nactual = Nth / EO = 14 / 0.70 ≈ 20 trays",
            note: "Theoretical trays: 14 (excluding reboiler); EO = 70% assumed",
          },
        ]} />
      </div>

      {/* 7 — Souders-Brown Flooding Velocity */}
      <div style={{ marginBottom: "36px" }}>
        {sectionHead("Column Sizing — Souders-Brown Correlation")}
        <FormulaBlock formulas={[
          {
            label: "Flooding velocity",
            expr: "umax = CSB · √[(ρL − ρV) / ρV]",
            note: "CSB: design factor [m/s]; ρL: liquid density; ρV: vapor density [kg/m³]",
          },
          {
            label: "Operating velocity (80%)",
            expr: "uop = 0.80 × umax = 0.80 × 2.084 = 1.667 m/s",
            note: "80% safety factor applied to the rectifying section",
          },
          {
            label: "Active tray area",
            expr: "Aactive = V̇vapor / uop",
            note: "V̇vapor: volumetric vapor flow rate [m³/s]",
          },
          {
            label: "Column diameter",
            expr: "D = √(4 · Aactive / π)  → D = 1.80 m",
            note: "Downcomer area Adc = 0.27 m² included",
          },
          {
            label: "Column height",
            expr: "H = (Nactual − 1) × tray spacing + bottom + top clearance",
            note: "H = 19 × 0.5 + 2.0 + 1.5 = 13.0 m",
          },
        ]} />
      </div>

      {/* 8 — Bond's Law */}
      <div style={{ marginBottom: "36px" }}>
        {sectionHead("Hammer Mill Power — Bond's Law")}
        <FormulaBlock formulas={[
          {
            label: "Bond's law",
            expr: "W = Wi · (1/√P80 − 1/√F80)  [kWh/ton]",
            note: "Wi: Bond work index [kWh/ton]; P80, F80: product and feed particle size [µm]",
          },
          {
            label: "Calculation",
            expr: "W = 8.5 · (1/√400 − 1/√5000) = 3.05 kWh/ton",
            note: "Wi = 8.5 kWh/ton (corn); F80 = 5,000 µm → P80 = 400 µm",
          },
          {
            label: "Shaft power",
            expr: "P = W × ṁ = 3.05 kWh/ton × 12.17 ton/h = 37.1 kW",
            note: "Design motor specification: 40.0 kW (including safety margin)",
          },
        ]} />
      </div>

    </div>
  );
}
