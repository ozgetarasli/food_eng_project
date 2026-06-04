import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const GALLERY_IMAGES = [
  {
    id: 1,
    url: `${import.meta.env.BASE_URL}images/image1.jpeg`,
    alt: "Hydrolysis reactor schematic",
  },
  {
    id: 2,
    url: `${import.meta.env.BASE_URL}images/image2.jpeg`,
    alt: "Distillation column schematic",
  },
  {
    id: 3,
    url: `${import.meta.env.BASE_URL}images/image3.jpeg`,
    alt: "Fermenter tank schematic",
  },
];

export function StickyGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const prev = () => setActiveIndex((i) => (i === 0 ? GALLERY_IMAGES.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === GALLERY_IMAGES.length - 1 ? 0 : i + 1));

  useEffect(() => {
    if (!isZoomOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsZoomOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isZoomOpen]);

  return (
    <div className="flex flex-col gap-3">
      {/* Main Gallery Area */}
      <div className="flex gap-2">
        {/* Thumbnails Column */}
        <div className="flex flex-col gap-1.5" style={{ width: "74px" }}>
          {GALLERY_IMAGES.map((img, idx) => (
            <button
              key={img.id}
              onClick={() => setActiveIndex(idx)}
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "4px",
                border: activeIndex === idx ? "2px solid #0F62FE" : "2px solid transparent",
                overflow: "hidden",
                cursor: "pointer",
                padding: 0,
                background: "#ffffff",
                flexShrink: 0,
                transition: "border-color 0.15s",
              }}
            >
              <img
                src={img.url}
                alt={img.alt}
                style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", background: "#ffffff" }}
              />
            </button>
          ))}
        </div>

        {/* Main Image */}
        <div style={{ flex: 1, position: "relative", borderRadius: "6px", overflow: "hidden", background: "#ffffff", minHeight: "480px" }}>
          <img
            src={GALLERY_IMAGES[activeIndex].url}
            alt={GALLERY_IMAGES[activeIndex].alt}
            style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", minHeight: "480px", background: "#ffffff" }}
          />
          {/* Nav Arrows */}
          <button
            onClick={prev}
            style={{
              position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)",
              width: "32px", height: "32px", borderRadius: "50%", background: "rgba(255,255,255,0.9)",
              border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)", transition: "background 0.15s",
            }}
          >
            <ChevronLeft size={16} style={{ color: "#1a1a2e" }} />
          </button>
          <button
            onClick={next}
            style={{
              position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)",
              width: "32px", height: "32px", borderRadius: "50%", background: "rgba(255,255,255,0.9)",
              border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)", transition: "background 0.15s",
            }}
          >
            <ChevronRight size={16} style={{ color: "#1a1a2e" }} />
          </button>
          {/* Zoom Icon */}
          <button
            type="button"
            onClick={() => setIsZoomOpen(true)}
            aria-label="Open zoom view"
            style={{
            position: "absolute", bottom: "8px", right: "8px",
            background: "rgba(255,255,255,0.85)", borderRadius: "4px", padding: "4px",
            cursor: "pointer", display: "flex", alignItems: "center", gap: "4px",
            border: "none",
          }}>
            <ZoomIn size={13} style={{ color: "#4b5563" }} />
            <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", color: "#4b5563" }}>Zoom</span>
          </button>
          {/* Counter */}
          <div style={{
            position: "absolute", bottom: "8px", left: "8px",
            background: "rgba(0,0,0,0.55)", borderRadius: "4px", padding: "2px 8px",
          }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", color: "#fff" }}>
              {activeIndex + 1} / {GALLERY_IMAGES.length}
            </span>
          </div>
        </div>
      </div>

      {isZoomOpen && createPortal(
        <div
          onClick={() => setIsZoomOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "#000",
            zIndex: 2147483647,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
          }}
        >
          <img
            onClick={(e) => e.stopPropagation()}
            src={GALLERY_IMAGES[activeIndex].url}
            alt={GALLERY_IMAGES[activeIndex].alt}
            style={{
              maxWidth: "100vw",
              maxHeight: "100vh",
              width: "auto",
              height: "auto",
              objectFit: "contain",
              background: "#000",
            }}
          />
        </div>,
        document.body,
      )}
    </div>
  );
}
