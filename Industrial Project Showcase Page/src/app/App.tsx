import { useState } from "react";
import { StickyGallery } from "./components/StickyGallery";
import { SpecificationsPanel } from "./components/SpecificationsPanel";
import { OverviewPanel } from "./components/OverviewPanel";
import { MethodsPanel } from "./components/MethodsPanel";
import { GraphPanel } from "./components/GraphPanel";
import { PricingPanel } from "./components/PricingPanel";
import { ChevronRight, Settings, BarChart3, Globe2, Award, BookOpen, FlaskConical, TrendingUp, Table2 } from "lucide-react";

type Tab = "intro" | "methods" | "graph" | "results";

export default function App() {
  {/* MARKER-MAKE-KIT-INVOKED */}
  const [activeTab, setActiveTab] = useState<Tab>("intro");

  return (
    <div style={{ minHeight: "100vh", background: "#f4f6f8", fontFamily: "'IBM Plex Sans', sans-serif" }}>

      {/* Top Navigation Bar */}
      <nav style={{
        background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.08)",
        position: "sticky", top: 0, zIndex: 50,
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
      }}>
        <div style={{ maxWidth: "1920px", margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", height: "52px", gap: "32px" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
            <div style={{ width: "28px", height: "28px", background: "#0F62FE", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontSize: "11px", fontWeight: 800, fontFamily: "'IBM Plex Mono', monospace" }}>IE</span>
            </div>
            <span style={{ fontSize: "16px", fontWeight: 700, color: "#1a1a2e", letterSpacing: "-0.02em" }}>IndustrialExchange</span>
          </div>

          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "#9ca3af" }}>
            {["Industrial Machinery", "Chemical Processing", "Distillation Systems", "Ethanol Plants"].map((crumb, i, arr) => (
              <span key={crumb} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <span style={{ color: i === arr.length - 1 ? "#1a1a2e" : "#6b7280", fontWeight: i === arr.length - 1 ? 500 : 400, cursor: i < arr.length - 1 ? "pointer" : "default" }}>
                  {crumb}
                </span>
                {i < arr.length - 1 && <ChevronRight size={12} style={{ color: "#d1d5db" }} />}
              </span>
            ))}
          </div>

          {/* Right Nav */}
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "16px" }}>
            {[
              { icon: Globe2, label: "EN" },
              { icon: Award, label: "Verified Supplier" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "5px", cursor: "pointer" }}>
                <Icon size={14} style={{ color: "#6b7280" }} />
                <span style={{ fontSize: "12px", color: "#6b7280" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Layout */}
      <div style={{ maxWidth: "1920px", margin: "0 auto", padding: "24px 40px", display: "grid", gridTemplateColumns: "33% 1fr 24%", gap: "24px", alignItems: "start" }}>

        {/* LEFT — Sticky Image Gallery */}
        <div style={{ position: "sticky", top: "76px", maxHeight: "calc(100vh - 96px)", overflowY: "auto", scrollbarWidth: "none" }}>
          <StickyGallery />
        </div>

        {/* CENTER — Scrollable Project Info */}
        <div>
          {/* Title Block */}
          <div style={{
            background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "8px",
            padding: "24px 28px", marginBottom: "16px",
          }}>
            {/* Category Tags */}
            <div style={{ display: "flex", gap: "6px", marginBottom: "12px", flexWrap: "wrap" }}>
              {["Bioethanol Production", "Corn Dry-Milling", "Continuous Distillation", "McCabe-Thiele Design", "Sieve Tray Column"].map((tag) => (
                <span key={tag} style={{
                  fontSize: "10px", color: "#0F62FE", background: "#f0f4ff",
                  padding: "2px 8px", borderRadius: "3px", border: "1px solid #dbeafe",
                  fontWeight: 500, letterSpacing: "0.01em",
                }}>{tag}</span>
              ))}
            </div>

            <h1 style={{ fontSize: "22px", fontWeight: 700, color: "#1a1a2e", lineHeight: 1.35, margin: "0 0 10px 0" }}>
              Industrial Bioethanol Production Plant — 100,000 L/day via Corn Dry-Milling
            </h1>

            <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: 1.7, margin: "0 0 16px 0" }}>
              Industrial-scale bioethanol production facility based on corn dry-milling, encompassing four integrated unit operations: hammer milling, enzymatic hydrolysis (liquefaction &amp; saccharification), anaerobic fermentation with Saccharomyces cerevisiae, and continuous sieve-tray distillation. Column designed via McCabe-Thiele graphical method achieving 95.6 wt% ethanol distillate purity from 8.06 wt% fermentation broth. Annual capacity 33,000,000 L/year over 330 operating days.
            </p>

            {/* Quick Stat Row */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px",
              borderTop: "1px solid #f0f2f5", paddingTop: "16px",
            }}>
              {[
                { icon: BarChart3, label: "Capacity", value: "100,000 L/day" },
                { icon: Settings, label: "Design Method", value: "McCabe-Thiele" },
                { icon: Award, label: "Purity", value: "95.6 wt%" },
                { icon: Globe2, label: "Feedstock", value: "Corn (Dry-Mill)" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <div style={{
                    width: "32px", height: "32px", borderRadius: "6px", background: "#f0f4ff",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <Icon size={15} style={{ color: "#0F62FE" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "10px", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a2e", fontFamily: "'IBM Plex Mono', monospace" }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tab Navigation */}
          <div style={{
            background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "8px",
            marginBottom: "16px", overflow: "hidden",
          }}>
            <div style={{ display: "flex", borderBottom: "1px solid #f0f2f5" }}>
              {[
                { id: "intro" as Tab, label: "Introduction", icon: BookOpen },
                { id: "methods" as Tab, label: "Methods & Formulas", icon: FlaskConical },
                { id: "graph" as Tab, label: "McCabe-Thiele Graph", icon: TrendingUp },
                { id: "results" as Tab, label: "Design Results", icon: Table2 },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  style={{
                    flex: 1, padding: "14px 12px", border: "none", cursor: "pointer",
                    background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                    borderBottom: activeTab === id ? "2px solid #0F62FE" : "2px solid transparent",
                    marginBottom: "-1px",
                    transition: "all 0.15s",
                    fontFamily: "'IBM Plex Sans', sans-serif",
                  }}
                >
                  <Icon size={15} style={{ color: activeTab === id ? "#0F62FE" : "#9ca3af", flexShrink: 0 }} />
                  <span style={{
                    fontSize: "13px", fontWeight: 600,
                    color: activeTab === id ? "#0F62FE" : "#6b7280",
                    whiteSpace: "nowrap",
                  }}>
                    {label}
                  </span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div style={{ padding: "28px" }}>
              {activeTab === "intro" && <OverviewPanel />}
              {activeTab === "methods" && <MethodsPanel />}
              {activeTab === "graph" && <GraphPanel />}
              {activeTab === "results" && <SpecificationsPanel />}
            </div>
          </div>
        </div>

        {/* RIGHT — Sticky Pricing Panel */}
        <div style={{ position: "sticky", top: "76px", maxHeight: "calc(100vh - 96px)", overflowY: "auto", scrollbarWidth: "none" }}>
          <PricingPanel />
        </div>
      </div>

      {/* Footer */}
      <div style={{
        background: "#1a1a2e", marginTop: "48px", padding: "24px 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "24px", height: "24px", background: "#0F62FE", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontSize: "9px", fontWeight: 800, fontFamily: "'IBM Plex Mono', monospace" }}>IE</span>
          </div>
          <span style={{ fontSize: "13px", color: "#9ca3af", fontFamily: "'IBM Plex Sans', sans-serif" }}>
            IndustrialExchange Platform · Engineering Systems Marketplace
          </span>
        </div>
        <div style={{ display: "flex", gap: "24px" }}>
          {["Privacy Policy", "Terms of Service", "Contact Us"].map((link) => (
            <span key={link} style={{ fontSize: "12px", color: "#6b7280", cursor: "pointer", fontFamily: "'IBM Plex Sans', sans-serif" }}>
              {link}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
