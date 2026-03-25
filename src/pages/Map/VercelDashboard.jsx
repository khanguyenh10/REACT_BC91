import React, { useState, useEffect, useRef } from "react";
import createGlobe from "cobe";
import { Map, Globe, MousePointer2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- DỮ LIỆU MẪU ---
const regionsData = [
    { id: "sin1", name: "Singapore", lat: 1.3521, lng: 103.8198, value: 52.3, active: true },
    { id: "sfo1", name: "San Francisco, USA", lat: 37.7749, lng: -122.4194, value: 47.5, active: true },
    { id: "hkg1", name: "Hong Kong", lat: 22.3193, lng: 114.1694, value: 0.2, active: false },
    { id: "par1", name: "Paris, France", lat: 48.8566, lng: 2.3522, value: 0.0, active: false },
];

// --- COMPONENT 3D GLOBE ---
const Globe3D = () => {
    const canvasRef = useRef();
    useEffect(() => {
        let phi = 0;
        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 500 * 2,
            height: 500 * 2,
            phi: 0,
            theta: 0.3,
            dark: 0,
            diffuse: 1.2,
            mapSamples: 12000,
            mapBrightness: 6,
            baseColor: [1, 1, 1],
            markerColor: [0, 0.43, 0.95], // Màu xanh Vercel
            glowColor: [1, 1, 1],
            markers: regionsData
                .filter(r => r.active)
                .map(r => ({ location: [r.lat, r.lng], size: 0.08 })),
            onRender: (state) => {
                state.phi = phi;
                phi += 0.003;
            },
        });
        return () => globe.destroy();
    }, []);

    return <canvas ref={canvasRef} style={{ width: 500, height: 500, maxWidth: "100%", aspectRatio: "1" }} />;
};

// --- COMPONENT 2D MAP (Simplified Dot Matrix) ---
const Map2D = () => (
    <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        style={{ width: "100%", height: "400px", display: "flex", alignItems: "center", justifyContent: "center", background: "radial-gradient(circle, #f0f0f0 1px, transparent 1px)", backgroundSize: "20px 20px" }}
    >
        <div style={{ position: "relative", width: "80%", height: "60%", border: "1px dashed #ccc", borderRadius: "8px" }}>
            {/* Giả lập các điểm Marker trên mặt phẳng */}
            {regionsData.filter(r => r.active).map((r, i) => (
                <div key={i} className="pulse-marker" style={{ position: "absolute", left: `${50 + r.lng / 4}%`, top: `${50 - r.lat / 2}%` }}>
                    <div className="dot" />
                </div>
            ))}
            <p style={{ position: "absolute", bottom: 10, left: 10, fontSize: "12px", color: "#999" }}>Flat Projection View</p>
        </div>
    </motion.div>
);

// --- MAIN DASHBOARD ---
export default function VercelDashboard() {
    const [view, setView] = useState("3d");

    return (
        <div style={{ display: "flex", height: "100vh", backgroundColor: "#fff", color: "#000", fontFamily: "-apple-system, sans-serif" }}>
            {/* SIDEBAR BÊN TRÁI */}
            <div style={{ width: "350px", borderRight: "1px solid #eaeaea", padding: "24px", display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontSize: "14px", fontWeight: 600, marginBottom: "20px" }}>Real-time Traffic</h3>

                <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
                    <button style={{ padding: "6px 12px", borderRadius: "6px", border: "1px solid #eaeaea", fontSize: "13px", cursor: "pointer", background: "#f9f9f9" }}>Regions</button>
                    <button style={{ padding: "6px 12px", borderRadius: "6px", border: "none", fontSize: "13px", cursor: "pointer", background: "none", color: "#666" }}>Usage</button>
                </div>

                <div style={{ flex: 1 }}>
                    {regionsData.map((region) => (
                        <div key={region.id} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid #fafafa", opacity: region.active ? 1 : 0.4 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: region.active ? "#0070f3" : "#ccc" }} />
                                <span style={{ fontSize: "14px" }}>{region.name}</span>
                            </div>
                            <span style={{ fontSize: "14px", fontWeight: 500 }}>{region.value}%</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* KHÔNG GIAN BẢN ĐỒ BÊN PHẢI */}
            <div style={{ flex: 1, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                {/* Toggle Buttons */}
                <div style={{ position: "absolute", top: "20px", right: "20px", display: "flex", border: "1px solid #eaeaea", borderRadius: "8px", overflow: "hidden", zIndex: 10, backgroundColor: "#fff" }}>
                    <button onClick={() => setView("2d")} style={{ padding: "8px", border: "none", background: view === "2d" ? "#f5f5f5" : "#fff", cursor: "pointer" }}>
                        <Map size={18} color={view === "2d" ? "#000" : "#999"} />
                    </button>
                    <button onClick={() => setView("3d")} style={{ padding: "8px", border: "none", background: view === "3d" ? "#f5f5f5" : "#fff", cursor: "pointer" }}>
                        <Globe size={18} color={view === "3d" ? "#000" : "#999"} />
                    </button>
                </div>

                <AnimatePresence mode="wait">
                    {view === "3d" ? (
                        <motion.div key="3d" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <Globe3D />
                        </motion.div>
                    ) : (
                        <Map2D key="2d" />
                    )}
                </AnimatePresence>
            </div>

            <style>{`
        .pulse-marker {
          width: 12px;
          height: 12px;
          background: #0070f3;
          border-radius: 50%;
          position: relative;
        }
        .pulse-marker::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: #0070f3;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(3); opacity: 0; }
        }
      `}</style>
        </div>
    );
}