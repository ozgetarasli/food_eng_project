import { useState } from "react";
import { Shield, Truck, CreditCard, ChevronRight, Phone, MessageSquare, Star, CheckCircle2 } from "lucide-react";

export function PricingPanel() {
  const [moqSelected, setMoqSelected] = useState<"1-4" | "5+">("1-4");
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  return (
    <div style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
      {/* Project Name */}
      <div style={{ marginBottom: "16px" }}>
        <div style={{ fontSize: "11px", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginBottom: "4px" }}>
          Automated Industrial Plant
        </div>
        <h2 style={{ fontSize: "15px", fontWeight: 700, color: "#1a1a2e", lineHeight: 1.35, margin: 0 }}>
          Automatic Ethanol Distillation Column Tower Plant
        </h2>
        <div style={{ display: "flex", gap: "4px", marginTop: "8px", alignItems: "center" }}>
          {[1,2,3,4,5].map((s) => (
            <Star key={s} size={12} style={{ color: "#FF6B00", fill: "#FF6B00" }} />
          ))}
          <span style={{ fontSize: "11px", color: "#6b7280", marginLeft: "4px" }}>4.9 (38 reviews)</span>
        </div>
      </div>

      {/* Pricing Block */}
      <div style={{
        background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "8px",
        padding: "16px", marginBottom: "12px",
      }}>
        <div style={{ fontSize: "11px", color: "#6b7280", marginBottom: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
          Project Cost Estimate
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "14px" }}>
          {[
            { range: "1–4 Sets", price: "$1,250,000", sub: "per set", badge: "Standard" },
            { range: "≥ 5 Sets", price: "$1,050,000", sub: "per set", badge: "Volume" },
          ].map((tier, i) => (
            <button
              key={tier.range}
              onClick={() => setMoqSelected(i === 0 ? "1-4" : "5+")}
              style={{
                padding: "12px",
                border: `2px solid ${(i === 0 ? moqSelected === "1-4" : moqSelected === "5+") ? "#0F62FE" : "#f0f2f5"}`,
                borderRadius: "6px",
                background: (i === 0 ? moqSelected === "1-4" : moqSelected === "5+") ? "#f0f4ff" : "#fff",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.15s",
              }}
            >
              <div style={{ fontSize: "10px", color: (i === 0 ? moqSelected === "1-4" : moqSelected === "5+") ? "#0F62FE" : "#9ca3af", fontWeight: 600, marginBottom: "3px" }}>
                {tier.range}
              </div>
              <div style={{ fontSize: "17px", fontWeight: 700, color: "#1a1a2e", fontFamily: "'IBM Plex Mono', monospace", lineHeight: 1.2 }}>
                {tier.price}
              </div>
              <div style={{ fontSize: "10px", color: "#9ca3af" }}>{tier.sub}</div>
            </button>
          ))}
        </div>

        <div style={{ background: "#f0f4ff", borderRadius: "5px", padding: "10px 12px", marginBottom: "12px" }}>
          <div style={{ fontSize: "11px", color: "#0F62FE", fontWeight: 600, marginBottom: "2px" }}>Estimated Cost Range</div>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "22px", fontWeight: 700, color: "#0043CE" }}>
            $1,050,000 – $1,250,000
          </div>
          <div style={{ fontSize: "10px", color: "#6b7280", marginTop: "2px" }}>
            Final price subject to site survey and custom requirements · EXW Munich
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", fontSize: "12px", color: "#4b5563" }}>
          {[
            { label: "Min. Order", value: "1 Set" },
            { label: "Lead Time", value: "24–32 weeks" },
            { label: "Incoterms", value: "EXW / FOB / CIF" },
            { label: "Payment", value: "30/70 T/T" },
          ].map((d) => (
            <div key={d.label} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "10px", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em" }}>{d.label}</span>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a2e", fontFamily: "'IBM Plex Mono', monospace" }}>{d.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <button
        onClick={() => setShowQuoteForm(!showQuoteForm)}
        style={{
          width: "100%", padding: "13px 16px", borderRadius: "6px",
          background: "#FF6B00", border: "none", color: "#fff",
          fontSize: "14px", fontWeight: 700, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
          marginBottom: "8px", transition: "background 0.15s",
          fontFamily: "'IBM Plex Sans', sans-serif",
        }}
      >
        <MessageSquare size={16} />
        Request Quote
      </button>

      <button
        style={{
          width: "100%", padding: "12px 16px", borderRadius: "6px",
          background: "#fff", border: "2px solid #0F62FE", color: "#0F62FE",
          fontSize: "13px", fontWeight: 600, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
          marginBottom: "12px", transition: "all 0.15s",
          fontFamily: "'IBM Plex Sans', sans-serif",
        }}
      >
        <Phone size={15} />
        Contact Supplier
      </button>

      {/* Quote Form */}
      {showQuoteForm && (
        <div style={{
          background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "8px",
          padding: "16px", marginBottom: "12px",
        }}>
          <div style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a2e", marginBottom: "12px" }}>Request a Quote</div>
          {[
            { label: "Your Name", placeholder: "Full Name" },
            { label: "Company", placeholder: "Company / Organization" },
            { label: "Email", placeholder: "your@email.com" },
            { label: "Phone", placeholder: "+1 (555) 000-0000" },
          ].map((f) => (
            <div key={f.label} style={{ marginBottom: "10px" }}>
              <label style={{ fontSize: "11px", color: "#6b7280", fontWeight: 600, display: "block", marginBottom: "3px" }}>{f.label}</label>
              <input
                type="text"
                placeholder={f.placeholder}
                style={{
                  width: "100%", padding: "8px 10px", borderRadius: "4px",
                  border: "1px solid #e5e7eb", fontSize: "12px", color: "#1a1a2e",
                  fontFamily: "'IBM Plex Sans', sans-serif", boxSizing: "border-box",
                  outline: "none",
                }}
              />
            </div>
          ))}
          <div style={{ marginBottom: "10px" }}>
            <label style={{ fontSize: "11px", color: "#6b7280", fontWeight: 600, display: "block", marginBottom: "3px" }}>Requirements</label>
            <textarea
              placeholder="Describe your project requirements, capacity needs, site conditions..."
              rows={3}
              style={{
                width: "100%", padding: "8px 10px", borderRadius: "4px",
                border: "1px solid #e5e7eb", fontSize: "12px", color: "#1a1a2e",
                fontFamily: "'IBM Plex Sans', sans-serif", resize: "vertical", boxSizing: "border-box",
                outline: "none",
              }}
            />
          </div>
          <button style={{
            width: "100%", padding: "10px", background: "#FF6B00", border: "none",
            borderRadius: "5px", color: "#fff", fontSize: "13px", fontWeight: 700,
            cursor: "pointer", fontFamily: "'IBM Plex Sans', sans-serif",
          }}>
            Send Inquiry
          </button>
        </div>
      )}

      {/* Shipping Card */}
      <div style={{
        background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "8px",
        padding: "14px", marginBottom: "10px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
          <Truck size={16} style={{ color: "#0F62FE" }} />
          <span style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a2e" }}>Shipping Information</span>
        </div>
        {[
          { label: "Method", value: "Breakbulk / OOG Heavy Cargo" },
          { label: "Port of Loading", value: "Hamburg, Germany" },
          { label: "Est. Ocean Transit", value: "18–28 days (to major ports)" },
          { label: "Packaging", value: "Crated sections, weather-sealed" },
          { label: "Gross Weight", value: "≈ 185 tonnes (complete plant)" },
        ].map((item, i, arr) => (
          <div key={item.label} style={{
            display: "flex", justifyContent: "space-between", alignItems: "flex-start",
            paddingBottom: i < arr.length - 1 ? "8px" : "0",
            marginBottom: i < arr.length - 1 ? "8px" : "0",
            borderBottom: i < arr.length - 1 ? "1px solid #f0f2f5" : "none",
          }}>
            <span style={{ fontSize: "11px", color: "#9ca3af" }}>{item.label}</span>
            <span style={{ fontSize: "12px", color: "#1a1a2e", fontWeight: 500, textAlign: "right", maxWidth: "55%" }}>{item.value}</span>
          </div>
        ))}
      </div>

      {/* Payment Card */}
      <div style={{
        background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "8px",
        padding: "14px", marginBottom: "10px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
          <CreditCard size={16} style={{ color: "#0F62FE" }} />
          <span style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a2e" }}>Payment Information</span>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <div style={{ fontSize: "11px", color: "#9ca3af", marginBottom: "6px" }}>Accepted Methods</div>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {["T/T Wire Transfer", "LC at Sight", "SWIFT", "Escrow"].map((m) => (
              <span key={m} style={{
                fontSize: "10px", color: "#4b5563", background: "#f0f2f5",
                padding: "3px 8px", borderRadius: "3px", fontWeight: 500,
              }}>{m}</span>
            ))}
          </div>
        </div>
        <div style={{ fontSize: "11px", color: "#9ca3af", marginBottom: "4px" }}>Standard Terms</div>
        <div style={{ fontSize: "12px", color: "#1a1a2e", fontWeight: 500, marginBottom: "10px" }}>
          30% advance upon order · 70% before shipment
        </div>
        <div style={{
          background: "#f0f4ff", border: "1px solid #dbeafe", borderRadius: "5px",
          padding: "10px 12px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
            <Shield size={13} style={{ color: "#0F62FE" }} />
            <span style={{ fontSize: "12px", fontWeight: 600, color: "#0F62FE" }}>Order Protection</span>
          </div>
          {["Secure milestone payments", "Performance bond available", "Money-back guarantee on FAT failure", "FIDIC contract templates supported"].map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "5px", marginBottom: "4px" }}>
              <CheckCircle2 size={11} style={{ color: "#0F62FE", marginTop: "2px", flexShrink: 0 }} />
              <span style={{ fontSize: "11px", color: "#4b5563" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Trade Assurance */}
      <div style={{
        background: "#fff5eb", border: "1px solid #fde8cc", borderRadius: "8px",
        padding: "12px 14px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div>
          <div style={{ fontSize: "12px", fontWeight: 700, color: "#FF6B00", marginBottom: "2px" }}>
            Trade Assurance Eligible
          </div>
          <div style={{ fontSize: "11px", color: "#9ca3af" }}>
            Full buyer protection on qualified orders
          </div>
        </div>
        <ChevronRight size={16} style={{ color: "#FF6B00" }} />
      </div>
    </div>
  );
}
